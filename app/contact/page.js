"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import Mail from "/public/mail.png";

export default function Page() {
  const form = useRef();

  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setSuccess("Loading...");

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
          setSuccess("Successfully sent message!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSuccess("Error: Could not sent message");
        },
      );
  };

  return (
    <form
      className="w-[calc(100vw-2rem)] max-w-4xl rounded-lg mx-auto flex flex-col md:flex-row p-6 md:p-12 m-4 text-lg bg-zinc-50 border-2"
      ref={form}
      onSubmit={sendEmail}
    >
      <div className="flex flex-col items-center justify-center w-full md:w-1/2">
        <Image
          className="w-auto"
          src={Mail}
          priority={true}
          alt="Mail Graphic"
          width={288}
          height={288}
        />
      </div>
      <div className="flex flex-col gap-2 w-full md:w-1/2">
        <h2 className="text-4xl font-bold">Get in touch</h2>
        <p className="text-sm text-purple-400 italic pb-4">
          ...and we&apos;ll get back to you as soon as possible.
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
          className="text-black rounded-xl px-3 py-1 bg-zinc-300"
          name="message"
        />
        <p className="text-purple-400 min-h-8">{success || ""}</p>
        <input
          className="bg-purple-800 text-purple-100 rounded-full p-2 px-8 cursor-pointer transform md:hover:bg-purple-900 transition-colors"
          type="submit"
          value="Send"
        />
      </div>
    </form>
  );
}
