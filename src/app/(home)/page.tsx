
import Container from "../components/Container";
import { Poppins } from "next/font/google";
import {Represent as RepresentSection} from "../components/sections/Represent"
import {Skills as SkillsSection} from "../components/sections/Skills"
import {Projects as ProjectsSection} from "../components/sections/Projects"
import { Experience as ExperienceSection } from "../components/sections/Experience";
const popins = Poppins({
  variable: "--font-popins",
  subsets: ["latin"],
  weight:['300','400','500','600','700']
});


export default function Home() {
  return (
      <main className="bg-layout-dark-yellow pt-24.5 pb-26.5">
      <Container>
        <div className={`${popins.variable} antialiased flex flex-col items-center w-full text-white`}>
          <RepresentSection/>
          <SkillsSection/>
          <ProjectsSection/>
          <ExperienceSection classes={'mt-25'}/>

        </div>
      </Container>
      </main>
  );
}
