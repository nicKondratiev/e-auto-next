import FilledCounter from "./FilledCounter";

const SectionHeader = ({
  children,
  filledCounter,
}: {
  children: React.ReactNode;
  filledCounter: React.ReactNode;
}) => (
  <div className="flex items-center justify-between">
    <div className="flex gap-3">{children}</div>
    {filledCounter}
  </div>
);

export default SectionHeader;
