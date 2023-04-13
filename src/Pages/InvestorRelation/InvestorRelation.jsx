import React from "react";
import Video from "../../Assets/video/investorRelation.mp4";
import "./InvestorRelation.scss";

const InvestorRelation = () => {
  return (
    <>
      <section className="investor-relation-wrapper py-3 py-sm-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <video className="video mb-2 mb-sm-5" autoPlay controls>
                <source src={Video} type="video/mp4" />
              </video>
            </div>
            <h2 className="heading text-sm-start">
              Invitation to invest in our Vision
            </h2>
            <p className="text-center text-sm-start mb-4">
              From reducing costs to managing risks, business leaders always
              agree to the fact that Artificial Intelligence and Machine
              Learning will transform their businesses. By streamlining
              operations, accelerating growth and fueling innovation, Intelsense
              AI believes to help enterprises, but this will not be easy without
              your financial assistance.
            </p>
            <p className="text-center text-sm-start mb-4">
              Over the past decade, the social media revolution shaped where we
              are now. All the top companies of today harnessed the power of the
              social revolution because business is all about choosing the best
              strategy. And it needs no telling that by the next ten years, only
              those will remain at the top which embraces the next big
              revolution, AI or artificial intelligence.
            </p>
            <p className="text-center text-sm-start mb-4">
              With time, smart AI solutions will become an obligatory demand for
              almost every venture just like the internet is now, only faster
              than ever. By fast, we are talking billions in investments.
              Already <strong>$5 billion</strong> has been invested in{" "}
              <strong>1400</strong>
              AI-powered Startups as of last year’s data. A recent study by PWC
              global suggests AI would add 15.7 trillion dollars to the global
              GDP by <strong>2030</strong>. This is only the beginning.
            </p>
            <p className="text-center text-sm-start mb-4">
              Now, you might ask why to put so much money into a single piece of
              technology. Well, the answer is convenience. Technology was brewed
              to ensure convenience or simply make things easier. AI makes
              everything easier and people love what makes their life easy.
              That’s where Intelsense comes in. Take typing, for example, quite
              a common routine for many of us; but with our SenseVoice, you can
              write whatever you wish without tapping a single key. With our
              tech, you can write, transcribe in any language you want, even in
              minor gipsy dialects. Just think about all the possibilities of
              this! Real-time subtitles, speech diarization, tone detection and
              what not! From now on, boring presentations, gibberish lectures,
              multinational meetings, and interviews won’t be so confusing
              anymore.
            </p>
            <p className="text-center text-sm-start mb-4">
              We believe you are familiar with Siri or Alexa, we’re talking
              about virtual assistant programmes. Meet HIA, Intelsense’s own
              virtual manager. The applications of this system are limitless.
              HIA can act as a personal virtual manager, from managing financial
              tasks to performing executive orders, it can pose as an equivalent
              of an admin unit. With HIA’s machine learning technology supply
              chain errors can be reduced by as much as <strong> 50%</strong>.
              HIA is already equipped to adjust with different work modules like
              the Healthcare industries, research labs, pharmaceuticals to
              conduct critical operations and feedback. Intelsense’s remarkable
              technology promises to revolutionize every sector end-to-end.
            </p>
            <p className="text-center text-sm-start mb-4">
              Our top of the line SaaS solutions will open the door to the
              future of e-commerce. Imagine, having an intelligent query
              management bot working 24/7 instead of a call centre of 50 people
              on headphones like earlier. Such solutions can reduce customer
              service costs by up to <strong>30%</strong>, according to IBM. Our
              sensebot has turned your imagination into reality through
              conversational AI. Powered by deep learning, Sensebot lets you
              experience actual one to one chats, which is only possible in true
              AI. Alright then, what about getting closer to your customers on
              their favorite platforms as a brand? Our advanced image
              recognition engine, visense redefines this concept. With our
              visense consumers can enjoy the convenience of physical shopping
              but virtually; including outfit trials, product recommendations,
              finding similar products and more. Yes, Intelsense can do it!
            </p>
            <p className="text-center text-sm-start mb-4">
              That (pause) was just the tip of the iceberg of what Intelsense
              can do for you. More amazing applications of AI are already down
              the assembly line. To name a few, SenseInsight, an AI-driven
              social sentiment analysis tool; SenseScore, AI Driven Credit
              Scoring Solution. And in near future, all of these technologies
              will be available in multi-lingual formats. It won’t matter which
              language you speak whether it’s English, Bengali, Hindi, Malay or
              Nepali you will have full access to all the services in your own
              dialect. Moreover, we’re working to include all the local and
              minor dialects spread across Asia- Pacific region, the European
              and Northern Irish regions to make our services easier to use.
              Besides, when it comes to languages, we own the benchmark. Our
              SenseVoice can already achieve 92% accuracy with only text data
              and amp it up to 98% depending on domain and audio data
              availability. But it doesn’t stop there, within the next 1 year
              most of our software and services will be ready to serve the
              enterprise needs. Meaning, businesses small to large, national or
              multinational, lateral or multi-dimensional will be able to
              integrate our AI solutions to speed up their operations.
            </p>
            <p className="text-center text-sm-start mb-4">
              All in all, investing in artificial intelligence means lesser
              costs, higher profits. And the best part, AI keeps improving
              through deep learning technology, <strong>24/7</strong>. Leading
              to better efficiency, better opportunities.
            </p>
            <p className="text-center text-sm-start mb-4">
              The world of Intelligence is moving beyond our understanding, are
              you moving along with it? If so, let’s work together to Sense The
              Beyond.
            </p>
            <p className="text-center text-sm-start mb-4">
              If you’re interested to learn more, or want to invest in our
              vision, you can visit our website or send us a mail:
              <strong> founders@intelsense.ai</strong>
            </p>
            <p className="fw-bold text-center text-sm-start">
              Intelsense AI – Sense the beyond.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default InvestorRelation;
