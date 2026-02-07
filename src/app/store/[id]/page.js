import { books } from "@/app/contants/fake-data";
import Image from "next/image";

export default async function BooksListPage({ params }) {
  const { id } = await params;
  const result = books.find((item) => item.id === id);
  const { title, description, author, cover, rentPrice, sellPrice, genre } =
    result;
  console.log("result=>", result);
  return (
    <div className="w-full ml-15 md:ml-70 flex flex-col items-center py-10 xl:flex xl:flex-row bg-purple-200 xl:justify-center">
      {/* image */}
      <div className="w-80 h-100 bg-amber-500 relative">
        <Image src={cover} alt="book-pic" fill className="object-fill" />
      </div>
      {/* title */}
      <div className="w-full xl:w-1/2">
        <div className="flex flex-col items-start w-full mt-6 pl-10">
          <h2 className="text-2xl font-medium">{title}</h2>
          <p className="text-2xl font-extralight">{author}</p>
          <p className="font-extralight">{genre}</p>
        </div>
        <div className="w-full flex px-10 mt-10">
          <div className="w-1/2 flex flex-col items-start">
            <p className="font-light">Rent Price</p>
            <p>{`AED ${rentPrice}`}</p>
          </div>
          <div className="w-1/2 flex flex-col items-end">
            <p className="font-light">Sell Price</p>
            <p>{`AED ${sellPrice}`}</p>
          </div>
        </div>
        <div className="w-full px-10 mt-5 font-light text-md">
          <p>{description}</p>
<<<<<<< HEAD
=======
          
>>>>>>> 8c51dff (test)
        </div>
      </div>
    </div>
  );
}
