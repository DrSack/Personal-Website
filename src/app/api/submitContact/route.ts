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
      return NextResponse.json({ data: "/api/submitContact" }, { status: 200 });
    } else throw new Error();
  } catch (e) {
    console.error('ERROR: ', e)
    return NextResponse.json({ message: 'There was a problem sending your request' }, { status: 500 });
  }
}