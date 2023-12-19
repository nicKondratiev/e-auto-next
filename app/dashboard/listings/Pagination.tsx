import "./styles.css";

import Link from "next/link";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Pagination({
  page,
  totalPages,
}: {
  page: number;
  totalPages: number;
}) {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex gap-2">
        <Link href={`?page=${page - 1}`}>
          <button className="button-styling" disabled={page <= 1}>
            <ArrowBackIosIcon fontSize="small" />
          </button>
        </Link>
        <Link href={`?page=${page + 1}`}>
          <button className="button-styling" disabled={page === totalPages}>
            <ArrowForwardIosIcon fontSize="small" />
          </button>
        </Link>
      </div>
    </div>
  );
}
