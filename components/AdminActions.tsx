import { Button, Card, Slider } from "@nextui-org/react";
import { useEffect, useState } from "react";
import HistoryIcon from "@mui/icons-material/History";
import { UserInterface } from "../app/dashboard/admin/page";
import { useRouter } from "next/navigation";

type AdminActionsTypes = {
  selectedUser: UserInterface;
  userRole: UserInterface["role"];
  isBanned: boolean;
  banExpirationDate: string | null;
};

export default function AdminActions({
  userRole,
  selectedUser,
  isBanned,
  banExpirationDate,
}: AdminActionsTypes) {
  const router = useRouter();

  const [selectedDays, setSelectedDays] = useState<number | number[]>(0);
  const [resultDate, setResultDate] = useState<string | null>(
    String(new Date().toLocaleDateString())
  );
  const [isUnbanSelected, setIsUnbanSelected] = useState<boolean>(false);
  const [updatedRole, setUpdatedRole] = useState<
    AdminActionsTypes["userRole"] | null
  >(userRole);

  useEffect(() => {
    const currentDate = new Date();
    const futureDate = new Date(currentDate);
    futureDate.setDate(
      currentDate.getDate() + parseInt(String(selectedDays), 10)
    );

    setResultDate(futureDate.toLocaleDateString());
  }, [selectedDays]);

  useEffect(() => {
    setUpdatedRole(null);
  }, [selectedUser]);

  const updateUserRole = (role: typeof userRole | null) => {
    setUpdatedRole(role);
  };

  const updateSelectedDays = (val: number | number[]) => {
    setSelectedDays(val);
  };

  const updateUserRequest = (userId: UserInterface["_id"]) => {
    fetch(`http://localhost:3000/api/admin/update-role?userId=${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...selectedUser,
        role: updatedRole || userRole,
        isBanned: isUnbanSelected ? null : isBanned,
        banExpirationDate: isUnbanSelected ? null : banExpirationDate,
      }),
    })
      .then((res) => {
        if (res.ok) {
          console.log("role updated");
          router.refresh();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(isUnbanSelected);

  return (
    <div className="flex h-full flex-col justify-between text-sm">
      <div className="flex flex-col gap-2">
        <span className=" font-semibold">Actions</span>
        <Card className="flex flex-row items-center gap-4 rounded-lg px-2 py-3 shadow-small">
          <span className=" font-semibold">Change Role:</span>
          <div className="flex gap-2 px-1">
            {userRole === "ADMIN" ? (
              <Button
                onClick={() => updateUserRole("USER")}
                size="sm"
                color="primary"
                variant={updatedRole ? "solid" : "bordered"}
                disableAnimation
                className="rounded-lg border"
              >
                UPDATE TO USER
              </Button>
            ) : (
              <Button
                onClick={() => updateUserRole("ADMIN")}
                size="sm"
                color="primary"
                variant={updatedRole ? "solid" : "bordered"}
                disableAnimation
                className="rounded-lg border"
              >
                UPDATE TO ADMIN
              </Button>
            )}
            <button
              onClick={() => updateUserRole(null)}
              disabled={!updatedRole}
              className="flex cursor-pointer items-center justify-center rounded-lg border border-red-300 bg-red-100 px-1  duration-150 active:box-border active:scale-105"
            >
              <HistoryIcon />
            </button>
          </div>
        </Card>
        <Card className="flex flex-col rounded-lg px-2 py-3 shadow-small">
          <div className="flex flex-col gap-2">
            <div>
              <span className=" font-semibold">User Suspension:</span>
              <div className="flex gap-2 px-1">
                <Slider
                  label="Select Days"
                  minValue={0}
                  maxValue={28}
                  step={1}
                  getValue={(value) => `${value} Days`}
                  onChangeEnd={(val) => updateSelectedDays(val as number)}
                  size="sm"
                  isDisabled={isBanned}
                  marks={[
                    { value: 0, label: "0" },
                    { value: 7, label: "7" },
                    { value: 14, label: "14" },
                    { value: 21, label: "21" },
                    { value: 28, label: "28" },
                  ]}
                  classNames={{
                    mark: "font-semibold text-xs",
                    value: "font-medium text-sm",
                  }}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              {!isBanned ? (
                <div>
                  <span className="font-semibold">Suspension Period:</span>
                  <Card
                    className={`flex flex-row justify-center gap-1 rounded-lg border  ${
                      Number(selectedDays)
                        ? "border-red-300 bg-red-100"
                        : "border-gray-300 bg-gray-200"
                    } px-1 py-2 font-medium duration-200`}
                  >
                    <span>{new Date().toLocaleDateString()}</span>-
                    <span>{resultDate}</span>
                  </Card>
                </div>
              ) : (
                <div>
                  <span className="font-semibold">Remove Suspension:</span>
                  <button
                    onClick={() => setIsUnbanSelected(!isUnbanSelected)}
                    className={`flex w-full flex-row items-center justify-center rounded-lg border border-blue-300 bg-blue-200 px-1 py-2 font-medium duration-300 hover:border-blue-400 hover:bg-blue-300 ${
                      isUnbanSelected && "border-blue-600 bg-blue-600"
                    }`}
                  >
                    Unban User
                  </button>
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>
      <button
        onClick={() => updateUserRequest(selectedUser._id)}
        color="primary"
        className="w-full cursor-pointer rounded-lg bg-blue-500 py-2 font-semibold text-white duration-300"
        disabled={
          !(
            updatedRole ||
            selectedDays ||
            isUnbanSelected ||
            (updatedRole && selectedDays)
          )
        }
      >
        Save Changes
      </button>
    </div>
  );
}
