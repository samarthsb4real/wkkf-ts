/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

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
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";

export default function Navbar2() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { label: "About Council", href: "/about" },
    { label: "Committee", href: "/committee" },
    { label: "Register As a Student", href: "/register/student" },
    { label: "Register As a Mentor", href: "/register/mentor" },
    { label: "Dojo Registration", href: "/register/dojo" },
    { label: "Gallery", href: "/gallery" },
    { label: "Qualified Members", href: "/qualified-members" },
    { label: "Notice Board", href: "#", onClick: onOpen },
  ];

  const defaultContent =
    "This is the Official Site for World Karate & Kobudo Federation (WKKF). All Rights Reserved.";

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
              <Image alt="Logo" width="50" height="50" src="/logo-removebg.png" className="w-10" />
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
              <li>
                <>
                  <Button onPress={onOpen}>Notice Board</Button>
                  <Modal
                    size="5xl"
                    placement="center"
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    className="z-60 bg-gray-900 md:size-xl rounded-2xl"
                  >
                    <ModalContent>
                      {(onClose) => (
                        <div>
                          <ModalHeader className="flex flex-col gap-0.5 md:text-2xl">
                            Welcome to the Notice Board
                            <caption className="text-sm text-gray-400 text-left font-light">Stay up-to-date with the current updates!</caption>
                          </ModalHeader>
                          <ModalBody>
                            
                          {/* The content for Notice-board will be here.

                            <Accordion>
                              <AccordionItem
                                key="1"
                                aria-label="Accordion 1"
                                subtitle="Date- DD/MM/YYYY"
                                title="Upcoming Tournament Details"
                              >
                                {defaultContent}
                              </AccordionItem>
                              <AccordionItem
                                key="2"
                                aria-label="Accordion 2"
                                subtitle="Date- DD/MM/YYYY"
                                title="Upcoming Tournament Details #2"
                              >
                                {defaultContent}
                              </AccordionItem>
                              <AccordionItem
                                key="3"
                                aria-label="Accordion 3"
                                subtitle="Date- DD/MM/YYYY"
                                title="Upcoming Tournament Details #3"
                              >
                                {defaultContent}
                              </AccordionItem>
                            </Accordion> */}
                            <h1 className="text-white text-xl">Hang on, We&apos;re Coming Soon!</h1>
                            
                          </ModalBody>
                          <ModalFooter>
                            <Button
                              color="primary"
                              className="rounded-2xl"
                              onPress={onClose}
                            >
                              Close
                            </Button>
                          </ModalFooter>
                        </div>
                      )}
                    </ModalContent>
                  </Modal>
                </>
              </li>
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
