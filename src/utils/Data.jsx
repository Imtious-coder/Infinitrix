import { BiUserVoice } from "react-icons/bi";
import { GiProcessor } from "react-icons/gi";

// SERVICE IMAGE
import ServiceImage1 from "../Assets/images/HOME/services/services-easy1.png";
import ServiceImage2 from "../Assets/images/HOME/services/services-easy2.png";

// PRODUCT IMAGES

// REVIEW IMAGE
import ReviewImage2 from "../Assets/images/HOME/Reviews/1.jpg";
import ReviewImage1 from "../Assets/images/HOME/Reviews/2.jpg";
import ReviewImage3 from "../Assets/images/HOME/Reviews/3.jpg";
import ReviewImage4 from "../Assets/images/HOME/Reviews/4.jpg";

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
    title: "NeuroSync",
    subtitle:
      "Enhance cognitive functions with NeuroSync's advanced brain-computer interface technology.",
    description:
      "NeuroSync is a groundbreaking platform that combines cutting-edge brain-computer interface technology with advanced neurofeedback techniques to enhance cognitive functions and optimize mental performance. Our platform utilizes real-time brainwave analysis to provide personalized training programs tailored to each user's unique cognitive profile. Whether you're looking to improve focus, memory, or creativity, NeuroSync offers scientifically validated protocols to help you achieve your cognitive goals. With its user-friendly interface and interactive training modules, our platform makes brain training accessible to everyone. Unlock your brain's full potential with NeuroSync and experience a new level of mental clarity and productivity.",
    link: "https://www.neurosync.com",
    height: 24,
    width: 17,
  },

  {
    id: 2,
    title: "LingoGenius",
    subtitle:
      "Break language barriers effortlessly with LingoGenius's AI-powered translation solutions.",
    description:
      "LingoGenius is a cutting-edge AI-powered translation platform that revolutionizes multilingual communication. Our advanced natural language processing algorithms enable accurate and fluent translation of text, speech, and documents across multiple languages. Whether you're traveling abroad, conducting business globally, or learning a new language, LingoGenius provides the tools you need to break down language barriers and connect with people around the world. With support for a wide range of languages and dialects, our platform ensures precise and contextually relevant translations in real-time. Experience seamless communication across borders with LingoGenius.",
    link: "https://www.lingogenius.com",
    height: 25,
    width: 18,
  },
  {
    id: 3,
    title: "MindScribe",
    subtitle:
      "Unlock your inner potential with MindScribe's AI-driven personal growth companion.",
    description:
      "MindScribe is an AI-driven personal growth companion designed to help individuals achieve their goals and cultivate a positive mindset. Our platform combines cognitive behavioral therapy techniques with mindfulness practices to empower users to overcome challenges, manage stress, and enhance well-being. Whether you're striving for personal or professional development, MindScribe provides personalized insights and actionable recommendations to support your journey. With its intuitive interface and interactive exercises, our platform fosters self-awareness and resilience, enabling you to thrive in all aspects of life. Start your journey towards a happier and healthier you with MindScribe by your side.",
    link: "https://www.mindscribe.com",
    height: 18,
    width: 12,
  },
  {
    id: 4,
    title: "CryoCraft",
    subtitle:
      "Explore the uncharted realms of creativity with CryoCraft's AI-powered art generation tools.",
    description:
      "CryoCraft is a revolutionary AI-powered art generation platform that redefines the boundaries of creativity. Our platform leverages deep learning algorithms to analyze artistic styles and generate original artworks with stunning visual appeal. Whether you're an artist, designer, or hobbyist, CryoCraft provides a diverse range of tools and filters to spark your imagination and bring your ideas to life. From abstract compositions to photorealistic landscapes, our platform offers endless possibilities for artistic expression and exploration. Join the evolution of art with CryoCraft as your creative muse.",
    link: "https://www.cryocraft.com",
    height: 22,
    width: 20,
  },
  {
    id: 5,
    title: "VitaFit",
    subtitle:
      "Achieve your fitness goals with VitaFit's AI-driven personalized training platform.",
    description:
      "VitaFit is an AI-driven personalized training platform designed to optimize your fitness journey and maximize results. Our platform combines cutting-edge machine learning algorithms with expert fitness coaching to deliver tailored workout plans and nutritional guidance based on your unique goals and preferences. Whether you're looking to build muscle, lose weight, or improve overall health, VitaFit provides the tools and support you need to succeed. With its intuitive workout tracker and progress analytics, our platform keeps you motivated and accountable every step of the way. Take charge of your fitness with VitaFit and unlock your full potential.",
    link: "https://www.vitafit.com",
    height: 21,
    width: 16,
  },
  {
    id: 7,
    title: "QuantumCraft",
    subtitle:
      "Embark on a quantum computing journey with QuantumCraft's innovative AI-powered quantum development platform.",
    description:
      "QuantumCraft is a pioneering quantum development platform that empowers researchers and developers to explore the potential of quantum computing with advanced AI capabilities. Our platform provides a comprehensive suite of tools for quantum algorithm design, simulation, and optimization, enabling users to tackle complex computational problems with unprecedented speed and efficiency. Whether you're developing quantum algorithms for optimization, cryptography, or machine learning, QuantumCraft offers the resources you need to push the boundaries of computational science. With its intuitive interface and scalable infrastructure, our platform accelerates the pace of quantum innovation and drives breakthroughs in AI-driven quantum computing. Join us on the frontier of quantum technology with QuantumCraft.",
    link: "https://www.quantumcraft.com",
    height: 26,
    width: 19,
  },
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
    name: "Heyli",
    image: ReviewImage2,
    designation: "COO, Transsion Bangladesh Limited",
    description:
      "I've been to USA and China, but this is the first time I'm seeing this in Bangladesh. I see this being extremely useful for both our group and other global companies.",
  },
  {
    id: 2,
    name: "Jhon Trute",
    image: ReviewImage3,
    designation: "Head of Digital Banking, Prime Bank",
    description:
      "We have seen local companies using the term 'Al' as a marketing gimmick only. This is so impressive to see a Bangladeshi Al tech company delivering exactly what they are promising.",
  },
  {
    id: 3,
    name: "Anna",
    image: ReviewImage4,
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
