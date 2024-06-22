"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

const cards = [
  {
    id: 1,
    content: "",
    className: "md:col-span-2 h-full",
    thumbnail: "/home/1.jpg",
  },
  {
    id: 2,
    content: "",
    className: "md:col-span-1  h-full",
    thumbnail: "/home/2.jpg",
  },
  {
    id: 3,
    content: "",
    className: "md:col-span-3 h-full",
    thumbnail: "/home/3.jpg",
  },
  {
    id: 4,
    content: "",
    className: "md:col-span-1 h-full",
    thumbnail: "/home/4.jpg",
  },

  {
    id: 5,
    content: "",
    className: "md:col-span-2 h-full",
    thumbnail: "/home/5.jpg",
  },
];

export default function Gallery() {
  return (
    <div className="h-screen py-12 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}
