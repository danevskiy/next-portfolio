import Image from "next/image"
import EXPERIENCE_LIST from "@/shared/constants/experience"
const Experience = () => {
    return (
    <>
        <div className="flex flex-col items-center gap-14 w-full mt-25">
            <div className="text-blue-400 text-4xl font-extrabold uppercase leading-9 text-center">Projects</div>

            <div className="w-full flex flex-col gap-12.5">
                {EXPERIENCE_LIST.map((company) => (
                    <div key={company.id}>
                    <div className="flex flex-wrap justify-between items-start">
                        <p className="text-white text-xl font-bold flex items-center gap-2.5">
                            <Image className="inline-block" alt={company.image.alt} width="34" height="32" src={company.image.url}/>         
                            <span>{company.title}</span>
                        </p>
                        <span className="text-gray-400 text-sm font-normal leading-snug mt-1">{company.period}</span>
                    </div>
                    <div className="text-gray-400 text-sm font-normal leading-snug mt-6.5">{company.content}</div>
                </div>
                ))}

            </div>   
        
        </div>
    </>
    )
}

export {Experience}