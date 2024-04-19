import '../styles/NavBarStyle.css';
import FrostLogo from '../assets/logo1.png';
function NavBar() {
  return (
    
    <div className="header top-nav">
        <div className="logo">
            <img src={FrostLogo} height="100%" width="100%" alt=""/>
        </div>
        <input id="menu-toggle" type="checkbox" />
        <label className='menu-button-container' htmlFor="menu-toggle">
            <div className='menu-button'></div>
        </label>
        <div className="menu">
            <a href="#">Acceuil</a>
            <a href="#">A Propos</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
        </div>
        <button className="btn-talk"><a href="./register/index.html" className="talk">Discutons</a></button>
        
    </div>


    


    
  )
}

export default NavBar