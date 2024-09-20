"use client";
import { BiLogoTelegram } from "react-icons/bi";
import scss from "./Welcome.module.scss";

const Welcome = () => {
  return (
    <section id="welcome" className={scss.Welcome}>
      <div className="container">
        <div className={scss.content}>
          <h1>
            Добро Пожалывать, вам прятно с нами? Нравится нашы сайты? <br />{" "}
            Оставти отзыв в нашем телеграм канале!!!
          </h1>
          <a className={scss.tg} href="tel:+996228744003">
            <BiLogoTelegram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
