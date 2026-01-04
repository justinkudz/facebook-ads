import { useState, useEffect, useRef } from 'react'
import AnimatedGradientText from './AnimatedGradientText'
import ShootingStarLine from './ShootingStarLine'
import './FAQ.css'

function FAQ() {
  const sectionRef = useRef(null)
  const [openIndex, setOpenIndex] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const faqs = [
    {
      question: 'How is this different from other agencies?',
      answer: 'We don\'t stop at the form submission. We build the complete system from ad to sale - automation, sales frameworks, brand content.'
    },
    {
      question: 'Why selective on clients?',
      answer: 'Everything is personalized. I can\'t deliver that quality at scale.'
    },
    {
      question: 'I\'m not tech-savvy. Is this complicated?',
      answer: 'No. We handle all technical setup. You\'ll get notifications via your preferred method.'
    },
    {
      question: 'What if leads don\'t convert?',
      answer: 'We provide the frameworks to improve your close rate alongside the lead volume.'
    },
    {
      question: 'Do I need professional content?',
      answer: 'No. We\'ll show you what to capture on your phone. We handle editing and design.'
    }
  ]

  return (
    <section className="faq" ref={sectionRef}>
      <div className="faq-container">
        <h2 className="section-title">
          <AnimatedGradientText>Frequently Asked Questions</AnimatedGradientText>
        </h2>
        <ShootingStarLine delay={0.3} />
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item" style={{ '--delay': `${index * 0.1}s` }}>
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{faq.question}</span>
                <span className={`faq-icon ${openIndex === index ? 'open' : ''}`}>+</span>
              </button>
              <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
