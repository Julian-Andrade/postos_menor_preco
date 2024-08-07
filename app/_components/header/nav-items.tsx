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
        "flex items-center text-blue hover:text-red",
        isActive && "font-bold text-red",
      )}
    >
      {label}
    </Link>
  );
};

export default NavItem;
