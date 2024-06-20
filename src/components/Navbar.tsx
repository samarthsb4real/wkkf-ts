/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 fixed top-0 left-0 w-full z-50 p-2">
      <div className="flex-none"></div>
      <div className="flex-1">
        <Link className="btn btn-ghost text-2xl" href="/">
          <img src="logo-removebg.png" className="w-12" />
          World Karate & Kobudo Federation{" "}
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>About Us</summary>
              <ul>
                <li>
                  <Link href="/about">About Council</Link>
                </li>
                <li>
                  <Link href="/committee" title="committee">
                    Committee
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href="/notice">Notice</Link>
          </li>
          <li>
            <details className="w-50">
              <summary>Register</summary>
              <ul>
                <li>
                  <Link href="/register/student">As a Student</Link>
                </li>
                <li>
                  <Link href="/register/mentor">As a Mentor</Link>
                </li>
                <li>
                  <Link href="/register/dojo">Dojo Registration</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
