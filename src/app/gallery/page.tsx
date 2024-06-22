"use client";
import React from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

const cards = [
  {
    id: 1,
    content: "Content 1",
    className: "md:col-span-1 h-48",
    thumbnail: "/gallery/1.jpg",
  },
  {
    id: 2,
    content: "Content 2",
    className: "md:col-span-1",
    thumbnail: "/gallery/2.jpg",
  },
  {
    id: 3,
    content: "Content 3",
    className: "md:col-span-1",
    thumbnail: "/gallery/11.jpg",
  },
  {
    id: 4,
    content: "Content 4",
    className: "md:col-span-1",
    thumbnail: "/gallery/8.jpg",
  },
  {
    id: 5,
    content: "Content 5",
    className: "md:col-span-1 h-64",
    thumbnail: "/gallery/9.jpg",
  },
  {
    id: 6,
    content: "Content 6",
    className: "md:col-span-1",
    thumbnail: "/gallery/6.jpg",
  },
  {
    id: 7,
    content: "Content 7",
    className: "md:col-span-1",
    thumbnail: "/gallery/7.jpg",
  },
  {
    id: 8,
    content: "Content 8",
    className: "md:col-span-1",
    thumbnail: "/gallery/8.jpg",
  },
];

export default function Gallery() {
  return (
    <main className="justify-center items-center h-screen">
      <div className="container mx-auto py-12">
        <LayoutGrid cards={cards} />
        <figcaption className="mt-8 text-gray-500 text-center">Work in Progress...</figcaption>
      </div>
    </main>
  );
}
