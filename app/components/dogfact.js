"use client";

import { useEffect, useState } from "react";

export default function DogFact() {
  const [fact, setFact] = useState("");

  async function getFact() {
    const res = await fetch("https://dogapi.dog/api/facts");

    if (!res.ok) {
      throw new Error("Failed to fetch the fact");
    }

    const data = await res.json();

    setFact(data.success ? data.facts[0] : "Could not fetch dog fact!");
  }

  useEffect(() => {
    getFact();
  }, []);

  return (
    <div className="flex items-center justify-center max-w-[32rem] min-h-32 mx-auto mb-4 bg-purple-800 text-purple-100 px-4 py-2 rounded-xl border-2 border-purple-400">
      <p className="text-center">{fact || "Loading fact..."}</p>
    </div>
  );
}
