import '../styles/index/index.css';
import NavbarUser from '../components/navbarUser/NavbarUser';
import coverSong from '../assets/song cover.png';

function Home() {
   return (
      <div>
         <div className="index-header-wrapper">
            <NavbarUser />
            <div className="title-index-wrapper">
               <p className="title-1">Connect on DumbSound</p>
            </div>

            <div className="title-index-wrapper2">
               <p className="title-2">
                  Discovery, Stream, and share a constantly expanding mix of
                  music
               </p>
               <p className="title-3">
                  from emerging and major artists around the world
               </p>
            </div>
         </div>

         <div className="song-list container__">
            <div className="dumb-sound-tagline">
               <p className="dumb-sound-tagline-text">Dengarkan dan Rasakan</p>
            </div>

            <div className="songs-wrapper">
               <div className="song-item-list clicked button-a">
                  <div className="song-image-cover">
                     <img
                        src={coverSong}
                        alt=""
                        srcset=""
                        className="image-size-100"
                     />
                  </div>
                  <div className="title-year-wrapper">
                     <p className="title-text">Title Here</p>
                     <p className="year-text">2019</p>
                  </div>
                  <div className="artistname-wrapper">
                     <p className="title-text">Artist name here</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Home;
