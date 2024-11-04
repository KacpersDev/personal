import Image from "next/image";

import HeaderButton from "./HeaderButton";
import Logo from "@/app/assets/logo.png";
import { Dispatch, SetStateAction } from "react";

interface HeaderProps {
    button: string,
    setButton: Dispatch<SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    const { button, setButton } = props;
    return(
        <div className="flex justify-center space-x-[100px] mt-[35px] text-slate-500 font-poppins">
            <div>
                <Image className="w-[64px] rounded-[80px]" src={Logo} alt="logo"/>
            </div>
            <div className="mt-[20px]">
                <HeaderButton button={button} currentButton={"Home"} setButton={setButton}/>
                <HeaderButton button={button} currentButton={"Blog"} setButton={setButton}/>
                <HeaderButton button={button} currentButton={"Github"} setButton={setButton}/>
            </div>
        </div>
    )
}

export default Header;