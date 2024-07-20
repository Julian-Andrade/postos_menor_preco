import { cn } from "../../_libs/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  label: string;
  href: string;
}

const NavItem = ({ label, href }: NavItemProps) => {
  const pathname = usePathname();

  const isActive = href === pathname;

  return (
    <Link
      href={href}
      className={cn(
        "text-blue hover:text-blue/65 flex items-center gap-1",
        isActive && "font-bold",
      )}
    >
      {label}
    </Link>
  );
};

export default NavItem;
