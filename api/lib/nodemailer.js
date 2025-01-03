import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();


export const sendEmail = async (ReceiverEmail, userText, SenderName) => {
    console.log("Req from nodemailer", ReceiverEmail, userText, SenderName);

    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false, 
        auth: {
            user: `${process.env.NODEMAILER_EMAIL}`,
            pass: `${process.env.NODEMAILER_PASS}`,
        },
    });

    
    const info = await transporter.sendMail({
        from: `'PropertyLink' <ahmadshakib770@gmail.com>`, 
        to: `${ReceiverEmail}`, 
        subject: "Interested for your property", 
        html: `<b>${SenderName} is interested in your property. ${userText}</b>`, // html body
    });

    
    console.log("Message sent: %s", info.messageId);
    
    return ({ success: true });


}