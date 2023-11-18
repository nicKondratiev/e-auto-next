import SectionHeader from "../../../components/SectionHeader";

import { rootContainerStyles } from "../page";

import PaymentsIcon from "@mui/icons-material/Payments";
import PriceFilledCounter from "./PriceFilledCounter";
import PriceInput from "./PriceInput";

export default function Price() {
  return (
    <div className={rootContainerStyles}>
      <SectionHeader filledCounter={<PriceFilledCounter />}>
        <PaymentsIcon fontSize="medium" />
        <h3>Price</h3>
      </SectionHeader>

      <div className="h-[60px] w-full">
        <PriceInput />
      </div>
    </div>
  );
}
