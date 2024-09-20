"use client";
import scss from "./Contacts.module.scss";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";

const TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN;
const CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

interface IFormTelegram {
  username: string;
  email: string;
  subject: string;
  description: string;
}

const Contacts = () => {
  const { register, handleSubmit } = useForm<IFormTelegram>();

  const messageModel = (data: IFormTelegram) => {
    let message = `Username: <b>${data.username}</b>\n`;
    message += `Email: <b>${data.email}</b>\n`;
    message += `Subject: <b>${data.subject}</b>\n`;
    message += `Description: <b>${data.description}</b>`;
    return message;
  };

  const onSubmit: SubmitHandler<IFormTelegram> = async (data) => {
    await axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: messageModel(data),
    });
  };

  return (
    <section id="Contacts" className={scss.Contacts}>
      <div className="container">
        <div className={scss.content}>
          <form className={scss.form} onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="username"
              type="text"
              {...register("username", { required: true })}
            />
            <input
              placeholder="email"
              type="text"
              {...register("email", { required: true })}
            />
            <input
              placeholder="subject"
              type="text"
              {...register("subject", { required: true })}
            />
            <input
              placeholder="description"
              type="text"
              {...register("description", { required: true })}
            />
            <button className={scss.btnSubmin} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
