"use client";
import { useEffect, useState } from "react";
import scss from "./Header.module.scss";
import Link from "next/link";
import IconLogo from "../../../assets/Icons/Icons.logo";
import { links } from "@/constants/links";
import BurgerButton from "@/components/ui/BurgerButton";
import BurgerMenu from "@/components/ui/BurgerMenu";

const Header = () => {
  const [isMobile, setIsMobile] = useState(true);

  const changeIsMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    changeIsMobile();
    window.addEventListener("resize", changeIsMobile);
    return () => {
      window.removeEventListener("resize", changeIsMobile);
    };
  }, []);

  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.left}>
            <div className={scss.logo}>
              <Link href="/">
                <IconLogo />
              </Link>
            </div>
          </div>
          <div className={scss.right}>
            {!isMobile ? (
              <div>
                <nav className={scss.nav}>
                  <ul>
                    {links.map((item, index) => (
                      <li key={index}>
                        <Link href={item.href}>
                          {item.icon} {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className={scss.resume}>
                  <button>resume</button>
                </div>
              </div>
            ) : (
              <>
                <BurgerButton />
                <BurgerMenu />
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
