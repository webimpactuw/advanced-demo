import Container from "../components/container";

export default async function Page() {
  const people = await getPeople();
  return (
    <Container className="flex flex-wrap gap-6">
      <div className="flex flex-col items-center gap-2 w-full">
        <h2 className="text-4xl font-bold">Our Team</h2>
        <p>Our work would not be possible without our amazing team of individuals</p>
      </div>
      {people.map((p) => (
        <Person key={p.name} person={p} />
      ))}
    </Container>
  )
}

function Person({ person }) {
  return (
    <div className="max-w-sm w-full border border-primary-200 rounded-xl px-4 pb-4 pt-6 bg-gradient-to-bl from-zinc-800 to-zinc-500 md:hover:shadow-xl md:hover:scale-105 transition-all space-y-2">
      <div className="space-y-2">
        <h3 className="font-medium text-xl">{person.name}</h3>
        <div className="flex items-center justify-start space-x-2 text-xs font-medium uppercase text-primary-600">
          Username:
          <p className="bg-zinc-900 ml-2 p-1 rounded-md">{person.username}</p>
        </div>
      </div>
      <div className="space-y-1">
        <h4 className="font-medium">Contact</h4>
        <ul className="font-mono text-sm">
          <li>{person.email}</li>
          <li>{person.phone}</li>
        </ul>
      </div>
      <hr />
      <div className="flex items-center justify-start space-x-2 text-xs font-medium uppercase text-primary-600">
        Company:
        <p className="bg-slate-700 ml-2 p-1 rounded-md">
          {person.company.name}
        </p>
      </div>
      <p className="bg-secondary-100 text-sm rounded-full">
        {person.company.catchPhrase}
      </p>
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
