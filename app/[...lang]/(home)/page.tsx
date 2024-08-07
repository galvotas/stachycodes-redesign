import { Hero } from "./modules/Hero";
import { OurWork } from "./modules/OurWork";
import { FAQ } from "./modules/FAQ";
import { WhatWeDo } from "./modules/WhatWeDo";
import { ContactUs } from "./modules/ContactUs";
import { Footer } from "@/components/Footer";
import { Divider } from "./modules/Divider";
import { HowItWorks } from "./modules/HowItWorks";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";

interface HomeProps {
  params: { lang: [Locale] };
}

export default async function Home({ params: { lang } }: HomeProps) {
  const language = lang[0];

  const dictionary = await getDictionary(language);

  const { hero, what_we_do, our_work, faq, contact_us, how_it_works } =
    dictionary.home;

  return (
    <>
      <Hero
        dict={{
          ...hero,
          cta: dictionary.common.cta,
        }}
        lang={language}
      />
      <WhatWeDo {...what_we_do} cta={dictionary.common.cta} />
      <OurWork {...our_work} />
      <FAQ {...faq} />
      <ContactUs
        {...contact_us.contact_details}
        {...contact_us.contact_form}
        cta={dictionary.common.cta}
      />
      <HowItWorks {...how_it_works} />
      <Divider />
      <Footer />
    </>
  );
}
