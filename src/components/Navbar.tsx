/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";

export default function Navbar2() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { label: "About Council", href: "/about" },
    { label: "Committee", href: "/committee" },
    { label: "Register As a Student", href: "/register/student" },
    { label: "Register As a Mentor", href: "/register/mentor" },
    { label: "Dojo Registration", href: "/register/dojo" },
    { label: "Gallery", href: "/gallery" },
    { label: "Qualified Members", href: "/qualified-members" },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-gray-900">
      <NavbarContent className="navbar bg-gray-900 fixed top-0 left-0 w-full p-2 z-50">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
        <NavbarBrand>
          <div className="flex items-center">
            <Link className="btn btn-ghost text-2xl text-white flex items-center" href="/">
              <img src="logo-removebg.png" className="w-12" />
              <span className="hidden lg:inline text-white ml-2">
                World Karate & Kobudo Federation
              </span>
              <span className="inline lg:hidden text-white ml-2">WKKF</span>
            </Link>
          </div>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-4 ml-auto" justify="end">
          <div className="text-white">
            <ul className="menu menu-horizontal px-1">
              <li>
                <details>
                  <summary className="text-white cursor-pointer">About Us</summary>
                  <ul className="bg-gray-900">
                    <li>
                      <Link className="text-white" href="/about">
                        About Council
                      </Link>
                    </li>
                    <li>
                      <Link className="text-white" href="/committee" title="committee">
                        Committee
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link className="text-white" href="/gallery">
                  Gallery
                </Link>
              </li>
              <li>
                <Link className="text-white" href="/qualified-members">
                  Qualified Members
                </Link>
              </li>
              <li>
                <details>
                  <summary className="text-white cursor-pointer">Register</summary>
                  <ul className="bg-gray-900">
                    <li>
                      <Link className="text-white" href="/register/student">
                        As a Student
                      </Link>
                    </li>
                    <li>
                      <Link className="text-white" href="/register/mentor">
                        As a Mentor
                      </Link>
                    </li>
                    <li>
                      <Link className="text-white" href="/register/dojo">
                        Dojo Registration
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </NavbarContent>

        <NavbarMenu className="bg-gray-900">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              <Link
                color="foreground"
                className="w-full text-white"
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </NavbarContent>
    </Navbar>
  );
}
