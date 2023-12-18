import Link from "next/link";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Pagination({ page }: { page: number }) {
  return (
    <div>
      <Link href={`?page=${page - 1}`}>
        <button disabled={page <= 1}>
          <ArrowBackIosIcon fontSize="small" />
        </button>
      </Link>
      <Link href={`?page=${page + 1}`}>
        <button disabled={false}>
          <ArrowForwardIosIcon fontSize="small" />
        </button>
      </Link>
    </div>
  );
}
