import { InputFields } from "../../app/store";

import useStore from "../../app/store";

type ChildProps = {
  data: string[];
  name: keyof InputFields;
};

// Child.tsx receives data and setter function of different components like (manufacturer, models and etc)
const Child = ({ data, name }: ChildProps) => {
  const { updateField, inputFields } = useStore();

  const item = String(inputFields[name]);

  const filteredData =
    data.indexOf(item) !== -1
      ? data
      : data.filter((val) => val.toLowerCase().startsWith(item.toLowerCase()));

  return (
    <div>
      <div className="relative flex flex-col">
        {filteredData?.map((val, id) => (
          // we itterate over data and set item based on users selection
          <div
            onClick={() => updateField(name, val)}
            className={`${
              item === val ? "bg-gray-100" : "bg-white"
            } flex cursor-pointer items-center px-5 py-2 text-black duration-150 ease-in hover:bg-gray-100`}
            key={id}
          >
            <p className="text-sm">{val}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Child;
