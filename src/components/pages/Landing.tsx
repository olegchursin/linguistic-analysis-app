import { Link } from '@tanstack/react-location';

import Features from '../organisms/Features';

const Landing: React.FC = () => {
  return (
    <>
      <section className="hero">
        <div className="container px-6 py-16 mx-auto text-center">
          <div className="max-w-lg mx-auto">
            <h1 className="text-3xl font-bold  text-white md:text-4xl">
              Linguistic Analysis
            </h1>
            <p className="mt-6 text-gray-300">
              Where Natural Language Processing APIs come together to serve your
              lexical, semantic, and text analysis needs
            </p>
            <button className="px-6 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 md:mx-0 md:w-auto focus:outline-none">
              <Link to="dictionary">Get Started</Link>
            </button>
          </div>
        </div>
      </section>
      <Features />
    </>
  );
};

export default Landing;
