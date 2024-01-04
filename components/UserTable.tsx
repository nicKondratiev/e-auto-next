"use client";

import React, { useMemo, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Input,
} from "@nextui-org/react";
import { columns, renderCell } from "../app/dashboard/admin/columns";
import { User } from "../app/dashboard/admin/page";
import UserCard from "./UserCard";

export default function UserTable({ users }: { users: User[] }) {
  const [filterValue, setFilterValue] = useState("");
  const [selectedUserId, setSelectedUserId] = useState("");
  const hasSearchFilter = Boolean(filterValue);

  const filteredItems = useMemo(() => {
    let filteredUsers = [...users];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.username.toLowerCase().includes(filterValue.toLowerCase())
      );
    }

    return filteredUsers;
  }, [users, filterValue, hasSearchFilter]);

  const rowsPerPage = 5;
  const [page, setPage] = useState(1);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems]);

  const topContent = useMemo(() => {
    return (
      <div>
        <Input
          isClearable
          size="sm"
          className="w-[300px]"
          placeholder="Search by username..."
          onChange={(e) => setFilterValue(e.target.value)}
          value={filterValue}
        />
      </div>
    );
  }, [filterValue]);

  return (
    <>
      <Table
        className="min-h-[500px] w-[800px]"
        aria-label="Users table"
        topContent={topContent}
        bottomContent={
          <div className="flex justify-center">
            <Pagination
              showControls
              total={pages}
              page={page}
              onChange={(page) => setPage(page)}
            />
          </div>
        }
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={items} emptyContent={"No users to display."}>
          {(item) => (
            <TableRow
              onClick={() => setSelectedUserId(item._id)}
              className="cursor-pointer duration-200 hover:scale-y-105 hover:bg-gray-100"
              key={item._id}
            >
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <UserCard id={selectedUserId} />
    </>
  );
}
