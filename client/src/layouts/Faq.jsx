import React, { useState } from "react";
import { Plus, Minus, Send } from "react-feather";
import "../styles/Faq.css";

const faqs = [
  {
    question:
      "What is CareerOSN and how is it different from other job platforms?",
    answer:
      "CareerOSN combines career planning, job discovery, resume building and growth tracking in one platform."
  },
  {
    question: "How do I create a profile and start applying for jobs?",
    answer:
      "Create an account, complete your profile, upload your resume and start applying."
  },
  {
    question: "Is CareerOSN free to use for job seekers?",
    answer:
      "Yes. CareerOSN offers free features for students and professionals."
  },
  {
    question:
      "Will employers see my resume without my permission?",
    answer:
      "No. You have complete control over your profile visibility."
  },
  {
    question:
      "Does CareerOSN offer career guidance and resume support?",
    answer:
      "Yes. We provide resume analysis, interview preparation and career guidance."
  },
  {
    question: "How do I contact support if I need help?",
    answer:
      "You can contact our team through email or the contact page."
  }
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">

      {/* Badge */}
      <div className="faq-header">
        <div className="faq-badge">
          ✦ FREQUENTLY ASKED QUESTIONS
        </div>
      </div>

      <div className="faq-content">

        {/* Left Side */}
        <div className="faq-left">
          <h2>
            The <span>questions</span> everyone
            <br />
            asks before signing up.
          </h2>

          <p>
            Everything you need to know about CareerOSN.
            <br />
            Can't find what you're looking for?
          </p>

          <div className="faq-actions">
            <button className="contact-btn">
              Contact Us
            </button>

            <a href="/">
              Browse all questions →
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="faq-right">
          {faqs.map((faq, index) => (
            <div
              className="faq-item"
              key={index}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>

                {openIndex === index ? (
                  <Minus size={20} />
                ) : (
                  <Plus size={20} />
                )}
              </button>

              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>

      {/* CTA */}
      {/* <div className="faq-cta">
        <div className="cta-left">
          <div className="cta-icon">
            <Send size={28} />
          </div>

          <div>
            <h3>Ready to find your dream job?</h3>

            <p>
              Join thousands of professionals already
              growing their careers with CareerOSN.
            </p>
          </div>
        </div>

        <div className="cta-right">
          <button className="trial-btn">
            Start Free Trial →
          </button>

          <span>
            14-day • No card required
          </span>
        </div>
      </div> */}

    </section>
  );
}

export default FAQ;