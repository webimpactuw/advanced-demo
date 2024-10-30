import Container from "./components/container";

export default function Home() {
  const person = {
    name: "John Doe",
    age: 30,
    hobbies: ["reading", "hiking", "coding"],
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
    },
    contact: {
      email: "john@email.com",
      phone: "123-456-7890",
    },
    isMarried: true,
  };

  return (
    <Container>
      <Person person={person} />
    </Container>
  );
}

function Person({ person }) {
  return (
    <div className="max-w-sm border border-primary-200 rounded-xl px-4 pb-4 pt-6 bg-gradient-to-bl from-secondary-100 to-white via-white md:hover:shadow-xl md:hover:scale-105 transition-all space-y-4">
      <div className="space-y-2">
        <h3 className="font-medium text-xl">{person.name}</h3>
        <p className="flex items-center justify-start space-x-2 text-xs font-medium uppercase text-primary-600">
          {person.age} years old & ???
        </p>
        <p className="text-sm text-primary-500 underline">
          {person.street} {person.city} {person.state} {person.zip}
        </p>
      </div>
      <div className="space-y-1">
        <h4 className="font-medium">Hobbies</h4>
        <ul className="flex flex-wrap gap-2 text-sm text-secondary-800">
          <li className="bg-secondary-100 px-2 py-0.5 rounded-full">Hobby 1</li>
          <li className="bg-secondary-100 px-2 py-0.5 rounded-full">Hobby 2</li>
          <li className="bg-secondary-100 px-2 py-0.5 rounded-full">Hobby 3</li>
        </ul>
      </div>
      <div className="space-y-1">
        <h4 className="font-medium">Contact</h4>
        <ul className="font-mono text-sm">
          <li>{person.contact.email}</li>
          <li>{person.contact.phone}</li>
        </ul>
      </div>
    </div>
  );
}
