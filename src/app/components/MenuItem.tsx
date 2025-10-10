import Link from "next/link"
import { MenuItemProps } from "@/shared/types/MenuItem"
export default function MenuItem({href, title, isActive}: MenuItemProps) {
    return(
        <li><Link className={`font-semibold text-base ${isActive? 'text-transparent  bg-clip-text bg-gradient-to-r from-orange-400 to-purple-600' : 'hover:text-transparent  hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-400 hover:to-purple-600'}`} href={href}>{ title }</Link></li>
    );
}