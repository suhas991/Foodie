import './Content.css'

export default function Display({food}){
   return(
    <div className='card' key={food.id}>
    <div className='profile'>
        
        <div className='item-img'><img src={food.imageSrc} alt='' /></div>
        <div className='des'>
            <div><h2>{food.name}</h2></div>
            <div>{food.description}</div>
        </div>
    </div>
    <div className='price'>${food.price}</div>
    </div>
   )
}