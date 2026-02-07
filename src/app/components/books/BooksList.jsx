import { BooksCard } from "./BooksCard";
import { books } from "@/app/contants/fake-data";
import Link from "next/link";
export const BooksList = () => {
  return (
    <div className="w-full flex flex-col items-center gap-5 md:flex-row md:flex-wrap md:justify-center md:gap-10 lg:gap-20">
      {books.map((item) => (
        <Link key={item.id} href={`/store/${item.id}`}>
          <BooksCard books={item}  />
        </Link>
      ))}
    </div>
  );
};
