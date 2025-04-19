export default function Clients() {
  const clients = [
    {
      id: 1,
      name: 'FOINE Essence',
      imageSrc: '',
    },
    {
      id: 2,
      name: 'Jani Essence',
      imageSrc: '',
    },
    {
      id: 3,
      name: 'Winjan Essence',
      imageSrc: '',
    },
    {
      id: 3,
      name: 'Winjan Essence',
      imageSrc: '',
    },
    {
      id: 3,
      name: 'Winjan Essence',
      imageSrc: '',
    },
  ];

  return (
    <div className="w-full container mx-auto px-4 md:px-2 lg:px-8 py-32 md:py-48">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl mb-32 text-center">
          our wonderful clients
        </h1>

        <div className="flex justify-center items-center gap-6 md:gap-12 lg:gap-16">
          {clients.map(client => (
            <div key={client.id}>
              <div className="w-40 h-40 md:w-32 md:h-32 bg-black rounded-full" />
              <span className="sr-only">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
