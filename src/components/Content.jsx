import './Content.css'
import {foods} from './data.js';
import Display from './Display.jsx';
import { useState } from 'react';


export default function Content(){

    const def = foods.map((item) =>{
        return <Display food={item}/>
    })
    
    //state
    const [show,setShow]=useState(def);

    const breakfast = foods.filter((item) =>
        item.category==='breakfast' )

    const lunch = foods.filter((item) =>
        item.category==='lunch' )

    const dinner = foods.filter((item) =>
        item.category==='dinner' )
    
    const handleB = () => {
        let val=breakfast.map(item =>{
            return <Display food={item}/>
        })
        setShow(val)
    }

    const handleL = () => {
        let val=lunch.map(item =>{
            return <Display food={item}/>
        })
        setShow(val)
    }

    const handleAll = () => {
        setShow(def)
    }

    const handleD = () => {
        let val=dinner.map(item =>{
            return <Display food={item}/>
        })
        setShow(val)
    }

    return <>
    <div className="container">
         <div className="types">
            <div><button onClick={handleAll}>All</button></div>
            <div><button onClick={handleB}>Breakfast</button></div>
            <div><button onClick={handleL}>Lunch</button></div>
            <div><button onClick={handleD}>Dinner</button></div>
         </div>
         <div className='display'>
            {show}
         </div>
       </div>
    </>
    
}