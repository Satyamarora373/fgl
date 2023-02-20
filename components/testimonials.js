import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/Vector.png";
import userTwoImg from "../public/img/tick.png";
import userThreeImg from "../public/img/Group 15.png";

export default function Testimonials() {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-4  rounded-2xl py-14 dark:bg-trueGray-800">
          <Avatar
              image={userOneImg}
              name="On Time"
              
            />
            <p className="text-2xl leading-normal ">
            Fintract global value your time. We provide all our services to you on time without any delay or hindrance. Our  clients and their time are very valuable to us. Our products are created from cutting edge technologies which are able to provide on time services.
            </p>
            
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
          <Avatar
              image={userTwoImg}
              name="Security"
              
            />
            <p className="text-2xl leading-normal ">
            Fintract Global takes your security very seriously. We do not disclose any private
information of our clients to anyone which includes account details. We store your private data very securely.
            </p>

            
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
          <Avatar
              image={userThreeImg}
              name="Fast Work Turnaround"
              
            />
            <p className="text-2xl leading-normal ">
            Our products (open banking, SME Lending, fraudify... etc) are created from cutting edge technologies because of which we are able to process and provide all the services very rapidly.
            </p>

            
          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          layout="responsive"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

