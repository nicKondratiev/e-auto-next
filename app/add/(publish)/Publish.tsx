import { rootContainerStyles } from "../ListingOptions";
import PublishButton from "../../../components/button/button_components/PublishButton";

export default function Publish() {
  return (
    <div className={`${rootContainerStyles} flex items-end`}>
      <PublishButton />
    </div>
  );
}
