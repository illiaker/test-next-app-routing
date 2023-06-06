import { getUsers } from "@/api/getUsers";
import NftCard from "@/app/nfts/components/NftCard";

export default async function Nfts() {
  const users = await getUsers();

  return (
    <div className={"flex gap-5 flex-wrap p-[50px] bg-gray-200 "}>
      {users.map((usr) => (
        <div key={usr.id}>
          <NftCard
            img={
              "https://i.seadn.io/gcs/files/082f5c1adec745216a05db2f026fc592.png?auto=format&dpr=1&w=384"
            }
            name={usr.name}
            id={usr.id}
            price={"100 ETH"}
          />
        </div>
      ))}
    </div>
  );
}
