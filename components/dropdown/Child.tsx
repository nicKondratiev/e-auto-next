type ChildProps = {
  data: string[];
  inputVal: string;
  setItem: (item: string) => void;
  item: string;
};

// Child.tsx receives data and setter function of different components like (manufacturer, models and etc)
const Child = ({ data, inputVal, item, setItem }: ChildProps) => {
  const itemSetter = (val: string) => {
    setItem(val);
  };

  const filteredData =
    data.indexOf(inputVal) !== -1
      ? data
      : data.filter((val) =>
          val.toLowerCase().startsWith(inputVal.toLowerCase())
        );

  return (
    <div>
      <div className="relative flex flex-col">
        {filteredData?.map((val, id) => (
          // we itterate over data and set item based on users selection
          <div
            onClick={() => itemSetter(val)}
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
