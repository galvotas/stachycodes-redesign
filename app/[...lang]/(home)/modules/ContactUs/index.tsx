import React from "react";
import { ContactDetails, ContactDetailsProps } from "./ContactDetails";
import { ContactForm, ContactFormProps } from "./ContactForm";

interface ContactUsProps extends ContactDetailsProps, ContactFormProps {}

export const ContactUs = ({
  title,
  description,
  happyClientLabel,
  ...rest
}: ContactUsProps) => {
  return (
    <section id="contact" className="bg-dark text-white py-8 md:py-16">
      <div className="container mx-auto px-4 md:px-0 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <ContactDetails
            title={title}
            description={description}
            happyClientLabel={happyClientLabel}
          />

          <ContactForm {...rest} />
        </div>
      </div>
    </section>
  );
};
