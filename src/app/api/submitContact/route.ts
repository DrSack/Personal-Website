import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const request = await req.json()
    const web3Request = {
      ...request,
      access_key: process.env.WEB3_ACCESS_KEY
    };
    const web3Response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(web3Request)
    }).then(e => e.json())

    if (web3Response.success) {
      return NextResponse.json({ success: true }, { status: 200 });
    } else throw new Error(web3Response.message);
  } catch (e: any) {
    console.error('ERROR: ', e)
    return NextResponse.json({ success: false, message: e.message }, { status: 500 });
  }
}