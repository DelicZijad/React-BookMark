import Heading from "../Heading"
import QA from "./QA"
const FAQ = () => {
  return (
  <section className="faq mb-300">
    <div className="container faq--container">
    <Heading heading="Frequently Asked Questions" txt='Here are some of our FAQs. If you have any other questions you’d like 
  answered please feel free to email us.' />
  <QA />
  </div>
  </section>
  )
}

export default FAQ