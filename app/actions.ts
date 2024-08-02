"use server";

import { revalidatePath } from "next/cache";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendForm(
  prevState: {
    message: string;
  },
  formData: FormData
) {
  const schema = z.object({
    name: z.string().min(1),
    company: z.string().min(1),
    email: z.string().email(),
    message: z.string().min(1),
  });

  const parse = schema.safeParse({
    name: formData.get("name"),
    company: formData.get("company"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!parse.success) {
    return { message: "Failed to create todo" };
  }

  const { name, company, email, message } = parse.data;

  try {
    await resend.emails.send({
      from: `${company} <onboarding@resend.dev>`,
      to: "hello@stachycodes.com",
      subject: `New message from ${name}`,
      html: `<p>${email}:<br/><br/> ${message}</p>`,
    });

    revalidatePath("/");
    return { message: "success" };
  } catch (e) {
    return { message: "error" };
  }
}
