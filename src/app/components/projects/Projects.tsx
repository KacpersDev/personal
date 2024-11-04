import Project from "./Project";

import Magnified from "@/app/assets/magnified.png";
import ProductGem from "@/app/assets/productgem.png";
import Priima from "@/app/assets/priima.png";
import Fusion from "@/app/assets/fusion.png";

const Projects = () => {
    return(
        <div>
            <Project projectTitle="Magnified" projectImage={Magnified} projectDescription="Website built for marketing agency."/>
            <Project projectTitle="ProductGem" projectImage={ProductGem} projectDescription="Website built for dropshipping company."/>
            <Project projectTitle="Priima" projectImage={Priima} projectDescription="Website built for logistic company."/>
            <Project projectTitle="Fusion" projectImage={Fusion} projectDescription="Website built for hosting company."/>
        </div>
    )
}

export default Projects;