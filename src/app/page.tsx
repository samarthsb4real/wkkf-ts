"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { HoverEffect } from "../components/ui/card-hover-effect";
import { ImagesSlider } from "../components/ui/images-slider";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import Link from "next/link";
import MapBanner from "../components/Mapbanner";
import { NextUIProvider } from "@nextui-org/react";

const images = [
  "https://img.goodfon.com/original/2475x1650/1/f0/kick-karate-fight-training.jpg",
  "https://images.unsplash.com/photo-1526889588514-2e695856df85?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const projects = [
  {
    title: "International Fumonkai Karatedo Federation",
    description:
      "Teaching Self-defense techniques and creating a beautiful mind",
    link: "https://fumonkaikawasaki.wixsite.com/fumonkai-karate",
  },
  {
    title: "Okinawan Karate and Ryukyu Ancient Martial Arts",
    description: "Association to learn Ryukyu Martial Arts and Ryusyu-kai",
    link: "https://ryusyu-kai.qwc.jp/",
  },
];

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
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
    title: "TAKEYUKI ENFO",
    description: `
      Takeyuki Enfo, a distinguished teacher of Ryukyu Kudo. 
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

export default function HomePage () {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <NextUIProvider>
      <div className="no-visible-scrollbar">
        {isMounted && (
          <ImagesSlider className="min-h-screen" images={images}>
            <motion.div
              initial={{ opacity: 0, y: -80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="z-50 flex flex-col justify-left items-center px-4 md:px-0"
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

        <div className="min-h-screen rounded-md flex flex-col antialiased bg-black-900 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden p-4 md:p-8">
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

        <div className="max-w-full mx-auto px-4 md:px-8 ">
          <motion.p className="font-bold text-xl md:text-4xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            Our Associates
          </motion.p>
          <HoverEffect items={projects} />
        </div>

        <div className="m-4 md:m-12 rounded-2xl p-4 md:p-8 overflow-hidden bg-black-100 border border-white/[0.2] group-hover:border-slate-700 relative z-20">
          <StickyScroll
            content={content}
           />
        </div>

        <div className="flex justify-center items-center bg-gray-900 py-8">
          <MapBanner
            address="123 Main St, Springfield, USA"
            lat={37.7749} // Example latitude
            lng={-122.4194} // Example longitude
          />
        </div>
      </div>
    </NextUIProvider>
  );
};

