import nodemailer from 'nodemailer';
import {WELCOME_EMAIL_TEMPLATE} from "@/lib/nodemailer/templates";

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NODEMAILER_EMAIL!,
        pass: process.env.NODEMAIL_PASSWORD!,
    }
})

export const sendWelcomeEmail = async ({ email, name, intro }: WelcomeEmailData) => {
    const htmlTemplate = WELCOME_EMAIL_TEMPLATE
        .replace('{{name}}', name)
        .replace('{{intro}}', intro);

    const mailOptions = {
        from: `"Equivest <equivest@isaacekaro864@gmail.com>"`,
        to: email,
        subject: `Welcome to Equivest - your stock market toolkit is ready!`,
        text: 'Thanks for joining Equivest',
        html: htmlTemplate,
    }

    await transporter.sendMail(mailOptions);
}