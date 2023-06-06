export const getUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) throw new Error("Error");

  return res.json();
};

export const getUser = async (id) => {
  console.log(id);
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (!res.ok) throw new Error("Error");

  return res.json();
};
