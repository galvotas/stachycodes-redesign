import Image from "next/image";
import React from "react";
import InfesImg from "@/public/infes.png";
import StatybosImg from "@/public/statybos2.png";
import ShawnImg from "@/public/shawn.jpeg";
import RafaelImg from "@/public/rafael.jpg";
import { purify } from "@/utils/misc";

interface OurWork {
  title: string;
  projects: Project[];
}

interface Project {
  title: string;
  link: string;
  stats: Stat[];
  review: Review;
}

interface Stat {
  value: string;
  description: string;
}

interface Review {
  name: string;
  position: string;
  text: string;
}

export const OurWork = ({ title, projects }: OurWork) => {
  return (
    <section className="bg-dark py-8 md:py-16 text-white">
      <div className="container mx-auto">
        <h2
          className="text-center mb-6"
          dangerouslySetInnerHTML={{ __html: purify(title) }}
        />
        {/* <p className="text-center max-w-3xl mx-auto mb-4 md:mb-16">
          {description}
        </p> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {projects.map((project, index) => (
            <div key={index} className="p-6 rounded-lg shadow-md">
              <div>
                <h3>{project.title}</h3>
                <br />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.link}
                >
                  <Image
                    src={projectImages[index]}
                    alt="project image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "1.5rem",
                      border: "12px solid #43de78",
                    }}
                  />
                </a>

                <div className="mt-4 flex justify-between">
                  {project.stats.map((stat, index) => (
                    <div key={index} className="mb-4 text-center">
                      <h4 className="text-green">{stat.value}</h4>
                      <p>
                        {stat.description.split(" ").map((word, i) => (
                          <span key={i} className={i === 1 ? "font-bold" : ""}>
                            {word}{" "}
                          </span>
                        ))}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-white">
                <div className="mt-4 flex items-center justify-center mb-4">
                  <div className="mr-4">
                    <Image
                      src={reviewersImages[index]}
                      alt="avatar"
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h4>{project.review.name}</h4>
                    <p>{project.review.position}</p>
                  </div>
                </div>
                <p className="mt-2 text-md italic text-center">
                  {project.review.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const projectImages = [InfesImg, StatybosImg];

const reviewersImages = [ShawnImg, RafaelImg];
