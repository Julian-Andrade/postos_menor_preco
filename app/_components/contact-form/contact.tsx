import { ClockIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import ContactForm from "./contact-form";
import { Card } from "../ui/card";

const Contact = () => {
  return (
    <div className="container grid grid-cols-2 gap-6">
      <Card className="flex flex-col justify-evenly gap-6 bg-transparent p-12">
        <div className="space-y-1">
          <PhoneIcon className="text-red" size={30} />
          <p className="text-lg font-semibold text-blue">
            Central de Relacionamento
          </p>
          <p>(75) 3612-4200</p>
        </div>

        <div className="space-y-1">
          <ClockIcon className="text-red" size={30} />
          <p className="text-lg font-semibold text-blue">
            Horário de Funcionamento
          </p>
          <p>Segunda a sexta, das 08:00 às 12:00 e 14:00 às 18:00 hs</p>
        </div>

        <div className="space-y-1">
          <MapPinIcon className="text-red" size={30} />
          <p className="text-lg font-semibold text-blue">Localização</p>
          <p>
            Av. Getúlio Vargas, 1839, Ponto Central, Feira de Santana, Bahia
          </p>
        </div>
      </Card>

      <ContactForm />
    </div>
  );
};

export default Contact;
