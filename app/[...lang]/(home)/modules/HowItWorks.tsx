import { purify } from "@/utils/misc";
import React from "react";

interface Step {
  step: string;
  title: string;
  description: string;
}

interface HowItWorksProps {
  title: string;
  steps: Step[];
}

export const HowItWorks = ({ title, steps }: HowItWorksProps) => {
  return (
    <section className="bg-dark text-white pb-16">
      <div className="container mx-auto px-4 md:px-0 max-w-7xl">
        <h2
          className="mb-4 md:mb-12 text-center"
          dangerouslySetInnerHTML={{ __html: purify(title) }}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step) => (
            <div key={step.step} className="bg-black p-6 rounded-lg">
              <h6 className="text-green mb-4">{step.step}</h6>
              <h3 className="mb-4">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const steps = [
  {
    step: "01 STEP",
    title: "Consultation",
    description:
      "Once you've submitted your project request, one of our web design experts will contact you to schedule a video call. During this 1:1 consultation, we will focus on understanding your vision, goals, and requirements.",
  },
  {
    step: "02 STEP",
    title: "Planning & Strategy",
    description:
      "Our team will conduct a thorough analysis of your requirements and create a detailed plan and strategy. This will include wireframes, project timelines, and a comprehensive approach to achieve your desired outcomes.",
  },
  {
    step: "03 STEP",
    title: "Design & Development",
    description:
      "Following the planning phase, our designers and developers will start working on your project. We will create visually appealing designs and develop a fully functional website tailored to your specifications.",
  },
  {
    step: "04 STEP",
    title: "Launch & Support",
    description:
      "After rigorous testing and your final approval, we will launch your website. We also provide ongoing support and maintenance to ensure your website remains up-to-date, secure, and running smoothly.",
  },
];
