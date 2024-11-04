"use client";
import Image from "next/image";

import HeaderButton from "./HeaderButton";
import Logo from "@/app/assets/logo.png";

import { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";

interface HeaderProps {
    button: string,
    setButton: Dispatch<SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    
    const { button, setButton } = props;
    const router = useRouter();

    return(
        <div className="flex justify-center min-[400px]:space-x-[100px] mt-[35px] text-slate-500 font-poppins max-[400px]:grid">
            <div>
                <Image className="w-[64px] rounded-[80px] max-[400px]:ml-auto max-[400px]:mr-auto" src={Logo} alt="logo"/>
            </div>
            <div className="mt-[20px] max-[400px]:ml-auto max-[400px]:mr-auto">
                <HeaderButton button={button} currentButton={"Home"} setButton={setButton} clickEvent={() => router.push('/')}/>
                <HeaderButton button={button} currentButton={"Blog"} setButton={setButton} clickEvent={() => router.push('/blog')}/>
                <HeaderButton button={button} currentButton={"Github"} setButton={setButton} clickEvent={() => location.href = 'https://github.com/KacpersDev'}/>
            </div>
        </div>
    )
}

export default Header;