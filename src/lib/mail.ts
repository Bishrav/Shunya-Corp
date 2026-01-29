import nodemailer from 'nodemailer';

const user = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
    service: 'gmail', // or your preferred SMTP service
    auth: {
        user,
        pass,
    },
});

export const mailOptions = {
    from: user,
    to: process.env.EMAIL_TO,
};
