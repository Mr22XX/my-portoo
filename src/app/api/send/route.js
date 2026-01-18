import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    const data = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: email,
      subject,
      html: `<p>Terima Kasih Telah Menghubungi Saya ! Your message : {{message}} </p> ` ,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("RESEND ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error?.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}
