import '../../styles/navbar/navbar.css';
import pp from '../../assets/photo-pp.jpg';
import dumbSound from '../../assets/dumbsound.svg';

function Navbar() {
   return (
      <div className="navbar">
         <div className="navbar-container">
            <div className="container-dumbsound">
               <img className="dumbsound-img-size" src={dumbSound} />
            </div>
            <div className="container-pp bg-image-colorfull">
               <img className="image-size-100-rounded" src={pp} />
            </div>
         </div>
      </div>
   );
}

export default Navbar;
