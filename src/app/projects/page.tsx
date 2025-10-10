
import Container from "../components/Container";
import { Poppins } from "next/font/google";
const popins = Poppins({
  variable: "--font-popins",
  subsets: ["latin"],
  weight:['300','400','500','600','700']
});


export default function Projects() {
  return (
      <main className="bg-layout-dark-yellow pt-24.5 pb-26.5">
      <Container>
        <div className={`${popins.variable} antialiased w-full text-white`}>
            <h1>Projects</h1>
        </div>
         
      </Container>
      </main>
  );
}
