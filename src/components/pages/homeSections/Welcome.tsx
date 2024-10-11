"use client";
import { BiLogoTelegram } from "react-icons/bi";
import scss from "./Welcome.module.scss";
import img from "../../../assets/snow/iskender_files/275284544_4803022409766157_893010866758176085_n.webp";
import Image from "next/image";
import { Link as ScrolLink } from "react-scroll";
import { linkis } from "@/constants/linkis";
import { useHeaderStore } from "@/stores/useHeaderStore";

const Welcome = () => {
  const { fixScroll } = useHeaderStore();

  return (
    <section id="welcome" className={scss.Welcome}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.welcomeBlock}>
            <div className={scss.message}>
              <h1>
                Добро Пожалывать, вам прятно с нами? <br /> Нравится нашы сайты?{" "}
                <br /> Оставти отзыв в нашем телеграм канале!!!
              </h1>
              <div className={scss.tg}>
                <nav className={scss.nav}>
                  <ul>
                    {linkis.map((item, index) => (
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
                          Telegram: <BiLogoTelegram className={scss.icons} />
                        </ScrolLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>

            <div className={scss.imgIskender}>
              <Image
                className={scss.Image}
                src={img} // Путь к изображению
                alt="Пример изображения" // Описание изображения
                width={500} // Ширина изображения
                height={300} // Высота изображения
                priority={true} // Приоритетная загрузка (например, для "above the fold" изображений)
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
