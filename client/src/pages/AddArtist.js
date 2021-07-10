import Navbar from '../components/navbar/Navbar';
import '../styles/Add Artist/addArtist.css';
function AddArtist() {
   return (
      <div>
         <Navbar />
         <div className="container__ add-artist-wrapper">
            <h1 style={{ color: 'white ' }}>Add Artist</h1>
            <div className="form-wrapper">
               <form autocomplete="off">
                  <input
                     type="text"
                     name="name"
                     id=""
                     placeholder="Name"
                     className="form-design"
                  />

                  <input
                     type="text"
                     name="old"
                     id=""
                     placeholder="Old"
                     className="form-design"
                  />

                  <select
                     name="type"
                     id="type"
                     form="type"
                     className="form-design-select"
                  >
                     <option value="Solo">Solo</option>
                     <option value="Group">Group</option>
                  </select>

                  <input
                     type="text"
                     name="startcareer"
                     id=""
                     placeholder="Start Career"
                     className="form-design"
                  />

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

export default AddArtist;
