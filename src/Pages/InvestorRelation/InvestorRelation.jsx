import React from "react";
import Video from "../../Assets/video/investorRelation.mp4";
import Meta from "../../components/Meta/Meta";
import "./InvestorRelation.scss";

const InvestorRelation = () => {
  return (
    <>
      <Meta title={"Investor Relation"} />
      <section className="investor-relation-wrapper py-3 py-sm-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <video className="video mb-2 mb-sm-5" autoPlay controls>
                <source src={Video} type="video/mp4" />
              </video>
            </div>
            <h2 className="heading text-sm-start">
              An invitation to investors
            </h2>
            <p className="text-center text-sm-start mb-4">
              Intelsense AI is an innovative tech company that is poised to
              revolutionize the industry with advanced voice solutions. At our
              core, we are passionate about creating cutting-edge technology
              that improves commercial effort in establishing customer
              relationships and makes people’s lives easier..
            </p>
            <p className="text-center text-sm-start mb-4">
              Our team is composed of top AI experts with years of experience in
              this field while working for renowned global companies. We have
              developed a unique approach to AI that combines machine learning,
              natural language processing, and computer vision to deliver
              solutions that are both accurate and efficient, especially in
              local dialects, national languages other than English.
            </p>
            <p className="text-center text-sm-start mb-4">
              Our products are already considered to create a significant impact
              in several industries, including finance, healthcare,
              entertainment, and e-commerce. We are continuously working on
              improving our technology to stay ahead of the competition and meet
              the ever-changing needs of our customers.
            </p>
            <p className="text-center text-sm-start mb-4">
              We are seeking an investment to scale our operations and expand
              our reach to develop newer performance standards. With your
              investment, we can accelerate our growth and make our technology
              accessible for even micro-level businesses and individuals around
              the world.
            </p>
            <p className="text-center text-sm-start mb-4">
              Investing in our company means not only investing in cutting-edge
              AI technology but also in the future of innovation. We believe
              that AI has the power to transform industries by sealing manual
              system loss and create a better world. We are excited to be at the
              forefront of this revolution with our unique solutions.
            </p>
            <p className="text-center text-sm-start mb-4">
              If you consider investing in our company, we would love to discuss
              our vision with you in more detail and explore how we can work
              together to achieve our shared goals.
            </p>
            {/* <p className="text-center text-sm-start mb-4">
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
            </p> */}
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
