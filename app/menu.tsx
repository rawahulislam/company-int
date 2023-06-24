import Image from "next/image";
import { useState } from "react";
interface MenuProps {
  fun: (menuOpen: boolean) => void;
}
export default function Menu(props: MenuProps) {
  const [menuOpen, setMenuOpen] = useState(true);
  const toggleMenu = () => {
    props.fun(!menuOpen);
  };
  return (
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
            onClick={toggleMenu}
            src="/cross.svg"
            alt="Vercel Logo"
            className="dark:invert burger"
            width={20}
            height={9}
            priority
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "32px",
        }}
      >
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
      </div>
    </>
  );
}
