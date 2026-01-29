import nodemailer from 'nodemailer';

const user = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
};
