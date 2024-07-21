"use client";

import { cn } from "@/app/_libs/utils";
import { Button } from "../ui/button";
import Link from "next/link";

interface SectionTitleProps {
  title: string;
  description?: string;
  titleClassName?: string;
  divClassName?: string;
  button?: boolean;
  buttonLabel?: string;
  href?: string;
}

const SectionTitle = ({
  title,
  description,
  titleClassName,
  divClassName,
  button,
  buttonLabel,
  href,
}: SectionTitleProps) => {
  return (
    <>
      <div className={cn("container py-10", divClassName)}>
        <h3 className={cn("text-[1.5rem] font-bold text-blue", titleClassName)}>
          {title}
        </h3>

        <p>{description}</p>
        <div>
          {button && (
            <Button
              className="h-0 items-center p-0 text-blue hover:bg-transparent hover:font-semibold hover:italic hover:text-blue"
              variant={"ghost"}
              asChild
            >
              <Link href={`${button === true ? href : ""}`}>{buttonLabel}</Link>
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default SectionTitle;
