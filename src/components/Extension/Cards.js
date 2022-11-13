import Card from './Card';
import chrome from '../../images/logo-chrome.svg'
import firefox from '../../images/logo-firefox.svg'
import opera from '../../images/logo-opera.svg'
const Cards = () => {
    const data=[
        {
         src:chrome,
         version:62,
         name:'Chrome'
        },
        {
         src:firefox,
         version:55,
         name:'Firefox'
        },
        {
         src:opera,
         version:46,
         name:'Opera'
        }
    ]
  return (
    <div className="cards">
   {data.map(item=>(
    <Card key={item.name} src={item.src} version={item.version} name={item.name}/>
   ))}
    </div>
  )
}

export default Cards