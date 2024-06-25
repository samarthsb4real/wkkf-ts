"use client";
import React from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

const cards = [
  {
    id: 1,
    className: "col-span-1 h-64 ",
    thumbnail: "/gallery/1.jpg",
  },
  {
    id: 2,
    className: "col-span-1 h-64",
    thumbnail: "/gallery/2.jpg",
  },
  {
    id: 3,
    className: "col-span-1 h-64",
    thumbnail: "/gallery/10.jpg",
  },
  {
    id: 4,
    className: "col-span-1 h-64 w-full",
    thumbnail: "/gallery/8.jpg",
  },
  {
    id: 5,
    className: "col-span-1 h-64 h-64 w-full",
    thumbnail: "/gallery/11.JPG",
  },
  {
    id: 6,
    className: "col-span-1 h-64 w-full",
    thumbnail: "/gallery/6.jpg",
  },
  {
    id: 7,
    className: "col-span-1 h-64 w-full",
    thumbnail: "/gallery/9.JPG",
  },
  {
    id: 8,
    className: "col-span-1",
    thumbnail: "/gallery/4.jpg",
  },
  {
    id: 9,
    className: "md:col-span-1 h-64",
    thumbnail: "/gallery/5.jpg",
  },
  {
    id: 10,
    className: "col-span-1 h-64 w-full",
    thumbnail: "/gallery/3.jpg",
  },
  {
    id: 11,
    className: "col-span-1 h-64",
    thumbnail: "/gallery/12.jpg",
  },
  {
    id: 12,
    className: "col-span-1 h-64 w-full",
    thumbnail: "/gallery/13.jpg",
  },
  
  
  {
    id: 13,
    className: "col-span-1 h-64 w-full",
    thumbnail: "/gallery/15.jpg",
  },
  
  {
    id: 14,
    className: "col-span-1 h-64 w-full",
    thumbnail: "/gallery/14.jpg",
  },

];

export default function Gallery() {
  return (
    <main className="justify-center items-center min-h-screen">
      <title>Gallery</title>
      <div className="container mx-auto py-12">
        <LayoutGrid cards={cards} />

      </div>
    </main>
  );
}
