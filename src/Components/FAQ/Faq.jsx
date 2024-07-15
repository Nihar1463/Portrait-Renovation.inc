import React, { useState } from "react";
import "./Faq.css";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqData = [
    {
      question: "What services do we offer?",
      answer:
        "We conduct a final walkthrough with you to ensure every detail meets your satisfaction. We also provide a post-project follow-up to address any issues that may arise.",
    },
    {
      question: "What happens after the remodel is complete?",
      answer:
        "We conduct a final walkthrough with you to ensure every detail meets your satisfaction. We also provide a post-project follow-up to address any issues that may arise.",
    },
    {
      question: "How long will my remodeling project take?",
      answer:
        "We conduct a final walkthrough with you to ensure every detail meets your satisfaction. We also provide a post-project follow-up to address any issues that may arise.",
    },
    {
      question: "Can I stay in my home during the remodel?",
      answer:
        "We conduct a final walkthrough with you to ensure every detail meets your satisfaction. We also provide a post-project follow-up to address any issues that may arise.",
    },
    {
      question: "Do you provide design services?",
      answer:
        "We conduct a final walkthrough with you to ensure every detail meets your satisfaction. We also provide a post-project follow-up to address any issues that may arise.",
    },
    {
      question: "Can you work with my existing plans or designer?",
      answer:
        "We conduct a final walkthrough with you to ensure every detail meets your satisfaction. We also provide a post-project follow-up to address any issues that may arise.",
    },
  ];

  return (
    <div className="faq-container">
      <div className="faq_head">
        <h1>FAQ's</h1>
        <p>
          These revies aim to highlight positive customer experiences and build
          trust with potential clients.
        </p>
      </div>

      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <div
            className={`faq-question ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleAccordion(index)}
          >
            {item.question}
            <span className="toggle-icon">
              {activeIndex === index ? "-" : "+"}
            </span>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
