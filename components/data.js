import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/Group 14.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "A platform that grows with you",
  desc: "Headquartered in London, Fintract Global is building cutting edge fintech and regtech platform as SaaS & BaaS business model to support digital economy by providing a range of innovative products (such as, Fraudify - Real time Fraud Detection and Prevention, Finalytics, B2B Payment, Open Banking, End to End Lending, Transaction Monitoring, Trade Finance, Banking Chatbot). We are creating comprehensive financial products combining security, machine intelligence and automation, unique conceptualisation and complete business analysis.",
  image: benefitOneImg,
  bullets: [
  ],
  
};
<div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="https://github.com/web3templates"
            target="_blank"
            rel="noopener"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-indigo-600 bg-white rounded-md px-7 lg:px-10 lg:py-5 ">
            Download for Free
          </a>
        </div>
const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
