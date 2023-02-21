import React from "react";
import Container from "./container";

export default function Cta() {
  return (
    <Container>
      <h1 class="text-4xl text-center ">Vision of the founder</h1>
      <div className="h-.15 max-w-6xl mx-auto flex flex-col items-center px-5 pt-12 lg:flex-row">
              
              <div className="w-20 pl-5 lg:w-1/2 sm:1">
                <img
                  src="img/CEO image.png"
                  className=" object-cover object-center lg:inline-block"
                  alt="image"
                  style={{height:"10rem",width:"10rem"}}
                />
                
              </div>
              <div className="flex flex-col items-center  pl-0 text-center lg:mb-0 lg:w-1/10 lg:flex-grow lg:items-start lg:pl-12 lg:pr-24 lg:text-left">
                
                <p className="text-md mb-8 lg:text-xl px-1 py-12 ">
                “Over the years, I have built lasting relationships with my clients and team, whose professional success I believe to be closely linked with our long-term progress”
                <br/>
                <h2 class=" mt-12 text-2xl">Debasis Chakarborty</h2>
                <h3 class="text-2xl"> CEO FinTract Global</h3>
</p>

              </div>
            </div>

      
    </Container>
  );
}
