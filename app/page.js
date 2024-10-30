import Container from "./components/container";

export default async function Home() {
  const people = await getPeople()

  return (
    <Container>
      <div className="flex flex-wrap gap-6">
        {people.map(p => 
          <Person key={p.name} person={p} />
        )}
      </div>
    </Container>
  );
}

function Person({ person }) {
  return (
    <div className="max-w-sm w-full border border-primary-200 rounded-xl px-4 pb-4 pt-6 bg-gradient-to-bl from-zinc-800 to-zinc-500 md:hover:shadow-xl md:hover:scale-105 transition-all cursor-pointer space-y-2">
      <div className="space-y-2">
        <h3 className="font-medium text-xl">{person.name}</h3>
        <div className="flex items-center justify-start space-x-2 text-xs font-medium uppercase text-primary-600">
          Username: 
          <p className="bg-zinc-900 ml-2 p-1 rounded-md">
            {person.username}
          </p>
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
      <p className="bg-secondary-100 text-sm rounded-full">{person.company.catchPhrase}</p>
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
