import { FacebookIcon, InstagramIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t border-solid border-gray-200 py-16 text-xs">
      <div className="container flex w-full items-center justify-between">
        <div>
          <Image
            src="/logo_azul.webp"
            alt="Logo Menor Preço"
            width={144}
            height={50}
          />
        </div>

        <div className="basis-[65%] space-y-3 text-end">
          <p>
            Copyright © Rede de Postos Menor Preço LTDA 2024 | CNPJ:
            00.000.000/0001-00 | Uma empresa do grupo{" "}
            <span className="font-semibold text-blue">Menor Preço</span>
          </p>

          <div className="flex items-center justify-end gap-2">
            <div className="flex items-center gap-2">
              <p>Siga a menor preço nas redes:</p>
              <Link
                href="https://www.instagram.com/postosmenorpreco/"
                target="_blank"
              >
                <InstagramIcon className="text-blue hover:text-red" size={18} />
              </Link>
              <Link
                href="https://www.facebook.com/postosmenorpreco"
                target="_blank"
              >
                <FacebookIcon className="text-blue hover:text-red" size={18} />
              </Link>
            </div>
            |
            <Link href="/" target="_blank">
              <p className="text-blue hover:text-red">
                Política de Privacidade
              </p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
