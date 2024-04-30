"use server";
import { FormValues } from "@/schemas";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY);

export const sendEmailAction = async (values: FormValues) =>
  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "jensmikael.stjernberg.work@gmail.com",
    subject: `New messsage from ${values.name} sent from Portfolio`,
    html: `<div><h1>New Message from <strong>${values.name}</strong></h1>
    <h3>Email: <strong>${values.email}</strong></h3><p>${values.text}</p></div>`,
  });
 