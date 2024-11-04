const Body = () => {
    return(
        <div className="grid justify-center text-white font-poppins mt-[100px]">
            <div>
                <p className="text-[50px] font-poppins_bold">Hi, I'm Kacper.</p>
                <p className="text-[23px]">Self-Taugh Fullstack Developer.</p>
            </div>
            <div className="mt-[75px] mr-[10px]">
                <p className="text-[25px] font-poppins_bold">Skills</p>
                <img src="https://skillicons.dev/icons?i=react,nextjs,js,ts,git,mysql" onClick={() => location.href = 'https://skillicons.dev/'}/>
                <img className="mt-[10px]" src="https://skillicons.dev/icons?i=mongodb,redis,figma" onClick={() => location.href = 'https://skillicons.dev/'}/>
            </div>
            <div className="mt-[75px]">
                <p className="text-[25px] font-poppins_bold">IDE's</p>
                <img src="https://skillicons.dev/icons?i=vscode" onClick={() => location.href = 'https://skillicons.dev/'}/>
            </div>
            <div className="mt-[75px]">
                <p className="text-[25px] font-poppins_bold">Projects</p>
            </div>
        </div>
    )
}

export default Body;