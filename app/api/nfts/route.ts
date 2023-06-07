import { connectMongo } from "../../../db/connectMongo";
import Nft from "../../../models/Nft";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  await connectMongo();
  try {
    const body = await request.json();
    const nft = await Nft.create(body);
    return NextResponse.json(nft);
  } catch (err) {
    return NextResponse.json(err);
  }
}
