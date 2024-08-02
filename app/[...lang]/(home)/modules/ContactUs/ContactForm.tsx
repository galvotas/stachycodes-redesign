"use client";

import { sendForm } from "@/app/actions";
import { Button } from "@/components/Button";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { BiCheckCircle } from "react-icons/bi";
import { MdCheckCircleOutline } from "react-icons/md";

export interface ContactFormProps {
  nameLabel: string;
  companyLabel: string;
  emailLabel: string;
  messageLabel: string;
  errorMessage: string;
  successMessage: string;
  cta: string;
}

export const ContactForm = ({
  nameLabel,
  companyLabel,
  emailLabel,
  messageLabel,
  errorMessage,
  successMessage,
  cta,
}: ContactFormProps) => {
  const [state, formAction] = useFormState(sendForm, {
    message: "",
  });

  return (
    <form
      className="space-y-6 bg-white text-black p-8 rounded-lg"
      action={formAction}
    >
      <div className="space-y-2">
        <p className="text-base font-extrabold">{nameLabel}</p>
        <input
          name="name"
          type="text"
          className="w-full bg-lightGray p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
      </div>

      <div className="space-y-2">
        <p className="text-base font-extrabold">{companyLabel}</p>
        <input
          name="company"
          type="text"
          className="w-full p-3 bg-lightGray rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
      </div>

      <div className="space-y-2">
        <p className="text-base font-extrabold">{emailLabel}</p>
        <input
          name="email"
          type="email"
          className="w-full p-3 bg-lightGray rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
      </div>

      <div className="space-y-2">
        <p className="text-base font-extrabold">{messageLabel}</p>
        <textarea
          name="message"
          className="w-full p-3 bg-lightGray rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
      </div>
      <div className="flex justify-center">
        <SubmitButton cta={cta} />
      </div>

      {state?.message === "error" && (
        <div className="flex items-center space-x-2 text-red-500">
          <MdCheckCircleOutline color="red" />
          <p aria-live="polite" className="text-base not-sr-only">
            {errorMessage}
          </p>
        </div>
      )}

      {state?.message === "success" && (
        <div className="flex items-center space-x-2 text-green-500">
          <BiCheckCircle color="green" />
          <p aria-live="polite" className="text-base not-sr-only">
            {successMessage}
          </p>
        </div>
      )}
    </form>
  );
};

const SubmitButton = ({ cta }: { cta: string }) => {
  const { pending } = useFormStatus();

  return <Button label={cta} disabled={pending} />;
};
