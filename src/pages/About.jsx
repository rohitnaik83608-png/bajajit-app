import Banner from "../components/body/AboutSection/Banner";
import Rating from "../components/body/AboutSection/Rating";
import Progress from "../components/body/AboutSection/Progress";
import Faq from "../components/body/AboutSection/Faq";

import Conter from "../components/body/HomeSection/Counter";
import Team from "../components/body/AboutSection/Team";



const countersData2 = [
  { end: 18, suffix: "+", label: "Years of agency experience", extraClass: "counter-b" },
  { end: 200, suffix: "+", label: "Successfully projects done", extraClass: "counter-b" },
  { end: 40, suffix: "+", label: "World-wide team members", extraClass: "counter-b" },
  { end: 98, suffix: "%", label: "Clients satisfied & retention" }

]

function About() {
  return (
    <>

    <Banner></Banner>
    <Rating></Rating>
    <Conter counters={countersData2}/>
    <Progress></Progress>
    <Faq></Faq>
    <Team></Team>
   
    </>
  );
}

export default About;