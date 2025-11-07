import Image from "next/image"
import SKILLS_LIST from "@/shared/constants/skills";
import { Skill } from "@/shared/types/Skill";
import { FC } from 'react';

interface SkillsProps {
    classes?: string;
}

const Skills: FC<SkillsProps> = () => {
    const imageSize = 42;
    return(
        <div className="flex flex-col gap-12 items-center mt-22 mb-25">
        <div className="text-stone-300 text-xl font-semibold tracking-widest text-center">EXPERIENCE WITH</div>
        <div className="flex gap-15 items-center flex-wrap">
            {SKILLS_LIST.map((skill: Skill) => (<Image key={skill.alt} width="42" height={imageSize} alt={skill.alt} src={skill.url}/>))}
        </div>
        </div>
    )
}

export {Skills}