import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/Maskgroup.png";
import SectionTitle from "../components/sectionTitle";
export default function Hero() {
  return (
    <>
      <Container className="flex flex-wrap p-0 m-0 ">
      <Image
              src={heroImg}
              width="1980"
              height="1053"
              alt="Hero Illustration"
              layout="intrinsic"
              loading="eager"
              placeholder="blur"
            />
      
      </Container>
      <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
        <div className="pt-2 text-gray-400 dark:text-gray-400">
        <SectionTitle
          title="20K+"
          >
          User already registered and<br/> signing up for our product 
        </SectionTitle>
        </div>
        <div className="pt-2 text-gray-400 dark:text-gray-400">
        <SectionTitle
          title="94%"
          >
          Daily Activity Engagement 
        </SectionTitle>
            </div>
            <div className="pt-2 text-gray-400 dark:text-gray-400">
        <SectionTitle
          title="10.2K+"
          >
          Happy clients and worke done 
        </SectionTitle>
            </div>
            <div className="pt-2 text-gray-400 dark:text-gray-400">
        <SectionTitle
          title="95+"
          >
          Trusted by Company 
        </SectionTitle>
            </div>
            
        
          </div>
      
      
    </>
  );
}

