import { useState, useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import '../styles/Add Artist/addArtist.css';
import { API, setAuthToken } from '../config/api';
import { useHistory } from 'react-router';
function AddArtist() {
   const history = useHistory();
   //=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*= onchange & State Artist input controller=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
   const [formArtist, setFormArtist] = useState({
      name: '',
      old: '',
      type: '',
      startcareer: '',
   });

   const onChangeInputArtist = (e) => {
      const updateForm = { ...formArtist };
      updateForm[e.target.name] = e.target.value;
      setFormArtist(updateForm);
   };
   const { name, old, type, startcareer } = formArtist;

   const submitAddArtist = async () => {
      const config = {
         headers: {
            'Content-Type': 'application/json',
         },
      };
      const body = JSON.stringify({
         name,
         old,
         type,
         startcareer,
      });
      const postArtist = await API.post('artist', body, config);

      setFormArtist({ name: '', old: '', type: '', startcareer: '' });
      history.push('/transactions');
   };

   return (
      <div>
         <Navbar />
         <div className="container__ add-artist-wrapper">
            <h1 style={{ color: 'white ' }}>Add Artist</h1>
            <div className="form-wrapper">
               <form
                  autocomplete="off"
                  onSubmit={(e) => {
                     submitAddArtist();
                     e.preventDefault();
                  }}
               >
                  <input
                     type="text"
                     name="name"
                     id=""
                     placeholder="Name"
                     className="form-design"
                     value={name}
                     onChange={(e) => {
                        onChangeInputArtist(e);
                     }}
                  />

                  <input
                     type="text"
                     name="old"
                     id=""
                     placeholder="Old"
                     className="form-design"
                     value={old}
                     onChange={(e) => {
                        onChangeInputArtist(e);
                     }}
                  />

                  <select
                     name="type"
                     id="type"
                     className="form-design-select"
                     value={type}
                     onChange={(e) => {
                        onChangeInputArtist(e);
                     }}
                  >
                     <option value="select type">Select Type</option>
                     <option value="Solo">Solo</option>
                     <option value="Group">Group</option>
                     <option value="As a Garbage">As a Garbage</option>
                  </select>

                  <input
                     type="text"
                     name="startcareer"
                     id=""
                     placeholder="Start Career"
                     className="form-design"
                     value={startcareer}
                     onChange={(e) => {
                        onChangeInputArtist(e);
                     }}
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
