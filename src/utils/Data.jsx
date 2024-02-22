import { BiUserVoice } from "react-icons/bi";
import { GiProcessor } from "react-icons/gi";

// SERVICE IMAGE
import ServiceImage1 from "../Assets/images/HOME/services/services-easy1.png";
import ServiceImage2 from "../Assets/images/HOME/services/services-easy2.png";

// PRODUCT IMAGES
import ProdductImage3 from "../Assets/images/HOME/productlogo/Airvoice.png";
import ProdductImage4 from "../Assets/images/HOME/productlogo/Hia Logo.png";
import ProdductImage2 from "../Assets/images/HOME/productlogo/SenseBot.png";
import ProdductImage1 from "../Assets/images/HOME/productlogo/SenseVoice.png";

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
import BlogImage2 from "../Assets/images/BLOG/blog2.jpg";

// SERVICE DATA
export const serviceData = [
  {
    id: 0,
    icon: <BiUserVoice />,
    title: "Voice Detection 🎙️",
    description:
      "Voice Detection: A robust feature providing seamless user authentication and enhanced security measures. Experience the convenience of hands-free interaction and personalized user experiences with our innovative voice detection feature.",
  },
  {
    id: 1,
    icon: <GiProcessor />,
    title: "Image Processing",
    description:
      "Optimize your workflow and elevate visual content quality with our advanced image processing capabilities. Unlock new possibilities in digital transformation with our image processing technology, delivering precision and efficiency.",
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
    height: 80,
    width: 250,
  },
  {
    id: 1,
    title: "Sensebots",
    subtitle: "Deep Learning Based Conversational AI Chatbot Platform.",
    discription:
      "Our Automatic Speech Recognition engine leverages the most advanced forms of Deep Learning.",
    link: "#",
    logo: ProdductImage2,
    height: 140,
    width: 250,
  },
  {
    id: 2,
    title: "Airvoice",
    subtitle: "AI Driven Voice Commerce service for e-commerce platforms",
    discription:
      "Intelsense's HIA is the first technology that can understand and assess information in Bengali. By using a smartphone, a user can carry out transactions, communicate, seek medical aid, etc. ",
    link: "#",
    logo: ProdductImage3,
    height: 140,
    width: 250,
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
    height: 30,
    width: 80,
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
    title:
      "Introducing Sense Voice, an AI-driven Voice Assistant to transform your digital shopping experience",
    subtitle:
      "Sense Voice is a AI-driven Voice Assistant to transform your digital shopping experience",
    li1: "What is Voice Commerce Ever wondered about getting instant answers in the form of “speech” rather than typing? Well, it is no longer a mystery, rather a reality nowadays . Voice Commerce refers to the use of voice based solutions to search and purchase products from an e-commerce platform. This is like talking to the website. Customer needs to voice out which product or service he is looking for, the platform will seamlessly execute this command through ‘Artificial Intelligence’ and ‘Natural Language Processing’ technology.",
    li2: "Voice commerce is indeed a new age of e-commerce. Conversational AI simplifies any task for the e-commerce customers. Online retailers can now allow their customers to look for items, place the order, make payment as per preference, track the order status and provide post delivery feedback. Furthermore, these command histories can be used to make future orders.",
    li3: "How Voice Commerce helps E-Commerce Brands: One of the biggest challenges in e-commerce is that the potential customers are dropping off before executing a purchase. The most common reasons are either because the customers are unable to decide which products to buy or simply they fail to execute the research. This is exactly where voice commerce comes to play. There are so many alternatives in the market nowadays that almost everyone seems to be in a quandary to select which one to purchase. With Voice Commerce, people can just utter the product they are looking for; for example “what are the best mobile covers under 500 bdt”. The intelligent voice assistant will instantly scan all relevant data  to find you the best possible cover and alternatives. This not only smoothens the user experience, but also streamlines the operation for the e-commerce as they no longer are required to invest extra resources in this. Basically, voice commerce is the language of the customer's choice. ",
    li4: "Trends & Use Cases of Voice Commerce: Voice Commerce is indeed a game changer for the industry. Researchers predict that by 2022, voice based shopping will penetrate about 55% of all American households, hitting about 40 billion dollars by that time. This platform will be a pivotal part of the user experience strategy. Following are the list of trends and uses of voice commerce- ",
    li5: "01. Personalized shopping experience: voice commerce will personalize the shopping experiences with the use of recommendations based on individual preferences. Suppose, a customer is exploring Daraz to buy electronic appliances for households. The voice assistant in the platform can better suggest the trending electronics that are hitting the market. It will help the customer with better informed decision making and enable repetitive buying.",
    li6: "02. Suggest better reviews: Another major advantage of using voice commerce is that it has the power to suggest better customer recommendations and reviews. The ease and convenience of reviewing products make them more meaningful and genuine. Voice assistants certainly reduce the task of typing long feedbacks. It rather asks for very specific queries and meaningful answers. Ever wondered about getting instant answers in the form of “speech” rather than typing? Well, it is no longer a mystery, rather a reality nowadays . Voice Commerce refers to the use of voice based solutions to search and purchase products from an e-commerce platform. This is like talking to the website. Customer needs to voice out which product or service he is looking for, the platform will seamlessly execute this command through ‘Artificial Intelligence’ and ‘Natural Language Processing’ technology. Voice commerce is indeed a new age of e-commerce. Conversational AI simplifies any task for the e-commerce customers. Online retailers can now allow their customers to look for items, place the order, make payment as per preference, track the order status and provide post delivery feedback. Furthermore, these command histories can be used to make future orders. ",
    li7: "How Voice Commerce helps E-Commerce Brands: One of the biggest challenges in e-commerce is that the potential customers are dropping off before executing a purchase. The most common reasons are either because the customers are unable to decide which products to buy or simply they fail to execute the research. This is exactly where voice commerce comes to play. There are so many alternatives in the market nowadays that almost everyone seems to be in a quandary to select which one to purchase. With Voice Commerce, people can just utter the product they are looking for; for example “what are the best mobile covers under 500 bdt”. The intelligent voice assistant will instantly scan all relevant data  to find you the best possible cover and alternatives. This not only smoothens the user experience, but also streamlines the operation for the e-commerce as they no longer are required to invest extra resources in this. Basically, voice commerce is the language of the customer's choice.   ",
    li8: "Trends & Use Cases of Voice Commerce: Voice Commerce is indeed a game changer for the industry. Researchers predict that by 2022, voice based shopping will penetrate about 55% of all American households, hitting about 40 billion dollars by that time. This platform will be a pivotal part of the user experience strategy. Following are the list of trends and uses of voice commerce-  ",
    li9: "01. Personalized shopping experience: voice commerce will personalize the shopping experiences with the use of recommendations based on individual preferences. Suppose, a customer is exploring Daraz to buy electronic appliances for households. The voice assistant in the platform can better suggest the trending electronics that are hitting the market. It will help the customer with better informed decision making and enable repetitive buying.",
    li10: "02. Suggest better reviews: Another major advantage of using voice commerce is that it has the power to suggest better customer recommendations and reviews. The ease and convenience of reviewing products make them more meaningful and genuine. Voice assistants certainly reduce the task of typing long feedbacks. It rather asks for very specific queries and meaningful answers. ",
    li11: "03. Time efficient: Research claimed that about 62% of the respondents would use a voice assistant while multitasking. Because of its effectiveness and responsiveness, people are eager to use voice assistants. The average person normally types around 30 to 35 words per minute. But if one uses a voice assistant, he/she will be able to process about 100 words per minute, resulting in a better output. By using voice assistants, people can shop anywhere at any time while being engaged in other activities. ",
    li12: "04. Smart Shopping: Voice assistants will be able to let our shopping experience more effectively. It is smart enough to capture our consumer behavior and habits. For example, when we are trying to buy products online, the voice assistant will remind us about the products we have previously missed on the shopping card and recommend better products in the market. This is a huge competitive advantage for our local premium brands. ",
    li13: "How Intelsense.Ai will contribute towards establishing voice commerce: According to the recent data, there are 43 registered e-commerces in Bangladesh. Ranging from product search to payment checkout, voice assistants can vastly improve the user experience of the customers generating incremental transactions in the platform. It has already been proven to be a great asset for any industry, regardless of the size and scale of the organization. Intelsense AI has come up with AI Driven voice commerce technology- ‘SenseVoice’. It is the only voice commerce AI that can interpret and respond to both Bangla and English voice commands and conversations. From minimizing  costs to increasing customer satisfaction, Voice assistants can be a game changer. Generation Z are being greatly benefited around the world by this solution which leads to higher service adoptions for the e-commerce industry. ",
    li14: "About Intelsense AI Intelsense AI is dedicated to making the world a better place. SenseVoice, the voice-based voice commerce, is the first technology to interpret and analyze information as well as execute voice commands in both Bengali and English, and is one of the company's existing AI-driven revolutionary solutions. With its unique conversational ai solution, it is constantly reinventing the user experience. Intelsense AI is bringing insurgence in the field of technology, and it's now on board to be the next big thing in the e-commerce industry in Bangladesh. With the brand slogan ‘sense the beyond’, Intelsense.ai is bringing insurgence in the field of technology, and it's now on board to be the next big thing in the e-commerce industry in Bangladesh.",
    li15: "To learn more about existing features and offerings of Intelsense AI, have a visit at https://intelsense.ai/.",
  },
  {
    id: 2,
    image: BlogImage1,
    title:
      "How AI & Voice Technology can Revolutionize the Financial Industry in Bangladesh",
    subtitle:
      "Sense Voice is a AI-driven Voice Assistant to transform your digital shopping experience",
  },
  {
    id: 3,
    image: BlogImage1,
    title: "How AI is transforming Journalism",
    subtitle:
      "Sense Voice is a AI-driven Voice Assistant to transform your digital shopping experience",
  },
  {
    id: 4,
    image: BlogImage1,
    title: "Intelsense AI: Harnessing innovation with artificial intelligence",
    subtitle:
      "Sense Voice is a AI-driven Voice Assistant to transform your digital shopping experience",
  },
  {
    id: 5,
    image: BlogImage1,
    title: "The History And Evolution Of Conversational AI",
    subtitle:
      "Sense Voice is a AI-driven Voice Assistant to transform your digital shopping experience",
  },
  {
    id: 6,
    image: BlogImage2,
    title: "How Artificial Intelligence Will Transform Business",
    subtitle:
      "Sense Voice is a AI-driven Voice Assistant to transform your digital shopping experience",
  },
];
