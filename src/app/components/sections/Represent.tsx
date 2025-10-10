import DevLogo from "../DevLogo";

const Represent = () => {
    return (
    <>
    <DevLogo/>
    <div className="text-[55px] font-semibold text-center mt-10 leading-16">
    I do code and <br /> make content 
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-600"> about it!</span>
    </div>
    <div className="font-light text-secondary-description text-lg text-center leading-snug mt-10">
    I am a seasoned full-stack software engineer with over <br />
    8 years of professional experience, specializing in backend development. <br />
    My expertise lies in crafting robust and scalable SaaS-based <br />
    architectures on the Amazon AWS platform.
    </div>

    <div className="flex gap-4.5 mt-13.5">
    <button className="px-10 h-16 bg-white rounded-[50px] border border-white cursor-pointer"><span className="text-neutral-900 text-xl font-semibold">Get In Touch</span></button>
    <button className="px-10.5 h-16  rounded-[50px] border border-white cursor-pointer"><span className="text-white text-xl font-semibold">Download CV</span></button>
    </div>
    </>
    )
}

export {Represent}