"use client";
import Link from "next/link";

const NftCard = ({ name, price, img, id }) => {
  return (
    <div className="group relative rounded-md overflow-hidden shadow-xl hover:shadow-2xl transition duration-150 ease-out hover:ease-in" >
      <Link href={`nfts/${id}`}>
        <div className={"w-[283px] bg-white"}>
          <img src={img} className="scale-101 object-cover h-[350px]" />
          <div className="p-[20px] pb-[40px]">
            <div className="mb-[5px] font-semibold">{name}</div>
            <div className="mb-[5px] font-semibold">{price}</div>
          </div>
        </div>
      </Link>

      <div className="absolute h-[40px] w-[100%] bottom-0 left-0 hidden group-hover:flex justify-center align-center">
        <button
          onClick={(e) => {
            e.stopPropagation();
            alert("asdadas");
          }}
          className="bg-slate-950 text-white w-[100%] hover:bg-slate-800"
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default NftCard;
