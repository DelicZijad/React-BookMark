import {useState} from 'react'
import {FaArrowDown} from 'react-icons/fa'
const QA = () => {
    const [index,setIndex]=useState();
    function changeIndex(id){
setIndex(id)
    if(index===id) setIndex(0)
        
    }
   

    const items=[
        {
           id:1,
           question:'What is Bookmark?',
        answer:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
  justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.`
        },
        {
           id:2,
           question:'How can I request a new browser?',
        answer:` Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
  Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
  ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
  Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.`
        },
        {
           id:3,
           question:'Is there a mobile app?',
        answer:`Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
  urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
  sollicitudin ex et ultricies bibendum.`
        },
        {
           id:4,
           question:'What about other Chromium browsers?',
        answer:`Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
  vitae neque eget nisl gravida pellentesque non ut velit.`
        }
    ]
  return (
    <div className="faq--qa">
   {items.map(item=>(
    <div className={`faq--item ${item.id===items.length?'faq--last':''}`} key={item.id}>
     <div onClick={()=>changeIndex(item.id)} className="faq--question mb-50">
        <p>{item.question}</p>
        <FaArrowDown className={index===item.id ?'txtRed rotate':'txtBlue'} role='button'/>
        </div>
     <div className={`faq--answer txtGray ${index===item.id ?'':'hide'}`}>{item.answer}</div>
    </div>
   ))}
   <a href="#" className="btnBlue btnMax mt-300" style={{marginInline:'auto'}}>More Info</a>
    </div>
  )
   }

export default QA