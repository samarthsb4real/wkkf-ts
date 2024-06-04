/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 fixed-page-layout p-2">
    
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
                  <Link href="/about">Chairman's Desk</Link>
                </li>
                <li>
                  <a>Branches</a>
                </li>
                <li>
                  <details>
                    <summary>Members</summary>
                    <ul>
                      <li>
                        <Link href="/committee" title="committee">Committee</Link>
                      </li>
                      <li>
                        <Link href="/council">Council</Link>
                      </li>
                      <li>
                        <Link href="/students">Students</Link>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </details>
          </li>

          <li>
            <Link href="/register">Register</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
