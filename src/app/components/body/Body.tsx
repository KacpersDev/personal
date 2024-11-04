const Body = () => {
    return(
        <div className="grid justify-center text-white font-poppins mt-[100px]">
            <div>
                <p className="text-[50px] font-poppins_bold max-[400px]:text-[35px] max-[400px]:text-center">Hi, I&apos;m Kacper.</p>
                <p className="text-[23px] max-[400px]:text-[18px] max-[400px]:text-center">Self-Taugh Fullstack Developer.</p>
            </div>
            <div className="mt-[75px] mr-[10px] max-[400px]:ml-auto max-[400px]:mr-auto">
                <p className="text-[25px] font-poppins_bold max-[400px]:text-center">Skills</p>
                <img className="max-[400px]:ml-auto max-[400px]:mr-auto mt-[15px]" src="https://skillicons.dev/icons?i=react,nextjs,js,ts,git" onClick={() => location.href = 'https://skillicons.dev/'}/>
                <img className="mt-[10px] max-[400px]:ml-auto max-[400px]:mr-auto" src="https://skillicons.dev/icons?i=mysql,mongodb,redis,figma" onClick={() => location.href = 'https://skillicons.dev/'}/>
            </div>
            <div className="mt-[75px]">
                <p className="text-[25px] font-poppins_bold max-[400px]:text-center">IDE&apos;s</p>
                <img className="max-[400px]:ml-auto max-[400px]:mr-auto mt-[15px]" src="https://skillicons.dev/icons?i=vscode" onClick={() => location.href = 'https://skillicons.dev/'}/>
            </div>
            <div className="mt-[75px]">
                <p className="text-[25px] font-poppins_bold">Projects</p>
            </div>
        </div>
    )
}

export default Body;