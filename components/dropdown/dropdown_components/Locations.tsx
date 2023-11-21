"use client";

// reusables
import Child from "../Child";
import DropDown from "../Dropdown";

// json data
import locationData from "../../../app/json/locations.json";

const Locations = () => {
  const locations = locationData.georgia;

  return (
    <DropDown
      header="Location"
      name="location"
      canOpen={true}
      Child={<Child data={locations} name="location" />}
    />
  );
};

export default Locations;
