"use client";

import { useEffect, useState } from "react";

export default function DogFact() {
  const [fact, setFact] = useState("");
  const [success, setSuccess] = useState(false);

  async function getFact() {
    const res = await fetch("https://dogapi.dog/api/facts");

    if (!res.ok) {
      throw new Error("Failed to fetch the fact");
    }

    const data = await res.json();

    setFact(data.success ? data.facts[0] : "Could not fetch dog fact!");
    setSuccess(data.success);
  }

  useEffect(() => {
    getFact();
  }, []);

  return (
    <div className="max-w-[32rem] mx-auto my-4 bg-purple-800 text-purple-100 px-4 py-2 rounded-xl border-2 border-purple-400">
      <p>{fact || "Loading fact..."}</p>
    </div>
  );

  return fact ? (
    <p
      className={
        "mt-2 text-md text-center " +
        (success ? "text-green-500" : "text-red-500")
      }
    >
      {fact}
    </p>
  ) : (
    <p className="mt-2 text-md text-center">Loading fact...</p>
  );
}
