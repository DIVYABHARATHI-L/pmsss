import React from 'react';
import './FAQ.css';

const faqData = [
  {
    question: "What is the Prime Minister's Special Scholarship Scheme (PMSSS)?",
    answer:
      "PMSSS is a scholarship scheme launched in 2011 by the Government of India with AICTE. It is designed specifically for students from Jammu & Kashmir and Ladakh, providing financial assistance for undergraduate and diploma courses.",
  },
  {
    question: "Who is eligible for the PMSSS?",
    answer:
      "Applicants must have passed the 12th standard exam from JKBOSE or CBSE-affiliated schools located in J&K or Ladakh. The family income of the applicant should not exceed ₹8,00,000 per annum. Lateral Entry Scheme applicants must have passed a Diploma in Engineering from recognized Polytechnic Institutes in J&K or Ladakh.",
  },
  {
    question: "What types of courses are covered under PMSSS?",
    answer:
      "PMSSS covers:\n- General Degree courses (2070 scholarships).\n- Professional courses like Engineering, B.Sc. Nursing, B. Pharmacy, B. Architecture, and HMCT (2830 scholarships).\n- Medical courses like MBBS and BDS (100 scholarships).",
  },
  {
    question: "Are there any exclusions under PMSSS?",
    answer:
      "Yes, exclusions include:\n- Candidates pursuing courses through Open Universities.\n- Those availing benefits from other scholarship schemes.\n- Candidates admitted through Management Quota.\n- Candidates pursuing Diploma or Postgraduate courses.\n- Applicants with a family income over ₹8,00,000 per annum.",
  },
];

const FAQ = () => {
  return (
    <section className="faq">
      <h2 className="faq-title">F.A.Q</h2>
      <div className="faq-grid">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3 className="faq-question">{faq.question}</h3>
            <p className="faq-answer">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
