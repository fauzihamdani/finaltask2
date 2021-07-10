import Navbar from '../components/navbar/Navbar';
import '../styles/Add Artist/addArtist.css';
import '../styles/addMusic/addMusic.css';

function AddMusic() {
   return (
      <div>
         <Navbar />
         <div className="container__ add-artist-wrapper">
            <h1 style={{ color: 'white ' }}>Add Music</h1>
            <div className="form-wrapper">
               <form autocomplete="off">
                  <div className="title-thumbnail-wrapper">
                     <input
                        type="text"
                        name="title"
                        id=""
                        placeholder="Title"
                        className="form-design"
                        style={{ width: '85%' }}
                     />

                     <input
                        type="file"
                        name="thumbnail"
                        id="img"
                        style={{ display: 'none' }}
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

                  <input
                     type="text"
                     name="year"
                     id=""
                     placeholder="Year"
                     className="form-design"
                  />

                  <select
                     name="type"
                     id="type"
                     form="type"
                     className="form-design-select"
                  >
                     <option value="Singer">Singer</option>
                     <option value="Group">Group</option>
                  </select>

                  <input
                     type="file"
                     name="thumbnail"
                     id="img"
                     style={{ display: 'none' }}
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
                     <p className="edit-profile">Attache</p>
                  </label>

                  <div className="add-artist-button-wrapper">
                     <div className="null"></div>
                     <button type="submit" className="add-artist-button">
                        <p className="add-artist-button-title">Add Artist</p>
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
}

export default AddMusic;
