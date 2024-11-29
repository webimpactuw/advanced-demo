import Container from "../components/container";
import DogFact from "../components/dogfact";

export default async function Photos() {
  const dogs = await getDogs();

  return (
    <Container>
      <p className="font-semibold text-xl text-center">
        Here&apos;s a random fact about dogs:
      </p>
      <DogFact />
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dogs.map((dog) => (
          <DogCard key={dog.name} dog={dog} />
        ))}
      </ul>
    </Container>
  );
}

async function getDogs() {
  const res = await fetch("https://md.rtsh.space/sample.json");

  if (!res.ok) {
    throw new Error("Failed to fetch dogs");
  }

  return res.json();
}

function DogCard({ dog }) {
  return (
    <li className="border md:hover:scale-95 transition-transform border-purple-100 bg-gradient-to-bl from-purple-100 to-white via-white rounded-xl p-4 flex items-start justify-start space-x-4">
      <img
        src={dog.pic}
        alt={dog.name}
        className="w-40 h-40 rounded-lg border object-cover border-purple-100"
      />
      <div className="space-y-4">
        <div className="space-y-1">
          <h3 className="text-lg font-medium">{dog.name}</h3>
          <p className="uppercase text-xs font-medium text-purple-600">
            {dog.age} year{dog.age === 1 ? "" : "s"} old
          </p>
        </div>
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Favorite Toys</h4>
          <ul className="flex flex-wrap gap-2">
            {dog.favorite_toys.map((toy) => (
              <li
                key={toy}
                className="text-xs text-purple-800 rounded-full px-2 py-0.5 bg-purple-100"
              >
                {toy}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}
