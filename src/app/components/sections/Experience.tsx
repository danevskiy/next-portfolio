import Image from "next/image"
import EXPERIENCE_LIST from "@/shared/constants/experience"
import { FC } from "react"
import ExperienceCard from "../cards/ExperienceCard"
interface ExperienceProps {
    classes?: string;
}

const Experience: FC<ExperienceProps> = ({classes}) => {
    return (
    <>
        <div className={`flex flex-col items-center gap-14 w-full ${classes ? classes : ''}`}>
            <div className="text-blue-400 text-4xl font-extrabold uppercase leading-9 text-center">Experience</div>

            <div className="w-full flex flex-col gap-12.5">
                {EXPERIENCE_LIST.map((company) => (
                <ExperienceCard  key={company.id} company={company}/>
                ))}

            </div>   
        
        </div>
    </>
    )
}

export {Experience}