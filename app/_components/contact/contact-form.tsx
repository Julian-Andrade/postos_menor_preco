"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useToast } from "../ui/use-toast";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { MoveRightIcon } from "lucide-react";
import { Card } from "../ui/card";

const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;

const contactFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Nome precisa ter pelomenos 3 letras." })
    .max(50),
  email: z.string().email({ message: "E-mail inválido." }),
  phone: z
    .string()
    .regex(phoneRegex, { message: "Use o formato (75) 99999-9999" }),
  subject: z.enum(["Dúvida", "Elogio", "Crítica", "Sugestão"], {
    message: "Selecione um assunto válido.",
  }),
  message: z
    .string()
    .min(10, { message: "Mensagem precisa ter pelomenos 10 caracteres." })
    .max(500),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    resetField,
    formState: { isSubmitting, errors },
    setValue,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, "").slice(0, 11);
    const formattedPhone = input.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    setValue("phone", formattedPhone, { shouldValidate: true });
  };

  const { toast } = useToast();

  const handleMessageSubmit = async (data: ContactFormData) => {
    try {
      console.log("Mensagem Enviada!", data);
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Em breve, retornaremos para você.",
        duration: 3000,
      });
      reset({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      resetField("subject");
    } catch (error) {
      toast({
        title: "Mensagem não enviada, tente novamente!",
        duration: 3000,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(handleMessageSubmit)}>
      <Card className="flex flex-col gap-2 p-6">
        <Label className="text-md font-semibold text-blue">Nome</Label>
        <Input {...register("name")} />
        {errors.name && (
          <p className="text-sm text-red">{errors.name.message}</p>
        )}
        <Label className="text-md font-semibold text-blue">E-mail</Label>
        <Input type="email" {...register("email")} />
        {errors.email && (
          <p className="text-sm text-red">{errors.email.message}</p>
        )}
        <div className="flex items-center justify-between gap-4">
          <div className="basis-1/2 space-y-2">
            <Label className="text-md font-semibold text-blue">Assunto</Label>
            <Select
              {...register("subject")}
              onValueChange={(value) =>
                setValue("subject", value as ContactFormData["subject"])
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione o assunto" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Selecione um assunto abaixo</SelectLabel>
                  <SelectItem value="Dúvida">Dúvida</SelectItem>
                  <SelectItem value="Elogio">Elogio</SelectItem>
                  <SelectItem value="Crítica">Crítica</SelectItem>
                  <SelectItem value="Sugestão">Sugestão</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {errors.subject && (
              <p className="text-sm text-red">{errors.subject.message}</p>
            )}
          </div>
          <div className="basis-1/2 space-y-2">
            <Label className="text-md font-semibold text-blue">Telefone</Label>
            <Input
              placeholder="(75) 99999-9999"
              type="tel"
              {...register("phone")}
              onChange={handlePhoneChange}
            />
            {errors.phone && (
              <p className="text-sm text-red">{errors.phone.message}</p>
            )}
          </div>
        </div>
        <Label className="text-md font-semibold text-blue">Mensagem</Label>
        <Textarea className="h-[138px] resize-none" {...register("message")} />
        {errors.message && (
          <p className="text-sm text-red">{errors.message.message}</p>
        )}
        <Button
          className="mx-auto mt-2 flex w-max items-center gap-2"
          disabled={isSubmitting}
        >
          Enviar mensagem
          <MoveRightIcon size={18} />
        </Button>
      </Card>
    </form>
  );
};

export default ContactForm;
