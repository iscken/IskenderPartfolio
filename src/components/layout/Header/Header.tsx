"use client";
import { useEffect, useState } from "react";
import scss from "./Header.module.scss";
import Link from "next/link";
import { Link as ScrolLink } from "react-scroll";
import IconLogo from "../../../assets/Icons/Icons.logo";
import BurgerButton from "@/components/ui/BurgerButton";
import BurgerMenu from "@/components/ui/BurgerMenu";
import { links } from "@/constants/links";
import { useHeaderStore } from "@/stores/useHeaderStore";

const Header = () => {
  const [isMobile, setIsMobile] = useState(true);
  const [resumeModal, setResumeModal] = useState(true);
  const { fixScroll } = useHeaderStore();

  const changeIsMobile = () => {
    setIsMobile(window.innerWidth <= 468);
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
              <ScrolLink
                to="welcome"
                spy={true}
                smooth={true}
                offset={-80}
                duration={300}
              >
                <IconLogo />
              </ScrolLink>
            </div>
          </div>
          <div className={scss.right}>
            {!isMobile ? (
              <div className={scss.mobile_content}>
                <nav className={scss.nav}>
                  <ul>
                    {links.map((item, index) => (
                      <li key={index}>
                        <ScrolLink
                          onClick={fixScroll}
                          className={scss.link}
                          activeClass={scss.active}
                          to={item.to}
                          spy={item.spy}
                          smooth={item.smooth}
                          offset={item.offset}
                          duration={item.duration}
                        >
                          {item.icon} {item.name}
                        </ScrolLink>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className={scss.resume}>
                  <button
                    className={scss.resumeBtn}
                    onClick={() => setResumeModal(!resumeModal)}
                  >
                    Resume
                  </button>
                  <div className={scss.modal}>
                    {!resumeModal ? (
                      <div className={scss.ResumeModal}>
                        <Link href="/MyResume">
                          <p className={scss.pResume}>My Resume</p>
                        </Link>
                        <Link href="/">
                          <p>My Photo</p>
                        </Link>
                        <Link href="/">
                          <p>My Wikipedia</p>
                        </Link>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            ) : (
              <div className={scss.burgers}>
                <BurgerButton />
                <BurgerMenu />
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
