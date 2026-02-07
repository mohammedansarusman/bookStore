import { BooksList } from "../components/books/BooksList";

export default function StorePage() {
  return (
    <div className="w-full bg-purple-200 ml-15 md:ml-70">
      {/* Heading */}
      <header className="flex justify-center py-5">
        <h1 className="text-3xl font-extralight">Best Sellers</h1>
      </header>
      {/* Books list */}
      <BooksList />
    </div>
  );
}
