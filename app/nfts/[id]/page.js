import { getUser } from "@/api/getUsers";

export default async function Nft({ params }) {
  const user = await getUser(params.id);

  return (
    <div>
      {user.id}: {user.name}, {user.username}
    </div>
  );
}
