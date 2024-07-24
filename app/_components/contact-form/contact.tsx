import { ClockIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import SectionTitle from "../section-title/section-title";
import ContactForm from "./contact-form";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-50 pb-24">
      <SectionTitle
        title="Contato"
        description="Fale diretamente com a nossa equipe"
      />

      <div className="container grid grid-cols-2 justify-center">
        <div className="flex flex-col gap-6">
          <div className="space-y-1">
            <PhoneIcon className="text-red" />
            <p className="text-lg font-semibold text-blue">
              Central de Relacionamento
            </p>
            <p>(75) 3612-4200</p>
          </div>

          <div className="space-y-1">
            <ClockIcon className="text-red" />
            <p className="text-lg font-semibold text-blue">
              Horário de Funcionamento
            </p>
            <p>Segunda a sexta, das 08:00 às 12:00 e 14:00 às 18:00 hs</p>
          </div>

          <div className="space-y-1">
            <MapPinIcon className="text-red" />
            <p className="text-lg font-semibold text-blue">Localização</p>
            <p>
              Av. Getúlio Vargas, 1839, Ponto Central, Feira de Santana, Bahia
            </p>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
