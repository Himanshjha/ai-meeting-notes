import { NextResponse } from "next/server";
import resend from "@/lib/resend";

export async function POST(req: Request) {
try {
    const { email, summary } = await req.json();

    await resend.emails.send({
    from: "AI Notes <onboarding@resend.dev>",
    to: email,
    subject: "Your AI Meeting Summary",
    text: summary,
    });

    return NextResponse.json({ success: true });

} catch (error) {
    console.error("Send Email API error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
}
}