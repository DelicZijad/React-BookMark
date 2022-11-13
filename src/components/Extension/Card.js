

const Card = (props) => {
    const {name,src,version}=props
  return (
    <div className={`card mb-2001 ${'card--'+name.toLowerCase()}`}>
        <div className="card--upper">
            <div className="card--logo mb-150"><img src={src} alt="" /></div>
            <h4 className="fs-heading-medium txtCtr fw-regular">Add to {name}</h4>
            <h5 className="fs-heading-small txtCtr txtGray">Minimum version {version}</h5>
        </div>
        <div className="card--lower">
            <a href="" className="btnBlue btnFull card--btn">Add & Install Extension</a>
        </div>
    </div>
  )
}

export default Card