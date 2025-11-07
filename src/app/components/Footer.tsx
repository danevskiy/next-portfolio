'use client'
import Container from "../components/Container";
import { Poppins } from "next/font/google";
import { Mail, Instagram, Youtube  } from 'lucide-react';
import { useState, useEffect, useLayoutEffect, useInsertionEffect } from "react";

const popins = Poppins({
variable: "--font-popins",
subsets: ["latin"],
weight:['300','400','500','600','700']
});

const Footer = () => {

  const [ description, setDescription ] = useState('');
  const [ counter, setCounter ] = useState(0);

  setTimeout(() => {
     setDescription('Seasoned Full Stack Software Engineer with over 8 years of hands-on experience in designing<br/>and implementing robust, scalable, and innovative web solutions. Adept at leveraging a<br/>comprehensive skill set encompassing front-end and back-end technologies');
  },1000)


  setTimeout(() => {
     setCounter(1);
  },3000)

  useEffect(() => {
        console.log("Boom1");
  }, [description, counter]);

    useLayoutEffect(() => {
        console.log("Boom2");
  }, [description, counter]);

    useInsertionEffect(() => {
        console.log("Boom3");
  }, [description, counter]);

  return (
      <footer className={`${popins.variable} antialiased bg-layout-dark-red text-white pt-20 pb-25`}>
        <Container>
            <div className="text-2xl font-bold tracking-wide">Contact</div>
            <div className="text-stone-300 text-sm font-light tracking-tight mt-9"> { description } </div>
            
            <a className="flex gap-1.5 items-center mt-5" href="mailto:danewsky.work@gmail.com"><Mail color="white" size={14} /> <span className="justify-center text-stone-300 text-sm font-semibold tracking-tight">danewsky.work@gmail.com</span></a>

            <div className="flex gap-3.5 mt-11 items-center">
              <a href="instagram.com"><Instagram size={18}/></a>
              <a href="youtube.com"><Youtube size={25} /></a>
            </div>
        </Container>
      </footer>
  )
}

export default Footer