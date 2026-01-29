import { NextResponse } from 'next/server';
import { transporter, mailOptions } from '@/lib/mail';

export async function POST(request: Request) {
    const data = await request.json();

    if (!data || !data.name || !data.email || !data.message) {
        return NextResponse.json({ message: "Bad Request" }, { status: 400 });
    }

    try {
        await transporter.sendMail({
            ...mailOptions,
            subject: `New Contact Request from ${data.name}`,
            text: data.message,
            html: `
        <h3>New Contact Request</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `
        });
        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
