import React from "react";
import { User as UserType } from "./page";
import { Tooltip, User, Chip } from "@nextui-org/react";
import { EyeIcon, EditIcon, DeleteIcon } from "../../../components/icons";
import DeleteButton from "../../../components/button/button_components/UserDelete_Button";

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

export const renderCell = (user: UserType, columnKey: React.Key) => {
  const cellValue = user[columnKey as keyof UserType];

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
            {/* <span className="cursor-pointer text-lg text-danger active:opacity-50">
              <DeleteIcon />
            </span> */}
            <DeleteButton userId={user._id} />
          </Tooltip>
        </div>
      );
    default:
      return cellValue;
  }
};
