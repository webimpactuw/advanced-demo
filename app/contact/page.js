"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import Mail from "/public/mail.png";

export default function Page() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLICKEY,
        },
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  return (
    <form
      className="w-[calc(100vw-2rem)] max-w-4xl rounded-lg mx-auto flex flex-col md:flex-row p-12 m-4 text-lg bg-zinc-50 border-2"
      ref={form}
      onSubmit={sendEmail}
    >
      <div className="flex flex-col items-center justify-center w-full md:w-1/2">
        <Image src={Mail} href="Mail Graphic" width={256} height={256} />
      </div>
      <div className="flex flex-col gap-2 w-full md:w-1/2">
        <h2 className="text-4xl font-bold">Get in touch</h2>
        <p className="text-sm text-purple-400 italic pb-2">
          ...and we'll get back to you as soon as possible.
        </p>
        <label>Name *</label>
        <input
          required
          className="text-black rounded-full px-3 py-1 bg-zinc-300"
          type="text"
          name="user_name"
        />
        <label>Email *</label>
        <input
          required
          className="text-black rounded-full px-3 py-1 bg-zinc-300"
          type="email"
          name="user_email"
        />
        <label>Message *</label>
        <textarea
          required
          rows={4}
          className="text-black rounded-xl px-3 py-1 mb-4 bg-zinc-300"
          name="message"
        />
        <input
          className="bg-purple-800 text-purple-100 rounded-full p-2 px-8 cursor-pointer transform md:hover:bg-purple-900 transition-colors"
          type="submit"
          value="Send"
        />
      </div>
    </form>
  );
}
