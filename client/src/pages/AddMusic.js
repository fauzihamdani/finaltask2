import { useState, useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import '../styles/Add Artist/addArtist.css';
import '../styles/addMusic/addMusic.css';
import { API } from '../config/api';
import { useHistory } from 'react-router';
function AddMusic() {
   const history = useHistory();
   //=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*= form Input Music=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
   const [formMusics, setFormMusics] = useState({
      title: '',
      thumbnail: '',
      year: '',
      artistId: '',
      attache: '',
      genre: '',
   });
   const { title, thumbnail, year, artistId, attache, genre } = formMusics;
   const [preview, setPreview] = useState('');
   //
   //
   //=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*= onchange & State Music input controller=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
   const onChangeInputMusics = (e) => {
      const updatePostForm = { ...formMusics };
      updatePostForm[e.target.name] =
         e.target.type === 'file' ? e.target.files : e.target.value;
      setFormMusics(updatePostForm);
      // if (e.target.type === 'file') {
      //    let url = URL.createObjectURL(e.target.files[0]);
      //    setPreview(url);
      // }
   };
   // *
   // *
   //=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*= Get Artist=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
   const [artists, setArtists] = useState('');
   const [loading, setLoading] = useState(true);
   const getArtist = async () => {
      const config = {
         headers: {
            'Content-Type': 'application/json',
         },
      };
      const response = await API.get('/artist', config);
      setArtists(response.data.data.artists);
      setLoading(false);
   };
   //=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*==*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
   //
   //
   useEffect(() => {
      getArtist();
   }, []);
   //=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*= submit post=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
   const submitAddMusic = async () => {
      console.log('form-music', formMusics.thumbnail);
      const formData = new FormData();
      formData.set('title', title);
      // formData.set('thumbnail', thumbnail);
      formData.set(
         'thumbnail',
         formMusics.thumbnail[0],
         formMusics.thumbnail[0].name
      );
      // form.thumbnail. , form.thumbnail.name
      formData.set('year', year);
      formData.set('artistId', artistId);
      formData.set(
         'attache',
         formMusics.attache[0],
         formMusics.attache[0].name
      );
      formData.set('genre', genre);
      try {
         const config = {
            headers: {
               'Content-type': 'multipart/form-data',
            },
         };
         const res = await API.post(`/music`, formData, config);
         setFormMusics({
            title: '',
            thumbnail: '',
            year: '',
            artistId: '',
            attache: '',
         });
         history.push('/transactions');
      } catch (err) {}
   };
   return (
      <div>
         <Navbar />
         {loading ? (
            <div>
               <h1>Loading...</h1>
            </div>
         ) : (
            <div className="container__ add-artist-wrapper">
               <h1 style={{ color: 'white ' }}>Add Music</h1>
               <div className="form-wrapper">
                  <form
                     autocomplete="off"
                     onSubmit={(e) => {
                        submitAddMusic();
                        e.preventDefault();
                     }}
                  >
                     <div className="title-thumbnail-wrapper">
                        <input
                           type="text"
                           name="title"
                           id=""
                           placeholder="Title"
                           className="form-design"
                           style={{ width: '85%' }}
                           onChange={(e) => {
                              onChangeInputMusics(e);
                           }}
                        />

                        <input
                           type="file"
                           name="thumbnail"
                           id="img"
                           style={{ display: 'none' }}
                           onChange={(e) => {
                              onChangeInputMusics(e);
                           }}
                        />

                        <label
                           className="form-design clicked button-a"
                           for="img"
                           style={{
                              width: '20rem',
                              fontWeight: 'bold',
                              fontSize: '1.5rem',
                           }}
                        >
                           <p className="edit-profile">Attach Thumbnail</p>
                        </label>
                     </div>
                     {preview && (
                        <div
                           style={{
                              backgroundColor: 'red',
                              height: '35rem',
                              width: '35rem',
                              marginTop: '2rem',
                           }}
                        >
                           <img src={preview} className="image-size-100" />
                        </div>
                     )}

                     <input
                        type="text"
                        name="year"
                        id=""
                        placeholder="Year"
                        className="form-design"
                        onChange={(e) => {
                           onChangeInputMusics(e);
                        }}
                     />

                     <select
                        name="artistId"
                        id="artistId"
                        className="form-design-select"
                        onChange={(e) => {
                           onChangeInputMusics(e);
                        }}
                     >
                        <option value="Singer">Select Artist</option>
                        {artists?.map((artist) => (
                           <option value={artist.id}>{artist.name}</option>
                        ))}
                     </select>

                     <select
                        name="genre"
                        id="genre"
                        className="form-design-select"
                        onChange={(e) => {
                           onChangeInputMusics(e);
                        }}
                     >
                        <option value="Singer">Select Genre</option>

                        <option value="Rock">Rock</option>
                        <option value="Blues">Blues</option>
                        <option value="Pop">Pop</option>
                        <option value="Pop">Others</option>
                     </select>

                     <input
                        type="file"
                        name="attache"
                        id="attache"
                        style={{ display: 'none' }}
                        onChange={(e) => {
                           onChangeInputMusics(e);
                        }}
                     />

                     <label
                        className="form-design clicked button-a"
                        for="attache"
                        style={{
                           width: '20rem',
                           fontWeight: 'bold',
                           fontSize: '1.5rem',
                        }}
                     >
                        <p className="edit-profile">Attache</p>
                     </label>

                     <div className="add-artist-button-wrapper">
                        <div className="null"></div>
                        <button type="submit" className="add-artist-button">
                           <p className="add-artist-button-title">Add Music</p>
                        </button>
                     </div>
                  </form>
               </div>
               {/* <div>
                  <pre style={{ color: 'white', fontSize: '2.5rem' }}>
                     {JSON.stringify(songList, 2, 4)}
                     {JSON.stringify(artists, 2, 4)}
                  </pre>
               </div> */}
            </div>
         )}
      </div>
   );
}

export default AddMusic;
