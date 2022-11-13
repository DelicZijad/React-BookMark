import { useState } from "react"

const Options = (props) => {
    const {index,setIndex,changeIndex}=props;

    const items=[
        {
            id:1,
            txt:'Simple Bookmarking'
        },
        {
            id:2,
            txt:'Speedy Searching'
        },
        {
            id:3,
            txt:'Easy Searching'
        }
    ]
  return (
    <ul className='features--options mb-400'>
     {items.map(item=>(
        <li onClick={()=>changeIndex(item.id)} className={`features--option ${index===item.id?"":"txtGray"}`} key={item.id}>{item.txt}<div className={`features--highlight ${index===item.id?'highlight':''}`}></div>
        </li>
     ))}
    </ul>
  )
}

export default Options