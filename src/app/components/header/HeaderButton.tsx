import { Dispatch, SetStateAction } from "react";

interface HeaderButtonProps {
    button: string,
    currentButton: string,
    setButton: Dispatch<SetStateAction<string>>;
}

const HeaderButton: React.FC<HeaderButtonProps> = (props: HeaderButtonProps) => {
    
    const { button, currentButton, setButton } = props; 
    
    if (button === currentButton) {
        return(
            <button className="text-[white] ml-[25px]" onClick={() => setButton(currentButton)}>{currentButton}</button>
        )
    } else {
        return(
            <button className="text-[#cdcaca] ml-[25px] hover:opacity-75" onClick={() => setButton(currentButton)}>{currentButton}</button>
        )
    }
}

export default HeaderButton;