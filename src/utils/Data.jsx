import { BiUserVoice } from "react-icons/bi";
import { GiProcessor } from "react-icons/gi";

// SERVICE IMAGE
import ServiceImage1 from "../Assets/images/HOME/services/services-easy1.png";
import ServiceImage2 from "../Assets/images/HOME/services/services-easy2.png";

// PRODUCT IMAGES
import ProdductImage3 from "../Assets/images/HOME/productlogo/Airvoice.png";
import ProdductImage2 from "../Assets/images/HOME/productlogo/SenseBot.png";
import ProdductImage1 from "../Assets/images/HOME/productlogo/SenseVoice.png";
import ProdductImage4 from "../Assets/images/HOME/productlogo/hia_img10.png";

// REVIEW IMAGE
import ReviewImage2 from "../Assets/images/HOME/Reviews/m.jpg";
import ReviewImage1 from "../Assets/images/HOME/Reviews/s.jpg";

// PARTNERS IN OUR PORTFOLIO IMAGES
import PartnersImage1 from "../Assets/images/HOME/Partners/alphasense.png";
import PartnersImage from "../Assets/images/HOME/Partners/scitech.png";
import PartnersImage2 from "../Assets/images/HOME/Partners/signature.jpg";
import PartnersImage3 from "../Assets/images/HOME/Partners/svp.jpg";
import PartnersImage4 from "../Assets/images/HOME/Partners/unilivr";

// BLOG IMAGES
import BlogImage1 from "../Assets/images/BLOG/SenseVoice.jpg";

// SERVICE DATA
export const serviceData = [
  {
    id: 0,
    icon: <BiUserVoice />,
    title: "Speech Technologies",
    description:
      "Helps you complete any voice-based action. It lets you convert speech to text or text to speech, give voice commands, and so much more.",
  },
  {
    id: 1,
    icon: <GiProcessor />,
    title: "Natural Language Processing",
    description:
      "Enables your computer to understand and interact in human languages by using our NLP engine. It includes models for Bangla, English, and many more very efficiently and naturally. ",
  },
];
export const serviceData2 = [
  {
    id: 0,
    image: ServiceImage1,
    title: "Automatic Speech Recognition",
    subtitle: "Speech-to-Text",
    description:
      "IntelsenseAI’s ASR converts speech into text , utilizing patented approaches in neural network technology for transcriptions of audio from a variety of sources and dozens of languages and dialects like narrowband phone calls, and wideband media-broadcast content with precision similar to human ears.",
  },
  {
    id: 1,
    image: ServiceImage2,
    title: "Natural Language Understanding",
    subtitle: "Text-to-Meaning",
    description:
      "IntelsenseAI’s NLU technology seamlessly analyzes and extracts valuable context and “meaning” from documents, recordings of conversations, utilizing deep neural network and machine learning technologies.",
  },
  {
    id: 2,
    image: ServiceImage1,
    title: "Neural Speech Synthesis",
    subtitle: "Text-to-Speech",
    description:
      "IntelsenseAI’s neural text-to-speech (TTS) technologies produce a naturally synthesized speech with high-quality voice offered in a wide variety of voices and languages, that makes it sound like an actual human mouth in action. It can also create custom voices from your own recordings for your brand or consumer-based interfaces.",
  },
];

// PRODUCT DATA
export const productData = [
  {
    id: 0,
    title: "Sensevoice",
    subtitle:
      "A transcription platform backed by a custom-built speech recognition system and NLP, ready to turn your thoughts into texts in no time.",
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
      "Voice Based AI-powered virtual assistant of Intelsense AI, a combination of ASR, TTS, NLP, & NLU engines.",
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

// REVIEW DATA
export const reviewData = [
  {
    id: 0,
    name: "Shahnawaj Chowdhury",
    image: ReviewImage1,
    designation: "Deputy Managing Director, Modhumoti Bank Limited.",
    description:
      "Sensbot has changed the banking landscape in terms of the conversational banking conditions.",
  },
  {
    id: 1,
    name: "Shyamol Saha",
    image: ReviewImage2,
    designation: "COO, Transsion Bangladesh Limited",
    description:
      "I've been to USA and China, but this is the first time I'm seeing this in Bangladesh. I see this being extremely useful for both our group and other global companies.",
  },
  {
    id: 2,
    name: "Majidul Haque",
    image: ReviewImage2,
    designation: "Head of Digital Banking, Prime Bank",
    description:
      "We have seen local companies using the term 'Al' as a marketing gimmick only. This is so impressive to see a Bangladeshi Al tech company delivering exactly what they are promising.",
  },
  {
    id: 3,
    name: "Salman",
    image: ReviewImage1,
    designation: "Director, Inspirer and Adviser Consultancy firm.",
    description:
      "We often take long qualitative research that requires a lot of data extraction. But this transcription platform can quickly note down everything being said, and it would increase the quantity of data extracted from interviews.",
  },
  // {
  //   id: 4,
  //   name: "Shyamol Saha",
  //   image: ReviewImage1,
  //   designation: "COO, Transsion Bangladesh Limited",
  //   description:
  //     "From converting your voice messages to text, to recognizing your customers voice.",
  // },
  // {
  //   id: 5,
  //   name: "Shyamol Saha",
  //   image: ReviewImage1,
  //   designation: "COO, Transsion Bangladesh Limited",
  //   description:
  //     "From converting your voice messages to text, to recognizing your customers voice commands and working accordingly, our Speech Technologies are obliged to improve the customer experiences.",
  // },
];

// PARTNERS IN OUR PORTFOLIO
export const partnersImage = [
  {
    id: 0,
    image: PartnersImage,
    height: "100px",
    width: "250px",
  },
  {
    id: 1,
    image: PartnersImage1,
    height: "90px",
    width: "250px",
  },
  {
    id: 2,
    image: PartnersImage2,
    height: "150px",
    width: "150px",
  },
  {
    id: 3,
    image: PartnersImage3,
    height: "150px",
    width: "150px",
  },
  {
    id: 4,
    image: PartnersImage4,
    height: "100px",
    width: "100px",
  },
];

// BLOG DATA
export const blogData = [
  {
    id: 1,
    image: BlogImage1,
    title: "Introducing Sense Voice",
    subtitle:
      "Sense Voice is a AI-driven Voice Assistant to transform your digital shopping experience",
  },
  {
    id: 2,
    image: BlogImage1,
    title: "Introducing Sense Voice",
    subtitle:
      "Sense Voice is a AI-driven Voice Assistant to transform your digital shopping experience",
  },
  {
    id: 3,
    image: BlogImage1,
    title: "Introducing Sense Voice",
    subtitle:
      "Sense Voice is a AI-driven Voice Assistant to transform your digital shopping experience",
  },
  {
    id: 4,
    image: BlogImage1,
    title: "Introducing Sense Voice",
    subtitle:
      "Sense Voice is a AI-driven Voice Assistant to transform your digital shopping experience",
  },
  {
    id: 5,
    image: BlogImage1,
    title: "Introducing Sense Voice",
    subtitle:
      "Sense Voice is a AI-driven Voice Assistant to transform your digital shopping experience",
  },
  {
    id: 6,
    image: BlogImage1,
    title: "Introducing Sense Voice",
    subtitle:
      "Sense Voice is a AI-driven Voice Assistant to transform your digital shopping experience",
  },
  {
    id: 7,
    image: BlogImage1,
    title: "Introducing Sense Voice",
    subtitle:
      "Sense Voice is a AI-driven Voice Assistant to transform your digital shopping experience",
  },
];
