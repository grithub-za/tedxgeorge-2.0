import Image from 'next/image';
import Style from "./Header.module.scss"
import logo from "@/public/TEDx_Logo_Short_George-white.svg"
import Link from "next/link";
import clsx from 'clsx';
import Menu from './Menu';
import MenuBtn from './MenuBtn';


function Header(){
    return(
        <header className={clsx(Style.block, "container")}>
            <MenuBtn />

            <Link href="/" className={Style.logoCntr}>
                <Image 
                    src={logo} 
                    alt="TEDxGeorge Logo" 
                    width={350} 
                    height={75}
                    className={Style.logo}
                    priority={true}
                />
            </Link>
            

            <Menu />
        </header>
    )
}

export default Header;