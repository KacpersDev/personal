import Image, { StaticImageData } from "next/image";

interface ProjectProps {
    projectTitle: string,
    projectDescription: string,
    projectImage: StaticImageData,
}

const Project: React.FC<ProjectProps> = (props: ProjectProps) => {
    const { projectTitle, projectDescription, projectImage } = props;
    
    return(
        <div className="grid justify-center mt-[40px] font-poppins hover:cursor-pointer hover:opacity-75 ml-[10px] mr-[10px]">
            <Image className="rounded-[15px]" width={365} src={projectImage} alt={"Project Image"}/>
            <p className="text-white text-center mt-[15px] font-poppins_bold">{projectTitle}</p>
            <p className="text-center text-white text-[12px] mt-[2px]">{projectDescription}</p>
        </div>
    )
}

export default Project;