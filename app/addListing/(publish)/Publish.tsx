import { rootContainerStyles } from "../page";
import PublishButton from "./PublishButton";

export default function Publish() {
  return (
    <div className={`${rootContainerStyles} flex items-end`}>
      <PublishButton />
    </div>
  );
}
