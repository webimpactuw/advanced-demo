import Image from "next/image";
import Container from "../components/container";
import Head from "/public/person.png";

export const metadata = {
  title: "Web Impact Demo | Team",
  description: "A demo site for Advanced Coding Workshops",
};

export default async function Page() {
  const people = await getPeople();
  return (
    <Container className="flex flex-col gap-6">
      <div className="flex flex-col items-center gap-2 w-full">
        <h2 className="text-4xl font-bold">Our Team</h2>
        <p className="text-purple-600">
          Our work would not be possible without our amazing team of individuals
        </p>
      </div>
      {people.map((p) => (
        <Person key={p.name} person={p} />
      ))}
    </Container>
  );
}

function Person({ person }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 w-full max-w-3xl mx-auto border border-purple-100 rounded-xl px-4 py-6 bg-zinc-100 md:hover:shadow-xl md:hover:scale-105 transition-all">
      <div className="flex justify-center items-center">
        <Image
          src={Head}
          alt="Placeholder headshot"
          className="w-36 h-36 min-w-36"
          width={144}
          height={144}
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-medium text-xl">{person.name}</h3>
        <div className="flex flex-wrap items-center justify-start gap-2 text-xs font-medium uppercase">
          <p className="text-purple-400">Username:</p>
          <p className="bg-purple-600 text-zinc-100 p-1 rounded-md">
            {person.username}
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <div className="space-y-1">
            <h4 className="font-medium">Contact</h4>
            <ul className="font-mono text-sm text-purple-800 bg-purple-100 px-2 py-1 rounded-lg">
              <li>{person.email}</li>
              <li>{person.phone}</li>
            </ul>
          </div>
          <div className="space-y-1">
            <h4 className="font-medium">Company</h4>
            <ul className="font-mono text-sm text-purple-800 bg-purple-100 px-2 py-1 rounded-lg">
              <li className="font-bold">{person.company.name}</li>
              <li>{person.company.catchPhrase}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

async function getPeople() {
  const people = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!people.ok) {
    return new Error("Could not fetch data!");
  }

  return people.json();
}
