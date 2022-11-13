

const Heading = (props) => {
  const {heading,txt}=props
  return (
   <div className="mb-300">
        <h2 className="fs-heading-secondary txtCtr mb-100">{heading}</h2>
        <p className="features--txt txtCtr txtGray">{txt}</p>
    </div>
  )
}

export default Heading