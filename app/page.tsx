"use client";
import Image from "next/image";
import Menu from ".//menu.tsx";
import { relative } from "path";

import { useState } from "react";

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      {showMenu ? (
        <Menu fun={setShowMenu} />
      ) : (
        <>
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "12px",
            }}
          >
            <div style={{ display: "flex" }}>
              <Image
                src="/logo.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={34}
                height={21}
                priority
              />
              <p className="text-navbar">LOREM</p>
            </div>
            <div>
              <Image
                onClick={() => setShowMenu(!showMenu)}
                src="/burger.svg"
                alt="Vercel Logo"
                className="dark:invert burger"
                width={20}
                height={9}
                priority
              />
            </div>
          </div>
          <div className="mainHeading">LOREM IPSUM</div>
          <div className="container">
            {/* card1 */}
            <div className="card">
              <div>
                <p className="sub-heading">DOLOR SIT</p>
                <p className="para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <div>
                <Image
                  src="/para1logo.svg"
                  alt="Vercel Logo"
                  className="dark:invert burger"
                  width={22}
                  height={20}
                  priority
                />
              </div>
            </div>
            {/* card2 */}
            <div className="card">
              <div>
                <div className="sub-heading">Lorem ipsum dolor</div>
                <p className="para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </p>
              </div>
              <div>
                <Image
                  src="/para2logo.svg"
                  alt="Vercel Logo"
                  className="dark:invert burger"
                  width={22}
                  height={20}
                  priority
                />
              </div>
            </div>
            <div className="card">
              <div>
                <Image
                  src="/model1.svg"
                  alt="Vercel Logo"
                  className=" modelImg"
                  width={351}
                  height={410}
                  priority
                />
              </div>
              <div>
                <div className="sub-heading">Lorem ipsum dolor sit</div>
                <p className="para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div>
                <Image
                  src="/para3logo.svg"
                  alt="Vercel Logo"
                  className="dark:invert burger"
                  width={22}
                  height={20}
                  priority
                />
              </div>
            </div>
          </div>
          <div className="aboutUs">
            <Image
              src="/about.svg"
              alt="about"
              className="dark:invert aboutImg"
              width={373}
              height={373}
              priority
            />
            <div
              style={{
                display: "flex",
                position: "absolute",
                top: "200px",
                left: "0px",
                gap: "150px",
                height: "308px",
              }}
            >
              <p>ABOUT US</p>

              <p className="aboutPara">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
