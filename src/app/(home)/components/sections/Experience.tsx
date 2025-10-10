import Image from "next/image"
const Experience = () => {
    return (
    <>
        <div className="flex flex-col items-center gap-14 w-full mt-25">
            <div className="text-blue-400 text-4xl font-extrabold uppercase leading-9 text-center">Projects</div>

            <div className="w-full flex flex-col gap-12.5">

                <div>
                    <div className="flex flex-wrap justify-between items-start">
                        <p className="text-white text-xl font-bold flex gap-2.5">
                        <Image className="inline-block" alt="google logo" width="34" height="32" src="/experience/google.png"/> 
                        
                        <span>Lead Software Engineer at Google</span>
                        </p>
                        <span className="text-gray-400 text-sm font-normal leading-snug mt-1">Nov 2019 - Present</span>
                    </div>
                    <div className="text-gray-400 text-sm font-normal leading-snug mt-6.5">As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.</div>
                </div>

                 <div>
                    <div className="flex flex-wrap justify-between items-start">
                        <p className="text-white text-xl font-bold flex gap-2.5">
                        <Image className="inline-block" alt="apple logo" width="34" height="32" src="/experience/apple.png"/> 
                        
                        <span>Junior Software Engineer at Apple</span>
                        </p>
                        <span className="text-gray-400 text-sm font-normal leading-snug mt-1">Jan 2016 - Dec 2017</span>
                    </div>
                    <div className="text-gray-400 text-sm font-normal leading-snug mt-6.5">During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team.</div>
                </div>

                 <div>
                    <div className="flex flex-wrap justify-between items-start">
                        <p className="text-white text-xl font-bold flex gap-2.5">
                        <Image className="inline-block" alt="meta logo" width="34" height="32" src="/experience/meta.png"/> 
                        
                        <span>Software Engineer at Meta</span>
                        </p>
                        <span className="text-gray-400 text-sm font-normal leading-snug mt-1">Jan 2017 - Oct 2019</span>
                    </div>
                    <div className="text-gray-400 text-sm font-normal leading-snug mt-6.5">At Meta, I served as a  Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.</div>
                </div>

            </div>   
        
        </div>
    </>
    )
}

export {Experience}