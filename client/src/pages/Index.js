import { useState, useEffect, useContext, createRef } from 'react';
import '../styles/index/index.css';
import NavbarUser from '../components/navbarUser/NavbarUser';
import coverSong from '../assets/song cover.png';
import AuthContext from '../contexts/auth/authContext';
import { useHistory } from 'react-router';
import { API, setAuthToken } from '../config/api';
import MusicPlayer from '../components/musicPlayer/MusicPlayer';

function Index() {
   const history = useHistory();
   const [songs, setSongs] = useState(null);
   const [songList, setSongList] = useState(null);
   const [loading, setLoading] = useState(true);
   const [mid, setMid] = useState();
   const [visibleMusic, setVisibleMusic] = useState(false);
   const [dataTransaction, setDataTransaction] = useState(false);
   const musicRef = createRef();
   const path = 'http://localhost:5000/uploads/';

   const authContext = useContext(AuthContext);
   const { isLogin, logout, userData, loadUser, isAdmin } = authContext;

   //  Music Player onClick =-=-=-=-=-=-=-=--=-=-=-=-=-=-=
   const onClickMusic = (mid) => {
      if (visibleMusic) {
         setMid(mid);
         setVisibleMusic(false);
         setTimeout(() => setVisibleMusic(true), 500);
      } else {
         setVisibleMusic(true);
      }
   };
   //  =-=-=-=-=-=-=-=--=-=-=-=-=-=-=--=-=-=-=-=-=-=--=-=-=
   const getSongs = async () => {
      const config = {
         headers: {
            'Content-Type': 'application/json',
         },
      };
      const response = await API.get('/musics', config);
      setSongs(response.data.data.music);
      const list = response?.data?.data?.music?.map((musicItem) => ({
         name: musicItem.title,
         singer: musicItem.artist.name,
         cover: `http://localhost:5000/uploads/${musicItem.thumbnail}`,
         musicSrc: path + musicItem.attache,
      }));
      setSongList(list);
   };
   //  Get Transaction =-=-=-=-=-=-=-=--=-=-=-=-=-=-=
   const [getTransactionLoading, setGetTransactionLoading] = useState(true);
   const getTransactions = async () => {
      const config = {
         headers: {
            'Content-Type': 'application/json',
         },
      };
      const response = await API.get(
         `/transactions-by-id/${userData?.id}`,
         config
      );
      setDataTransaction(response?.data?.data?.transactions);
      setGetTransactionLoading(true);
   };
   //  =-=-=-=-=-=-=-=--=-=-=-=-=-=-=--=-=-=-=-=-=-=--=-=-=
   const checkIsLogin = () => {
      loadUser();
      if (isLogin === false) {
         history.push('/');
      } else if (isLogin === true) {
         if (userData && userData?.isAdmin === false) {
            history.push('/home');
         } else if (userData && userData?.isAdmin === true) {
            history.push('/transactions');
         }
      }
   };

   useEffect(() => {
      checkIsLogin();
      getSongs();
      getTransactions();
      setLoading(false);
   }, [isLogin, isAdmin]);

   // useEffect(() => {

   // }, []);

   if (localStorage.token) {
      setAuthToken(localStorage.token);
   }
   return loading ? (
      <div>Loading ...</div>
   ) : (
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
               {isLogin ? (
                  dataTransaction?.user_status !== 'Active' ? (
                     // getTransactionLoading ? (<div>Loading ....</div>) : ()
                     songs?.slice(0, 2).map((song, index) => (
                        <div
                           className="song-item-list clicked button-a"
                           key={index}
                           onClick={() => onClickMusic(song.id)}
                        >
                           <div className="song-image-cover">
                              <img
                                 src={`http://localhost:5000/uploads/${song.thumbnail}`}
                                 alt=""
                                 srcset=""
                                 className="image-size-100"
                              />
                           </div>
                           <div className="title-year-wrapper">
                              <p className="title-text">{song.title}</p>
                              <p className="year-text">{song.year}</p>
                           </div>
                           <div className="artistname-wrapper">
                              <p className="title-text">{song.artist.name}</p>
                           </div>
                        </div>
                     ))
                  ) : (
                     songs?.map((song, index) => (
                        <div
                           className="song-item-list clicked button-a"
                           key={index}
                           onClick={() => onClickMusic(song.id)}
                        >
                           <div className="song-image-cover">
                              <img
                                 src={`http://localhost:5000/uploads/${song.thumbnail}`}
                                 alt=""
                                 srcset=""
                                 className="image-size-100"
                              />
                           </div>
                           <div className="title-year-wrapper">
                              <p className="title-text">{song.title}</p>
                              <p className="year-text">{song.year}</p>
                           </div>
                           <div className="artistname-wrapper">
                              <p className="title-text">{song.artist.name}</p>
                           </div>
                        </div>
                     ))
                  )
               ) : (
                  <div style={{ color: 'white', fontSize: '2rem' }}>
                     Login or Register to enjoy our Songs
                  </div>
               )}
            </div>
         </div>
         {/* <div>
            <pre style={{ color: 'white', fontSize: '2.5rem' }}>
               {JSON.stringify(songList, 2, 4)}
               {JSON.stringify(songs, 2, 4)}
            </pre>
         </div> */}
         <MusicPlayer
            visibleMusic={visibleMusic}
            setVisibleMusic={setVisibleMusic}
            audioLists={songList}
            options={{
               playIndex: mid,
               showDownload: false,
               mode: 'full',
               showThemeSwitch: false,
            }}
         />
      </div>
   );
}

export default Index;
