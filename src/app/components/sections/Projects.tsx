import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from 'lucide-react';
const Projects = () => {
    return(
        <div className="flex flex-col items-center gap-7 w-full">
            <div className="text-red-400 text-4xl font-extrabold uppercase leading-9 text-center">Projects</div>

            <div className="w-full flex flex-wrap gap-7.5">
                <div className="grow-1">
                    <Link className="rounded-2xl overflow-hidden block" href="/">
                        <Image alt="html picture" src="/projects/html.png" width={390} height={235}/>
                        <div className="bg-card-desc pt-3 pl-5 pr-12 pb-3.5 relative">
                            <div className="text-stone-300 text-[10px] font-extrabold uppercase leading-tight">CLICK HERE TO VISIT</div>
                            <div className="text-white text-lg font-extrabold uppercase leading-tight">HTML TUTORIAL</div>

                             <ArrowUpRight className="absolute right-5 bottom-4.5 text-white" size={25} />
                        </div>
                    </Link>
                </div>
                <div className="grow-1">

                    <Link className="rounded-2xl overflow-hidden block" href="/">
                        <Image alt="html picture" src="/projects/css.png" width={390} height={235}/>
                        <div className="bg-card-desc pt-3 pl-5 pr-12 pb-3.5 relative">
                            <div className="text-stone-300 text-[10px] font-extrabold uppercase leading-tight">CLICK HERE TO VISIT</div>
                            <div className="text-white text-lg font-extrabold uppercase leading-tight">HTML TUTORIAL</div>

                             <ArrowUpRight className="absolute right-5 bottom-4.5 text-white" size={25} />
                        </div>
                    </Link>
                </div>
            </div>   
        
        </div>
    )
}

export {Projects}