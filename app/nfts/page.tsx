import { getNfts } from "../../api/getNfts";
import { getUsers } from "../../api/getUsers";
import NftCard from "./components/NftCard";

export default async function Nfts() {
  const nfts = await getNfts(); //await getUsers();

  return (
    <div className={"flex gap-5 flex-wrap p-[50px] bg-gray-200 "}>
      {nfts.map((nft) => (
        <div key={nft.id}>
          <NftCard
            img={
              "https://i.seadn.io/gcs/files/082f5c1adec745216a05db2f026fc592.png?auto=format&dpr=1&w=384"
            }
            name={nft.name}
            id={nft.id}
            price={nft.price}
          />
        </div>
      ))}
    </div>
  );
}
