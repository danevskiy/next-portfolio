import Image from "next/image";

export default function DevLogo (){
    return (
        <div className="bg-gradient-to-b from-orange-400 to-purple-600 rounded-full overflow-hidden">
        <Image alt="avatar" height="213" width="213" src="/avatar.png" />
        </div>
    )
}