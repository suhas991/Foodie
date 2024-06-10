import './Content.css'
import {foods} from './data.js';

export default function Content(){
    const all = foods.map((item) =>{
        return(
            <div className='card' key={item.id}>
            <div className='profile'>
                <div className='item-img'><img src='' alt={item.imageSrc} /></div>
                <div className='des'>
                    <div><h2>{item.name}</h2></div>
                    <div>{item.description}</div>
                </div>
            </div>
            <div className='price'>$10</div>
            </div>
        )}
    )

    return <>
    <div className="container">
         <div className="types">
            <div><button>All</button></div>
            <div><button>Breakfast</button></div>
            <div><button>Lunch</button></div>
            <div><button>Dinner</button></div>
         </div>
         <div className='display'>
            {all}
         </div>
       </div>
    </>
    
}