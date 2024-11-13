"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

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
      className="w-[calc(100vw-2rem)] max-w-xl rounded-lg mx-auto flex flex-col p-4 m-4 text-lg bg-slate-700 border-2 border-slate-800"
      ref={form}
      onSubmit={sendEmail}
    >
      <h2 className="text-4xl text-center">Contact Form</h2>
      <p className="text-center pb-4">Send me a message!</p>
      <div className="grid grid-cols-2 gap-x-4">
        <label>Name *</label>
        <label>Email *</label>
        <input
          required
          className="text-black rounded-md px-2 mb-2"
          type="text"
          name="user_name"
        />
        <input
          required
          className="text-black rounded-md px-2 mb-2"
          type="email"
          name="user_email"
        />
      </div>
      <label>Message *</label>
      <textarea
        required
        rows={4}
        className="text-black rounded-md px-2 mb-4"
        name="message"
      />
      <input
        className="w-fit bg-gray-900 rounded-md p-2 px-8 cursor-pointer transform md:hover:bg-gray-800 transition-colors"
        type="submit"
        value="Send"
      />
    </form>
  );
}
