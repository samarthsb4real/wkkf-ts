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
      <NavbarContent className="bg-gray-900 relative h-16 md:fixed top-0 left-0 w-full p-2">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
        <NavbarBrand>
          <div className="flex-1">
            <Link className="btn btn-ghost text-2xl text-white" href="/">
              <img src="logo-removebg.png" className="w-12" />
              <span className="hidden lg:inline text-white">
                World Karate & Kobudo Federation
              </span>
              <span className="inline lg:hidden text-white text-center">
                WKKF
              </span>
            </Link>
          </div>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-4" justify="end">
          <div className="flex-none text-white">
            <ul className="menu menu-horizontal px-1">
              <li className="">
                <details>
                  <summary className="text-white">About Us</summary>
                  <ul className="bg-gray-900">
                    <li>
                      <Link className="text-white" href="/about">
                        About Council
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-white"
                        href="/committee"
                        title="committee"
                      >
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
                <details className="w-50">
                  <summary className="text-white">Register</summary>
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

              <li>
                <Link className="text-white" href="/qualified-members">
                  Qualified Members
                </Link>
              </li>
            </ul>
          </div>
        </NavbarContent>

        <NavbarMenu className="bg-gray-900">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
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
