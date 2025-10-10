import Link from "next/link"
import { MenuItemProps } from "@/shared/types/MenuItem"
export default function MenuItem({href, title}: MenuItemProps) {
    return(
        <li><Link className="font-semibold text-base hover:text-transparent  hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-400 hover:to-purple-600" href={href}>{ title }</Link></li>
    );
}