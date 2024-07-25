"use client";

import Image from "next/image";
import Link from "next/link";
import NavItem from "./nav-items";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

const NAV_ITEMS = [
  {
    label: "Página Inicial",
    href: "/",
  },
  {
    label: "Nossos Produtos",
    href: "/#nossos_produtos",
  },
  {
    label: "Nossa História",
    href: "/#nossa_historia",
  },
  {
    label: "Rede de Postos",
    href: "/#rede_de_postos",
  },
  {
    label: "Trabalhe Conosco",
    href: "/trabalhe_conosco",
  },
  {
    label: "Contato",
    href: "/#contato",
  },
  {
    label: "Blog MP",
    href: "/blog_mp",
  },
];

const Header = () => {
  return (
    <div className="bg-primary py-2 shadow-lg">
      <div className="container">
        <Link href="/" className="inline-block">
          <Image
            src="/logo.webp"
            alt="Posto Menor Preço"
            height={30}
            width={150}
          />
        </Link>

        <Separator className="border-gray-200" />
      </div>

      <div className="container flex items-center justify-between py-4">
        <nav className="flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <NavItem {...item} key={item.label}></NavItem>
          ))}
        </nav>

        <Button>Encontre seu posto</Button>
      </div>
    </div>
  );
};

export default Header;
