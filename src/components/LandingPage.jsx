// src/components/LandingPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import MascotVideo from "../assets/video1.mp4";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

// About content updated for clarity and relevance
const aboutContent =
  "Trunki is an AI-assisted, quiz-based learning screening platform designed for children around Class 5 age. Children answer short, interactive questions while the system observes response patterns such as accuracy, time taken, and consistency. Using these signals, Trunki provides an early learning risk status to support awareness and timely guidance. Trunki does not diagnose learning disabilities, it helps parents and teachers understand when further support may be needed.";

const faqs = [
  {
    question: "What age group is Trunki for?",
    answer: "Trunki is designed for children aged 9-11 (around Class 5).",
  },
  {
    question: "Is Trunki online or offline?",
    answer:
      "Trunki is fully online, so a stable internet connection is required for quizzes and AI analysis.",
  },
  {
    question: "How does Trunki assess my child?",
    answer:
      "Your child answers short interactive quizzes. The AI observes patterns like accuracy, response time, and consistency to give a learning risk status.",
  },
  {
    question: "Do I get a diagnosis?",
    answer:
      "No. Trunki provides an early risk assessment, not a medical diagnosis. It helps parents and teachers identify when further support may be needed.",
  },
  {
    question: "How long does a screening session take?",
    answer:
      "Most quizzes take 10-15 minutes per child, depending on the number of questions and interaction speed.",
  },
];

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-pink-600 relative overflow-x-hidden scroll-smooth">
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-yellow-300 rounded-full opacity-30 animate-float-slow z-0"></div>
      <div className="absolute top-60 right-16 w-32 h-32 bg-purple-300 rounded-full opacity-20 animate-float-slow z-0"></div>
      <div className="absolute bottom-40 left-24 w-20 h-20 bg-green-300 rounded-full opacity-25 animate-float-slow z-0"></div>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 pt-24 md:pt-32 relative z-10"
      >
        {/* Video */}
        <div className="md:w-1/3 w-11/12 mb-12 md:mb-0 md:mr-12 rounded-3xl overflow-hidden shadow-2xl">
          <video
            src={MascotVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-6">
            Understand Your Child’s Learning Better
          </h1>
          <p className="text-white mb-8 max-w-lg text-xl md:text-2xl">
            Short interactive activities that help identify early learning
            concerns.
          </p>
          <button
            onClick={() => navigate("/login")}
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold
                       px-8 py-4 rounded-full shadow-xl text-xl md:text-2xl
                       transition transform hover:scale-105"
          >
            Start Screening
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-20 bg-white">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-pink-600 mb-12">
          About Trunki
        </h2>
        <p className="text-center text-xl max-w-3xl mx-auto">{aboutContent}</p>
      </section>

      {/* HELP / HELPLINE SECTION */}
      <section id="helpline" className="w-full py-20 bg-pink-200">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-pink-600 mb-8">
          Struggling with your child?
        </h2>

        <p className="text-center text-xl max-w-3xl mx-auto mb-10 text-gray-700">
          If you’re worried about your child’s learning, behavior, or progress,
          you’re not alone. Our experts are here to guide you in the right
          direction — calmly, safely, and step by step.
        </p>

        <div className="flex justify-center">
          <button
            onClick={() => navigate("/RAGchat")}
            className="bg-pink-600 hover:bg-pink-700 text-white
                       font-bold px-10 py-4 rounded-full text-xl
                       shadow-lg transition transform hover:scale-105"
          >
            Talk to Us
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full py-20 bg-white">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-pink-600 mb-12">
          FAQ
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-pink-100 rounded-3xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold mb-2">{faq.question}</h3>
              <p className="text-lg">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="w-full py-20 bg-pink-600 text-white">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
          Contact Us
        </h2>
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="text-xl">Email: contact@trunkiapp.com</p>
          <p className="text-xl">Phone: +91 98765 43210</p>
          <p className="text-xl">Address: 123 Trunki Lane, Fun City</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-pink-800 text-white py-10 mt-12">
        <div
          className="max-w-6xl mx-auto flex flex-col md:flex-row
                        justify-between items-center px-6 gap-6"
        >
          <div className="text-lg md:text-xl font-bold">Trunki © 2026</div>

          <div className="flex gap-4">
            {[<FaFacebookF />, <FaTwitter />, <FaYoutube />].map((icon, i) => (
              <button
                key={i}
                className="px-4 py-2 rounded-full bg-white/10
                             hover:bg-white/20 transition"
              >
                <span className="text-lg">{icon}</span>
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
