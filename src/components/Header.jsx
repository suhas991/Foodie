import logo from '../assets/Foody.svg'
import '../components/Header.css'
export default function Header(){
    return (
        <div className="wrap">
        <div className="logo">
        <img src={logo} alt="logo" />
        </div>
        <div className='search'>
         <input type="text" placeholder='Search food...' className='' />
        </div>
        </div>
    )
}