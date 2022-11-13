import src1 from '../../images/illustration-features-tab-1.svg'
import src2 from '../../images/illustration-features-tab-2.svg'
import src3 from '../../images/illustration-features-tab-3.svg'
const Container = (props) => {
    const {index}=props
    console.log(index);
    const data=[
        {
            src:src1,
            heading:'Bookmark in one click',
            txt:  `Organize your bookmarks however you like. Our simple drag-and-drop interface 
  gives you complete control over how you manage your favourite sites.`

        },
        {
            src:src2,
            heading:'Intelligent search',
            txt:  `Our powerful search feature will help you find saved sites in no time at all. 
  No need to trawl through all of your bookmarks.`

        },
        {
            src:src3,
            heading:'Share your bookmarksh',
            txt:  `Easily share your bookmarks and collections with others. Create a shareable 
  link that you can send at the click of a button.`

        },
    ]
  return (
    <div className='features--item'>
        <div className="features--illustration">
            <img src={data[index-1].src} alt="illustration" />
        </div>
        <div className="features--itemTxt flexCol">
            <h3 className="fs-heading-secondary ">{data[index-1].heading}</h3>
            <p className="txtGray">{data[index-1].txt}</p>
            <a href="#" className="btnBlue btnMax">More Info</a>
        </div>
    </div>
  )
}

export default Container