import Image from "next/image"
import SKILS_LIST from "@/shared/constants/skils";
import { Skill } from "@/shared/types/Skill";
const Skils = () => {
    const imageSize = 42;
    return(
        <div className="flex flex-col gap-12 items-center mt-22 mb-25">
        <div className="text-stone-300 text-xl font-semibold tracking-widest text-center">EXPERIENCE WITH</div>
        <div className="flex gap-15 items-center flex-wrap">
            {SKILS_LIST.map((skill: Skill) => (<Image key={skill.alt} width={imageSize} height={imageSize} alt={skill.alt} src={skill.url}/>))}
        </div>
        </div>
    )
}

export {Skils}