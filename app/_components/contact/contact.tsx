import { ClockIcon, MailCheckIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import ContactForm from "./contact-form";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

const Contact = () => {
  return (
    <div className="container grid grid-cols-2 flex-col gap-6 max-[500px]:flex">
      <Card className="flex flex-col justify-evenly gap-6 bg-transparent p-10">
        <div className="space-y-1">
          <PhoneIcon className="text-red" />
          <p className="text-lg font-semibold text-blue max-[500px]:text-sm">
            Central de Relacionamento
          </p>
          <p className="max-[500px]:text-sm">(75) 3612-4200</p>
        </div>

        <div className="space-y-1">
          <ClockIcon className="text-red" />
          <p className="text-lg font-semibold text-blue max-[500px]:text-sm">
            Horário de Funcionamento
          </p>
          <p className="max-[500px]:text-sm">
            Segunda a sexta, das 08:00 às 12:00 e 14:00 às 18:00 hs
          </p>
        </div>

        <div className="space-y-1">
          <MapPinIcon className="text-red" />
          <p className="text-lg font-semibold text-blue max-[500px]:text-sm">
            Localização
          </p>
          <p className="max-[500px]:text-sm">
            Av. Getúlio Vargas, 1839, Ponto Central, Feira de Santana, Bahia
          </p>
        </div>

        <div className="flex items-center justify-between gap-3 max-[500px]:flex-col">
          <span className="text-lg font-semibold text-blue max-[500px]:text-sm">
            Deseja trabalhar conosco?
          </span>
          <Button className="flex items-center justify-between gap-3 bg-red shadow-lg shadow-red/20 hover:bg-red/70">
            Enviar currículo <MailCheckIcon />
          </Button>
        </div>
      </Card>

      <ContactForm />
    </div>
  );
};

export default Contact;
