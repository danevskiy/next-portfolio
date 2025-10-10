'use client'

import Link from "next/link"
import Image from "next/image"
import MenuItem from "./MenuItem"
import MAIN_NAVIGATION from "@/shared/constants/menu"
import Container from "../components/Container";
import { usePathname } from "next/navigation";


const Header = () => {
  const pathname = usePathname()
  const menuItems = MAIN_NAVIGATION;

  return (
      <header className="bg-layout-grey text-white sticky left-0 top-0 w-full z-10">
        <Container>
        <div className="flex justify-between items-center">
        <Link className="outline-none" href="/"><Image alt="Logo" width="80" height="80" src="/logo.png"/></Link>
        <nav>
          <ul className="flex flex-wrap gap-17.5">
            {menuItems.map((item) => <MenuItem isActive={pathname === item.href} key={item.id} href={item.href} title={item.title}/>)}
          </ul>
        </nav>
        </div>

        </Container>
      </header>
  )
}

export default Header