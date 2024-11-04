import Image, { StaticImageData } from "next/image";

interface ProjectProps {
    projectTitle: string,
    projectDescription: string,
    projectImage: StaticImageData,
}

const Project: React.FC<ProjectProps> = (props: ProjectProps) => {
    const { projectTitle, projectDescription, projectImage } = props;
    
    return(
        <div className="grid justify-center mt-[10px]">
            <Image className="rounded-[15px]" width={365} src={projectImage} alt={"Project Image"}/>
            <p>{projectTitle}</p>
            <p>{projectDescription}</p>
        </div>
    )
}

export default Project;