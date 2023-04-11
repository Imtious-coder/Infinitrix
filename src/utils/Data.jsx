import { BiUserVoice } from "react-icons/bi";
import { GiProcessor } from "react-icons/gi";

// PRODUCT IMAGES
import ProdductImage3 from "../Assets/images/HOME/productlogo/Airvoice.png";
import ProdductImage2 from "../Assets/images/HOME/productlogo/SenseBot.png";
import ProdductImage1 from "../Assets/images/HOME/productlogo/SenseVoice.png";
import ProdductImage4 from "../Assets/images/HOME/productlogo/hia_img10.png";

// SERVICE DATA
export const serviceData = [
  {
    id: 0,
    icon: <BiUserVoice />,
    title: "Speech Technologies",
    description:
      "From converting your voice messages to text, to recognizing your customers voice commands and working accordingly, our Speech Technologies are obliged to improve the customer experiences.",
  },
  {
    id: 1,
    icon: <GiProcessor />,
    title: "Natural Language Processing",
    description:
      "Our NLP capabilities ensure the utmost benefit to your business, helping your business communicate with your customers in their own languages, making it possible to interpret speech or texts intuitively, measure sentiment and enable you to take data driven decisions effectively.",
  },
];

// PRODUCT DATA
export const productData = [
  {
    id: 0,
    title: "Sensebots",
    subtitle:
      "Transcription Platform supported by Custom Built Speech Recognition & Text To Speech Engine.",
    discription:
      "Our Automatic Speech Recognition engine leverages the most advanced forms of Deep Learning.",
    link: "#",
    logo: ProdductImage1,
  },
  {
    id: 1,
    title: "Sensebots",
    subtitle: "Deep Learning Based Conversational AI Chatbot Platform.",
    discription:
      "Our Automatic Speech Recognition engine leverages the most advanced forms of Deep Learning.",
    link: "#",
    logo: ProdductImage2,
  },
  {
    id: 2,
    title: "Airvoice",
    subtitle: "AI Driven Voice Commerce service for e-commerce platforms",
    discription:
      "Intelsense's HIA is the first technology that can understand and assess information in Bengali. By using a smartphone, a user can carry out transactions, communicate, seek medical aid, etc. ",
    link: "#",
    logo: ProdductImage3,
    productLink: "",
  },
  {
    id: 3,
    title: "HIA",
    subtitle:
      "Voice Based AI-powered virtual assistant of Intelsense AI, that combines ASR, TTS, NLP, & NLU.",
    discription:
      "Intelsense's HIA is the first technology that can understand and assess information in Bengali. By using a smartphone, a user can carry out transactions, communicate, seek medical aid, etc. ",
    link: "#",
    logo: ProdductImage4,
    productLink: "",
  },
  // {
  //   id: 3,
  //   title: "InsideSense",
  //   subtitle: "AI Driven Social Sentiment Analysis & Listening Platform.",
  //   discription:
  //     "Intelsense's HIA is the first technology that can understand and assess information in Bengali. By using a smartphone, a user can carry out transactions, communicate, seek medical aid, etc. ",
  //   link: "#",
  //   logo: "/images/New_Images/InsideSense.png",
  //   productLink: "",
  // },
];