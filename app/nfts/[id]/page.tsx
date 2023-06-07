import { getNft } from "../../../api/getNfts";

export default async function Nft({ params }) {
  const user = await getNft(params.id);

  return (
    <div>
      {user.id}: {user.name}, {user.username}
    </div>
  );
}
