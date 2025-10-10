
import Container from "../components/Container";
import { Poppins } from "next/font/google";
const popins = Poppins({
  variable: "--font-popins",
  subsets: ["latin"],
  weight:['300','400','500','600','700']
});


export default function Experience() {
  return (
      <main className="bg-layout-dark-yellow pt-24.5 pb-26.5 text-white">
      <Container>    
        My contacts
      </Container>
      </main>
  );
}
