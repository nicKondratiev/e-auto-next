import SectionHeader from "../../../components/SectionHeader";
import ImgInput from "../../../components/input/ImgInput";
import { rootContainerStyles } from "../page";

import PhotoIcon from "@mui/icons-material/Photo";

export default function Photo() {
  return (
    <div className={rootContainerStyles}>
      <SectionHeader>
        <PhotoIcon fontSize="medium" />
        <h3>Photo</h3>
      </SectionHeader>

      <div className="h-full w-full">
        <ImgInput />
      </div>
    </div>
  );
}
