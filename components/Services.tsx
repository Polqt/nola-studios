import { BookOpen, Pencil, Play } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Pencil size={32} />,
      title: 'we shape your vision',
      description:
        'from articulating your campaign vision, we bring your ideas to life with purpose and originality',
    },
    {
      icon: <BookOpen size={32} />,
      title: 'we create your story',
      description:
        'high-impact video, photography, and design that capture attention and connect with your audience.',
    },
    {
      icon: <Play size={32} />,
      title: 'we amplify your reach',
      description:
        'from social media to paid ads, we turn your message into momentum- viral is just the beginning.',
    },
  ];
  return (
    <div className="w-full container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
      <div className="flex flex-col justify-center items-center mb-12 md:mb-16 text-center">
        <h1 className="font-bold text-4xl md:Text-5xl lg:text-6xl mb-4">
          what can we do for you
        </h1>
        <p className="text-lg md:text-xl max-w-2xl">
          strategic marketing and support to ensure that your brand reaches your
          next audience
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#FFDF1E] p-8 flex flex-col items-start"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="font-bold text-xl mb-2">{service.title}</h3>
            <p className="text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
