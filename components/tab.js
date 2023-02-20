import React from "react";

const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex bg-dark flex-wrap">
      <br/>
      <br/><br/>
      <br/>
        <br/>
        <p className="w-full text-center text-3xl">Here are all the services you get<br/>
when you register with Fintract Global<br/></p>
        <br/>
        <br/>
        <div className="w-full">
          <br/><br/>
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-dark bg-blueGray-600"
                    : "text-dark-600 bg-dark")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Universal Banking
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-dark-600"
                    : "text-blueGray-600 bg-dark")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Open Banking
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-blueGray-600"
                    : "text-blueGray-600 bg-dark")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                SME Lending
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-blueGray-600"
                    : "text-blueGray-600 bg-dark")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Wallet
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-blueGray-600"
                    : "text-blueGray-600 bg-dark")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Banking as a service
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-10 break-words bg-dark w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-1 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <div className="bg-white text-black">
                <div className="my-0 p-0 text-black">
            
                <div className="max-w-9xl mx-auto flex flex-col items-center bg-gradient-to-r from-blue-200 to-blue-100 px-5 py-24 lg:flex-row">
              
              <div className="w-4/7 pr-12 lg:w-2/5">
                <img
                  src="img/image 19.png"
                  className=" object-cover object-center lg:inline-block"
                  alt="image"
                />
                
              </div>
              <div className="flex flex-col items-center pb-16 pl-0 text-center lg:mb-0 lg:w-1/2 lg:flex-grow lg:items-start lg:pl-12 lg:pr-24 lg:text-left">
                <h2 className="pb-4 text-2xl font-bold leading-tight lg:text-4xl text-center">
                  Universal Banking
                </h2>
                <p className="text-md mb-8 lg:text-xl ">
                At Fintract Global, we offer our fintech expertise to financial entities to revolutionize, innovate, and automate their businesses. Our Universal banking feature provides four different services i.e. Open banking, SME Lending, Wallet and Banking as a service.
                
                
</p>
<button class="bg-blue-500 hover:bg-blue-700 text-white text-center align-center font-bold py-2 px-4 rounded">
  Read More
</button>

              </div>
            </div>
          <div className="max-w-9xl mx-auto flex flex-col items-center px-5 py-24 lg:flex-row">
              <div className="flex flex-col items-center pb-16 pl-0 text-center lg:mb-0 lg:w-1/2 lg:flex-grow lg:items-start lg:pl-12 lg:pr-24 lg:text-left">
                <h2 className="pb-4 text-2xl font-bold leading-tight lg:text-4xl text-center">
                  Chatbot
                </h2>
                <p className="text-md mb-8 lg:text-xl ">
                We are on a mission to make state-of-the-art conversational AI technology available to commercial entities and ensure a massive boost for their user experience. We envision empowering the Fintract Global chatbot with cutting-edge advancements in the field..........
                </p>
                <button class="bg-blue-500 hover:bg-blue-700 text-white text-center align-center font-bold py-2 px-4 rounded">
  Read More
</button>
              </div>
              <div className="w-4/7 pr-12 lg:w-2/5">
                <img
                  src="img/image 20.png"
                  className="object-cover object-center lg:inline-block"
                  alt="image"
                />
                
              </div>
            </div>
            <div className="max-w-9xl mx-auto flex flex-col items-center bg-gradient-to-r from-blue-200 to-blue-100 px-5 py-24 lg:flex-row">
              
              <div className="w-4/7 pr-10 lg:w-2/5 sm:1">
                <img
                  src="img/pexels-tima-miroshnichenko-6266500 1.png"
                  className=" object-cover object-center lg:inline-block"
                  alt="image"
                />
                
              </div>
              <div className="flex flex-col items-center pb-16 pl-0 text-center lg:mb-0 lg:w-1/2 lg:flex-grow lg:items-start lg:pl-12 lg:pr-24 lg:text-left">
                <h2 className="pb-4 text-2xl font-bold leading-tight lg:text-4xl text-center">
                  Fraudify
                </h2>
                <p className="text-md mb-8 lg:text-xl ">
                Our universal Fraudify Protectector provides 3 services i.e. Realtime fraud detection, fraud prevention & One Login. Here in FinTract Global we provides a comprehensive sets of cutting edge solutions for the financial, insurance, Govt & other industries.

</p>
<button class="bg-blue-500 hover:bg-blue-700 text-white text-center align-center font-bold py-2 px-4 rounded">
  Read More
</button>

              </div>
        
            </div>
          <div className="max-w-9xl mx-auto flex flex-col items-center  px-5 pt-24 pb-12 lg:flex-row">
              <div className="flex flex-col items-center pb-16 pl-0 text-center lg:mb-0 lg:w-1/2 lg:flex-grow lg:items-start lg:pl-12 lg:pr-24 lg:text-left">
                <h2 className="pb-4 text-2xl font-bold leading-tight lg:text-4xl text-center">
                  B2B Payment
                </h2>
                <p className="text-md mb-8 lg:text-xl ">
                To be a leading international payment platform for banking and financial institutions. We aim to support payments in all the major FIAT(s) and cryptocurrencies with support for real-time currency conversions....
</p>
<button class="bg-blue-500 hover:bg-blue-700 text-white text-center align-center font-bold p-2 px-4 rounded">
  Read More
</button>

              </div>
              <div className="w-4/7 pr-12 lg:w-2/5">
                <img
                  src="img/pexels-fauxels-3184306 1.png"
                  className="object-cover object-center lg:inline-block"
                  alt="image"
                />
                
              </div>
            </div>
            
          </div>
          </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;