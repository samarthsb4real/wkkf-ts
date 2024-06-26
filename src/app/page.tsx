/* eslint-disable @next/next/no-img-element */
"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { HoverEffect } from "../components/ui/card-hover-effect";
import { ImagesSlider } from "../components/ui/images-slider";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import Link from "next/link";
import MapBanner from "../components/Mapbanner";
import { NextUIProvider } from "@nextui-org/react";

const images = [
  "logo-hdr.jpg",
  "ss/3.jpg",
  "ss/5.jpg",
  "ss/4.jpg",
  "ss/2.jpg",
  "ss/9.jpg",
  "ss/6.jpg",
  "ss/7.jpg",
  "ss/8.jpg",
];

const projects = [
  {
    title: "International Fumonkai Karatedo Federation",
    description:
      "Teaching Self-defense techniques and creating a beautiful mind",
    link: "https://fumonkaikawasaki.wixsite.com/fumonkai-karate",
    logo: "logo/ifkf.jpg",
  },
  {
    title: "Okinawan Karate and Ryukyu Ancient Martial Arts",
    description: "Association to learn Ryukyu Martial Arts and Ryusyu-kai",
    link: "https://ryusyu-kai.qwc.jp/",
    logo: "logo/kobudo.jpg",
  },
];

const testimonials = [
  {
    quote:
      "As the founder of the World Karate and Kobudo Federation, my vision was to create an organization that not only teaches martial arts but also fosters a global community dedicated to the principles of discipline, respect, and excellence",
    name: "— Shihan Mangesh Dhimate",
    title: "Founder",
  },

  {
    quote:
      "Serving as the chairman of the World Karate and Kobudo Federation has been a profound honor. Our commitment to high standards in training, competition, and cultural preservation is unwavering",
    name: "— Sensei Aniket Kawalkar",
    title: "Chairman",
  },

  {
    quote:
      "Serving as the Vice Chairman and Technical Director of WKKF has been an incredible journey. Our commitment to excellence in the core conceptual aspects of martial arts has set us apart as a leading organization in the field, & It is an honor to work alongside such dedicated individuals who share a passion for Karate and Kobudo, and I am excited about the future we are building together",
    name: "— Sensei Avdhut Shelar",
    title: "Vice Chairman & Technical Director",
  },

  {
    quote:
      "In my role as secretary, I am constantly reminded of the positive impact our federation has on individuals and communities globally. Our administrative team works tirelessly to ensure seamless operations, allowing our instructors and students to focus on their training and development. The World Karate and Kobudo Federation stands as a testament to what can be achieved when we work together towards a common goal of excellence and cultural preservation.",
    name: "— Sensei Abhijit Gaikwad",
    title: "Secretary",
  },
];

const content = [
  {
    title: "SYUKEN HATTORI",
    description: `
      President (2nd generation) of International FUMONKAI Karate Federation. 
      Graduated from Kokushikan University, Japanese Karate FUMONKAI. 
      Representing teachers, International FUMONKAI Karate Federation, Judge S
      rank, Instructor S rank, Minister of Athletics Strengthening of Pumen
      Club
    `,
    image: "/master-1.jpg",
  },
  {
    title: "TAKEYUKI ENDO",
    description: `
      Takeyuki Endo, a distinguished teacher of Ryukyu Kudo. 
      Awarded the rank of Ryo Akamine in 1999 while enrolled in the Ryukyu
      Kudo Conservation Society. 
      Played a significant role in the association, collaborating closely with
      Akamine Koshi. 
      In 2000, named his traditional martial arts school "Sage
      Rongch" to honor his mentors, Professor Taira Nobunaga and Ryo
      Akamine.
    `,
    image: "/master-2.jpg",
  },
];

export default function HomePage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <NextUIProvider>
      <title>World Karate & Kobudo Federation</title>

      <div className="hidden">
        <h1 className="text-xl text-white md:text-5xl font-bold mb-4 mt-4">
          World Karate & Kobudo Federation
        </h1>

        <p className="mb-4 text-sm md:text-xl text-justify text-white">
          The mission of the World Karate and Kobudo Federation (WKKF) is to
          promote, preserve, and enhance the practice of traditional Karate and
          Kobudo worldwide. We are dedicated to providing exceptional training,
          fostering a sense of community among practitioners, and upholding the
          highest standards of martial arts excellence. Through education,
          certification, and competition, we aim to inspire and support martial
          artists of all levels in their pursuit of mastery and personal growth.
        </p>
      </div>

      <div className="no-visible-scrollbar bg-black">
        {isMounted && (
          <ImagesSlider className="min-h-screen" images={images}>
            <motion.div
              initial={{ opacity: 0, y: -80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="z-50 flex flex-col justify-left items-center px-4 "
            >
              <motion.p className="font-bold text-xl md:text-6xl text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                Welcome to
                <br /> World Karate & Kobudo Federation
              </motion.p>
              <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
                <Link href="/about">
                  <span>Learn More about us</span>
                </Link>
                <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
              </button>
            </motion.div>
          </ImagesSlider>
        )}

        <div className="max-w-full mx-auto mt-12 md:px-8 ">
          <motion.p className="font-bold text-xl md:text-4xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            Our Associates
          </motion.p>

          <div className="flex">
            <HoverEffect items={projects} />
          </div>

          <motion.p className="font-bold text-xl md:text-4xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-8">
            Masters
            <br />
          </motion.p>

          <div className="rounded-2xl overflow-hidden bg-black-100 border border-white/[0.2] group-hover:border-slate-700 relative z-20">
            <div className="w-full p-8 flex flex-col items-center">
              <div className="flex flex-col md:flex-row items-center md:items-start m-8">
                <div className="w-full md:w-3/4 text-center md:text-left  ">
                  <h1 className="text-xl text-white md:text-5xl font-bold mb-4 mt-4">
                    Shihan Syuken Hattori
                  </h1>
                  <p className="font-semibold text-gray-400 text-lg md:text-3xl mb-6">
                    International Fumonkai Karatedo Federation
                  </p>

                  <p className="mb-4 text-sm md:text-xl text-justify text-white">
                    He has been engaged in martial arts since childhood, earning
                    high ranks in various disciplines: Aiki Martial Arts (9th
                    Dan), Goju Jiu-Jitsu (9th Dan), Shito-ryu Kenpo Karatedo
                    (7th Dan), Seishin-ryu Kenpo Karatedo (7th Dan), and Karate
                    Leaders Association (6th Dan). He is also a master in the
                    All Japan Martial Arts Association, holds ranks in
                    kickboxing (Sandan), Armor Karate (Sandan), WTF Taekwondo
                    (1st Dan), and practices Okinawa Kobudo and various weapons.
                    A former all-Japan kickboxing professional and mixed martial
                    artist, he is dedicated to systematizing and passing on
                    these techniques to future generations.
                  </p>
                </div>

                <div className="w-full mt-4 md:w-1/2 md:mt-0 md:ml-8 flex justify-center">
                  <img
                    src="/master-1.jpg"
                    alt="founder"
                    className="rounded-3xl border w-full md:w-2/3"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="my-8 rounded-2xl overflow-hidden bg-black-100 border border-white/[0.2] group-hover:border-slate-700 relative z-20">
            <div className="w-full p-8 flex flex-col items-center text-white">
              <div className="flex flex-col md:flex-row items-center md:items-start m-8">
                <div className="w-full md:w-3/4 text-center md:text-left  ">
                  <h1 className="text-xl text-white md:text-5xl font-bold mb-4 mt-4">
                    Sensei Takeyuki Endo
                  </h1>
                  <p className="font-semibold text-gray-400 text-lg md:text-3xl mb-6">
                    Okinawan Karate and Ryukyu Ancient Martial Arts
                  </p>

                  <p className="mb-4 text-sm md:text-xl text-justify text-white">
                    He was involved in the revival of Ryukyu Kobudo at the
                    Nippon Karate-do Itosu-kai Headquarters Dojo and taught at
                    the association. He then left Itosu-kai and studied Ryukyu
                    Kobudo in Okinawa, the home of karate and Ryukyu Kobudo.
                    After many years of training under Okinawan samurai and
                    master of Ryukyu Kobudo, Kosuke Yonamine, he was ordered to
                    go independent in November 2021 and founded Ryushu-kai. He
                    is a high-ranking practitioner of karate, including
                    Itosu-ryu, Uechi-ryu, Kobayashi-ryu, and Goju-ryu.
                  </p>
                </div>

                <div className="w-full mt-4 md:w-1/2 md:mt-0 md:ml-8 flex justify-center">
                  <img
                    src="/master-2.jpg"
                    alt="founder"
                    className="rounded-3xl border w-full mt-4 md:w-2/3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-md flex flex-col antialiased bg-black-900 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden p-4 md:p-8">
          <motion.p className="font-bold text-lg sm:text-xl md:text-4xl text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            Testimonials
            <br />
          </motion.p>
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex justify-center items-center text-white bg-gray-900 py-8">
          <MapBanner
            address="Tulsi Vihar, Asangaon, Maharashtra 421601"
            lat={19.4356443857464} // Example latitude
            lng={73.31021615181228} // Example longitude
          />
        </div>
      </div>
    </NextUIProvider>
  );
}
