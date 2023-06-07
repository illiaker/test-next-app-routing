import { connectMongo } from "../db/connectMongo";
import Nft from "../models/Nft";

export const getNfts = async () => {
  await connectMongo();

  return await Nft.find().exec();
};

export const getNft = async (id: number) => {
  await connectMongo();
  return await Nft.findOne({ id: id }).exec();
};
