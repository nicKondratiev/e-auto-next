import FilledCounter from "./FilledCounter";

const SectionHeader = ({
  children,
  count,
  total,
}: {
  children: React.ReactNode;
  count: number;
  total: number;
}) => (
  <div className="flex items-center justify-between">
    <div className="flex gap-3">{children}</div>
    <FilledCounter count={count} total={total} />
  </div>
);

export default SectionHeader;
