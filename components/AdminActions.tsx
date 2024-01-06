import { Button } from "@nextui-org/react";

type AdminActionsTypes = {
  isBanned: boolean;
};

export default function AdminActions({ isBanned }: AdminActionsTypes) {
  return (
    <div className="flex flex-col gap-2 rounded-lg bg-white px-4 py-2 text-sm shadow-small">
      <span className="font-semibold">Actions</span>
      <div className="flex gap-2 font-medium">
        <Button color="primary" className="w-1/2">
          Update Role
        </Button>
        {isBanned ? (
          <Button color="secondary" className="w-1/2">
            Unban
          </Button>
        ) : (
          <Button color="danger" className="w-1/2">
            Ban
          </Button>
        )}
      </div>
    </div>
  );
}
