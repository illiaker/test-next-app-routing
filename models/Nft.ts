import { Schema, model, models } from "mongoose";


const nftSchema = new Schema({
  name: String,
  id: Number,
  price: String
});

const Nft = models.Nft || model("Nft", nftSchema);

export default Nft;