import Heading from "../Heading"
import Cards from "./Cards"

const Extension = () => {
  return (
    <section className="extension mb-700">
      <div className="container">
      <Heading heading=" Download the extension" txt="  We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize." />
      <Cards />
      </div>
    </section>
  )
}

export default Extension