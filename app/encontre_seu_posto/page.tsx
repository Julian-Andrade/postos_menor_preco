"use client";

import Link from "next/link";
import SectionTitle from "../_components/section-title/section-title";
import { Button } from "../_components/ui/button";
import { ArrowRightIcon } from "lucide-react";

const RedeDePostos = () => {
  return (
    <div>
      <SectionTitle
        title="Encontre um posto Menor Preço próximo a você"
        description="Em busca do posto de combustível mais perto de você? Busque no para e descubra a maneira mais rápida de chegar no Posto Menor Preço! Abasteça sempre com economia e qualidade."
      />

      <div className="h-[30rem] bg-red"></div>

      <SectionTitle
        title="Ficou com alguma dúvida?"
        description="Entre em contato com a nossa equipe"
      />

      <div className="container pb-24">
        <Link href="/#contato">
          <Button className="flex items-center justify-between gap-3">
            Entrar em contato <ArrowRightIcon size={18} />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default RedeDePostos;
