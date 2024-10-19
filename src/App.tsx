import {
  User,
  Code,
  Globe,
  Terminal,
  Phone,
  Mail,
  Link,
  Github,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type CardInfo = {
  front: {
    name: string;
    roles: string[];
  };
  back: {
    phone: string;
    email: string;
    website: string;
    tagline: string;
    github: string;
  };
};

const cardInfo: CardInfo = {
  front: {
    name: "Kaden Frisk",
    roles: ["Software Engineer", "Full Stack Web Developer", "OS Developer"],
  },
  back: {
    phone: "(806) 443-0175",
    email: "contact@kadenfrisk.com",
    website: "Kadenfrisk.com",
    tagline: "Crafting elegant solutions to complex problems",
    github: "github.com/ofluffydev",
  },
};

function CardFront({ name, roles }: CardInfo["front"]) {
  const roleIcons = [
    <Code className="w-4 h-4 mr-2" key="code" />,
    <Globe className="w-4 h-4 mr-2" key="globe" />,
    <Terminal className="w-4 h-4 mr-2" key="terminal" />,
  ];

  return (
    <Card className="rounded-none w-80 h-48 bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-500 overflow-hidden relative shadow-[0_0_30px_rgba(147,51,234,0.7)] hover:shadow-[0_0_40px_rgba(147,51,234,0.9)] transition-all duration-300 ease-in-out transform hover:-translate-y-1">
      <CardContent className="flex flex-col justify-between h-full p-6 text-white">
        <div>
          <h2 className="text-2xl font-bold mb-4">{name}</h2>
          {roles.map((role, index) => (
            <div key={index} className="flex items-center mb-2">
              {roleIcons[index]}
              <span className="text-sm font-semibold">{role}</span>
            </div>
          ))}
        </div>
        <User className="absolute bottom-4 right-4 w-12 h-12 opacity-20" />
      </CardContent>
    </Card>
  );
}

function CardBack({ info }: { info: CardInfo["back"] }) {
  return (
    <Card className="rounded-none w-80 h-48 bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-500 overflow-hidden shadow-[0_0_30px_rgba(147,51,234,0.7)] hover:shadow-[0_0_40px_rgba(147,51,234,0.9)] transition-all duration-300 ease-in-out transform hover:-translate-y-1">
      <CardContent className="flex flex-col justify-between h-full p-6 text-white">
        <div className="space-y-2">
          <div className="flex items-center">
            <Phone className="w-4 h-4 mr-2" />
            <p className="text-sm">{info.phone}</p>
          </div>
          <div className="flex items-center">
            <Mail className="w-4 h-4 mr-2" />
            <p className="text-sm">{info.email}</p>
          </div>
          <div className="flex items-center">
            <Link className="w-4 h-4 mr-2" />
            <p className="text-sm">{info.website}</p>
          </div>
          <div className="flex items-center">
            <Github className="w-4 h-4 mr-2" />
            <p className="text-sm">{info.github}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs italic">{info.tagline}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default function BusinessCardDisplay() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col justify-center items-center p-4">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">
        Kaden Frisk's Business Card
      </h1>
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <div>
          <h2 className="text-white mb-2 text-lg text-center lg:text-left">
            Front
          </h2>
          <CardFront name={cardInfo.front.name} roles={cardInfo.front.roles} />
        </div>
        <div>
          <h2 className="text-white mb-2 text-lg text-center lg:text-left">
            Back
          </h2>
          <CardBack info={cardInfo.back} />
        </div>
      </div>
    </div>
  );
}
