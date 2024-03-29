"use client";

import React from "react";
import { UserInterface } from "./page";
import { Tooltip, User, Chip } from "@nextui-org/react";
import DeleteButton from "../../../components/button/button_components/UserDelete_Button";
import EyeButton from "../../../components/button/button_components/EyeIcon_Button";

export const columns = [
  {
    key: "username",
    label: "USERNAME",
  },
  {
    key: "email",
    label: "EMAIL",
  },
  {
    key: "role",
    label: "ROLE",
  },
  {
    key: "actions",
    label: "Actions",
  },
];

export const renderCell = (user: UserInterface, columnKey: React.Key) => {
  const cellValue = user[columnKey as keyof UserInterface];

  switch (columnKey) {
    case "username":
      return <User name={cellValue}>{user.email}</User>;
    case "role":
      return (
        <div className="flex flex-col">
          <p
            className={`${
              cellValue === "USER" ? "text-gray-500" : "text-blue-500"
            } text-sm font-semibold capitalize`}
          >
            {cellValue}
          </p>
        </div>
      );
    case "status":
      return (
        <Chip className="capitalize" color={"success"} size="sm" variant="flat">
          {cellValue}
        </Chip>
      );
    case "actions":
      return (
        <div className="relative flex items-center gap-2">
          <Tooltip color="danger" content="Delete user">
            <DeleteButton userId={user._id} />
          </Tooltip>
          <Tooltip color="default">
            <EyeButton />
          </Tooltip>
        </div>
      );
    default:
      return cellValue;
  }
};
