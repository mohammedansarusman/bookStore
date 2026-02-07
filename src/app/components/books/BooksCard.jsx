import Image from "next/image";
export const BooksCard = ({ books }) => {
  const { cover, author, genre, rentPrice, sellPrice } = books;
  return (
    <div className="w-60 h-100 rounded-lg">
      {/* image */}
      <aside className="w-full h-3/4 relative">
        <Image src={cover} alt="books-pic" fill className="object-fill" />
      </aside>
      {/* content */}
      <aside className="w-full h-1/4 flex flex-col items-center justify-center">
        {/* author */}
        <div className="w-full flex px-2">
          {/* rent price */}
          <div className="flex flex-col items-start w-1/2">
            <p className="font-light">Rent Price</p>
            <p>{`AED ${rentPrice}`}</p>
          </div>
          {/* selling price */}
          <div className="flex flex-col items-end w-1/2">
            <p className="font-light">Sell Price</p>
            <p>{`AED ${sellPrice}`}</p>
          </div>
        </div>
        <p className="font-medium">{author}</p>
        <p className="font-light">{genre}</p>
      </aside>
    </div>
  );
};
