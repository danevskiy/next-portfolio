import Image from "next/image"
import { FC } from "react"

interface ExperienceCardProps {
    company:{
    image: {
    alt: string,
    url:string,
    },
    title: string,
    content: string,
    period:string
    }
}

const ExperienceCard: FC<ExperienceCardProps> = ({company}) => {
    return (
          <div>
                <div className="flex flex-wrap justify-between items-start">
                    <p className="text-white text-xl font-bold flex items-center gap-2.5">
                        <Image className="inline-block" alt={company.image.alt} width="34" height="32" src={company.image.url}/>         
                        <span>{company.title}</span>
                    </p>
                    <span className="text-gray-400 text-sm font-normal leading-snug mt-1">{company.period}</span>
                </div>
                <div className="text-gray-400 text-sm font-normal leading-snug mt-6.5">{company.content}</div>
          </div>
    )
};

export default ExperienceCard