import Hero from "../components/body/HomeSection/Hero";
import Service from "../components/body/HomeSection/Service";
import Conter from "../components/body/HomeSection/Counter";
import Testimonial from "../components/body/HomeSection/Testimonial";
import Company from "../components/body/HomeSection/Company";
import Work from "../components/body/HomeSection/Work";


const countersData1 = [
  { end: 13, suffix: "+", label: "Years of agency experience", extraClass: "counter-b" },
  { end: 1000, suffix: "+", label: "Successfully projects done", extraClass: "counter-b" },
  { end: 40, suffix: "+", label: "World-wide team members", extraClass: "counter-b" },
  { end: 98, suffix: "%", label: "Clients satisfied & retention" }
];



function Home() {
  return (
    <>
      <Hero />  
      <Service />  
      <Conter counters={countersData1}/>  
      <Testimonial />  
      <Company />  
      <Work />  
    </>
  );
}

export default Home;