"use client";

type FilledCounterProps = {
  total: number;
  count: number;
};

export default function FilledCounter({ total, count }: FilledCounterProps) {
  return (
    <div>
      <span className="text-xs text-gray-600">
        Information {count} / {total}
      </span>
    </div>
  );
}
