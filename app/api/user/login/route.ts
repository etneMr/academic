import { apiAuth } from "@/services/axios/axoisRepo";
import Cookies from "js-cookie";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse ) {
  console.log(req.body)
  // const res = await fetch('https://data.mongodb-api.com/...', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'API-Key': process.env.DATA_API_KEY,
  //   },
  //   body: JSON.stringify({ time: new Date().toISOString() }),
  // })

  // const data = await res.json()

  // return NextResponse.json(data);
  return NextResponse.json("oke")
}
