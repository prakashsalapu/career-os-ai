import React, { useState } from "react";
import { ChevronDown, Mail } from "lucide-react";

const faqs = [
  {
    question:
      "What is CareerOS and how is it different from other job platforms?",
    answer:
      "CareerOS combines career planning, job discovery, resume building and growth tracking in one comprehensive platform.",
  },
  {
    question: "How do I create a profile and start applying for jobs?",
    answer:
      "Create an account, complete your profile, upload your resume and start exploring opportunities that match your goals.",
  },
  {
    question: "Is CareerOS free to use for job seekers?",
    answer:
      "Yes. CareerOS offers free features for students and professionals to get started.",
  },
  {
    question: "Will employers see my resume without my permission?",
    answer:
      "No. You have complete control over your profile visibility and can choose what employers see.",
  },
  {
    question: "Does CareerOS offer career guidance and resume support?",
    answer:
      "Yes. We provide resume analysis, interview preparation, and personalized career guidance.",
  },
  {
    question: "How do I contact support if I need help?",
    answer:
      "You can contact our support team through email, live chat, or the contact page on our website.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section">
      <div className="container-max">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Side */}
          <div className="lg:col-span-1 space-y-8">
            {/* Badge */}
            <div className="inline-block">
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-slate-800 rounded-full border border-blue-200 dark:border-slate-700">
                <span className="text-2xl">✦</span>
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  FAQ
                </span>
              </div>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                Questions? We've Got <span className="gradient-text">Answers</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Everything you need to know about CareerOS. Can't find what you're looking for?
              </p>
            </div>

            {/* CTA Actions */}
            <div className="space-y-3">
              <button className="btn btn-primary w-full justify-center">
                Contact Us
              </button>
              <a
                href="/"
                className="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all"
              >
                Browse all questions
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Right Side - FAQ Items */}
          <div className="lg:col-span-2 space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="card p-0 overflow-hidden transition-all duration-300 dark:hover:bg-slate-800/80"
              >
                {/* Question */}
                <button
                  className="w-full px-6 py-5 flex items-start justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-semibold text-slate-900 dark:text-white flex-1">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={24}
                    className={`flex-shrink-0 text-blue-600 dark:text-blue-400 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                {openIndex === index && (
                  <div className="px-6 pb-5 pt-0 border-t border-slate-200 dark:border-slate-700">
                    <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 md:p-12 overflow-hidden relative">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/5 rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-4 flex-1">
              <div className="p-3 bg-white/20 rounded-lg flex-shrink-0">
                <Mail size={28} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Ready to find your dream job?
                </h3>
                <p className="text-white/90 text-lg">
                  Join thousands of professionals already growing their careers with CareerOS.
                </p>
              </div>
            </div>

            <div className="flex-shrink-0 flex flex-col items-center gap-3">
              <button className="btn bg-white text-blue-600 hover:bg-slate-100 font-semibold px-8">
                Get Started →
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;