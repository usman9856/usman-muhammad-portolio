// app/api/contact-email/sendMail.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.NEXT_EMAIL_HOST,
    port: 587,
    secure: false,
    auth: {
        user: process.env.NEXT_EMAIL_USER,
        pass: process.env.NEXT_EMAIL_PASS,
    },
});

export async function POST(req: NextRequest) {
    try {
        const { to, subject, text, html } = await req.json(); // Parse the request body

        const mailOptions = {
            from: process.env.NEXT_EMAIL_USER,
            to,
            subject,
            text,
            html,
        };

        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
}
