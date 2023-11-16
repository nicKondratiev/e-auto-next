import SectionHeader from "../../../components/SectionHeader";
import PriceInput from "../../../components/input/PriceInput";

import { rootContainerStyles } from "../page";

import PaymentsIcon from "@mui/icons-material/Payments";

export default function Price() {
  return (
    <div className={rootContainerStyles}>
      <SectionHeader count={0} total={1}>
        <PaymentsIcon fontSize="medium" />
        <h3>Price</h3>
      </SectionHeader>

      <div className="h-full w-full">
        <PriceInput />
      </div>
    </div>
  );
}
