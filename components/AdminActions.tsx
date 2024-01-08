import { Button, Card, Slider } from "@nextui-org/react";
import { useEffect, useState } from "react";

type AdminActionsTypes = {
  isBanned: boolean;
};

export default function AdminActions({ isBanned }: AdminActionsTypes) {
  const [selectedDays, setSelectedDays] = useState<number>(0);
  const [resultDate, setResultDate] = useState<string | null>(null);

  console.log(selectedDays);
  useEffect(() => {
    const currentDate = new Date();
    const futureDate = new Date(currentDate);
    futureDate.setDate(
      currentDate.getDate() + parseInt(String(selectedDays), 10)
    );

    setResultDate(futureDate.toLocaleDateString());
  }, [selectedDays]);

  return (
    <div className="flex h-full flex-col justify-between text-sm">
      <span className=" font-semibold">Actions</span>

      <Card className="flex flex-row items-center gap-4 rounded-lg px-2 py-3 shadow-small">
        <span className=" font-semibold">Change Role:</span>
        <div className="flex gap-2 px-1">
          <Button
            size="sm"
            color="primary"
            disableAnimation
            className="rounded-lg"
          >
            USER
          </Button>
          <Button
            size="sm"
            color="primary"
            disableAnimation
            className="rounded-lg"
          >
            ADMIN
          </Button>
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
                onChangeEnd={(val) => setSelectedDays(val as number)}
                size="sm"
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
        </div>
      </Card>

      <Button color="primary" className="rounded-lg" disableAnimation>
        Save Changes
      </Button>
    </div>
  );
}
