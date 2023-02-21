import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Tabs from "../components/tab"


export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
      </Head>

      <Navbar />
      <Hero />
      <div className="max-w-9xl mx-auto flex flex-col items-center bg-dark px-5  lg:flex-row">
              
              <div className="w-4/7 pr-12 lg:w-2/5">
                <img
                  src="img/Group 14.png"
                  className="hidden object-cover object-center lg:inline-block"
                  alt="image"
                />
                
              </div>
              <div className="flex flex-col items-center pb-16 pl-0 text-center lg:mb-0 lg:w-1/2 lg:flex-grow lg:items-start lg:pl-12 lg:pr-24 lg:text-left">
                <h2 className="pb-4 text-2xl font-bold leading-tight lg:text-4xl text-center">
                  A platform that grows with you
                </h2>
                <p className="text-md mb-8 lg:text-xl ">
                Headquartered in London, Fintract Global is building cutting edge fintech and regtech platform as SaaS & BaaS business model to support digital economy by providing a range of innovative products (such as, Fraudify - Real time Fraud Detection and Prevention, Finalytics, B2B Payment, Open Banking, End to End Lending, Transaction Monitoring, Trade Finance, Banking Chatbot). We are creating comprehensive financial products combining security, machine intelligence and automation, unique conceptualisation and complete business analysis.
                <br />
                <br />
                <div className="content-center mx-auto px-48 ">
                <button className="py-2 px-4 bg-blue-800">Get Started</button>
                </div>
                
</p>

              </div>
            </div>
      <section class="bg-dark py-3 ">
      <div class="container max-w-5xl mx-auto m-12">
        
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25  rounded-t"></div>
        </div>
        <div class="flex flex-wrap">
          <div class="w-5/6 sm:w-1/2 p-6">
            <h3 class="text-3xl text-white-800 font-bold leading-none mb-3">
              Why we are the best
            </h3>
            <p class="text-white-600 mb-8">
            We provide our innovative way for digital payment which is secure and easy to use.
              <br />
              <br />
            </p>
          </div>
        <div className="content-center mx-auto px-32 space-x-3 space-y-13 ">
                <button className="py-2 px-4 bg-blue-800">Get Started</button>

                <button className=" space-x-5 py-2 px-4 bg-white text-black">Know More</button>
                
                </div>
      </div>
      </div>
      </section>
      <Testimonials />
      <SectionTitle 
        title="Many big Company trusted us">
        Our clients include multinational corporations, financial institutions, private equity funds, domestic corporations, joint ventures, emerging companies, start-ups, non-governmental organizations, international organizations, individuals and government.
        
      </SectionTitle>
      <section className="mx-auto">
        <div className="container px-5 mx-auto lg:px-24 ">
          <div className="flex flex-col w-full mb-4 text-left lg:text-center">
            
          </div>
          <div className="grid grid-cols-2 gap-16 mb-16 text-center lg:grid-cols-4">
            <div className="flex items-center justify-center">
              <img
                src="https://nine4-2.vercel.app/images/Google-Logo.webp"
                alt="Paypal Logo"
                className="block object-contain h-16 greyC"
              ></img>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://nine4-2.vercel.app/images/PayPal-Logo.png"
                alt="Shopify Logo"
                className="block object-contain h-16 greyC"
              ></img>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="img/University.png"
                alt="Cloudflare Logo"
                className="block object-contain h-16 greyC"
              ></img>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="img/Amazon_icon.svg"
                alt="Paypal Logo"
                className="block object-contain h-16 greyC"
  
              ></img>
            </div>
          </div>
        </div>
      </section>
      <Tabs />
      
      <Cta />
      <Footer />
      
    </>
  );
}
