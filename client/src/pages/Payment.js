import { useState, useEffect } from 'react';
import NavbarUser from '../components/navbarUser/NavbarUser';
import '../styles/Payment/payment.css';
import { FaPaperclip } from 'react-icons/fa';
import { API } from '../config/api';
function Payment() {
   //=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*= form Input Music=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
   const [formPayment, setFormPayment] = useState({
      accountnumber: '',
      attachment: '',
   });
   const { accountnumber, attachment } = formPayment;
   // const [preview, setPreview] = useState('');
   //
   //
   //=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*= onchange & State Music input controller=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
   const onChangeInputPayment = (e) => {
      const updatePostForm = { ...formPayment };
      updatePostForm[e.target.name] =
         e.target.type === 'file' ? e.target.files : e.target.value;
      setFormPayment(updatePostForm);
      // if (e.target.type === 'file') {
      //    let url = URL.createObjectURL(e.target.files[0]);
      //    setPreview(url);
      // }
   };
   // *
   // *
   //=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=Submit Payment=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
   const submitAddPayment = async () => {
      console.log('form-payment', formPayment.attachment);
      const formData = new FormData();
      // formData.set('thumbnail', thumbnail);
      formData.set(
         'attachment',
         formPayment.attachment[0],
         formPayment.attachment[0].name
      );
      try {
         const config = {
            headers: {
               'Content-type': 'multipart/form-data',
            },
         };
         await API.post(`/transaction`, formData, config);
         // setFormPayment({
         //    attachment: '',
         // });
      } catch (err) {}
   };
   return (
      <div>
         <NavbarUser />
         <div className="container__">
            <div className="title-wrapper">
               <h1 style={{ color: 'white', fontSize: '4rem' }}>Premium</h1>
            </div>
            <div className="title-wrapper-2">
               <p className="text-1">
                  Bayar sekarang dan nikmati streaming music yang kekinian dari{' '}
                  <span style={{ fontWeight: 'bold' }}>
                     <span style={{ color: '#EE4622' }}>DUMB</span>SOUND
                  </span>{' '}
               </p>
            </div>
            <div className="payment-code-wrapper">
               <p className="text-1">
                  <span style={{ fontWeight: 'bold' }}>
                     <span style={{ color: '#EE4622' }}>DUMB</span>SOUND :
                     0981312323
                  </span>{' '}
               </p>
            </div>
            <div className="form-wrapper">
               <form
                  onSubmit={(e) => {
                     submitAddPayment();
                     e.preventDefault();
                  }}
               >
                  <input
                     type="text"
                     name="accountnumber"
                     id=""
                     placeholder="Account Number"
                     className="form-design"
                     style={{ height: '5rem' }}
                     onChange={(e) => {
                        onChangeInputPayment(e);
                     }}
                  />

                  <input
                     type="file"
                     name="attachment"
                     id="img"
                     style={{ display: 'none' }}
                     onChange={(e) => {
                        onChangeInputPayment(e);
                     }}
                  />

                  <label
                     className="form-design clicked button-a"
                     for="img"
                     style={{
                        width: '100%',
                        fontWeight: 'bold',
                        fontSize: '1.8rem',
                        backgroundColor: '#161616',
                        height: '5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                     }}
                  >
                     <p
                        style={{
                           color: '#EE4622',
                           backgroundColor: '#161616',
                        }}
                     >
                        Attache proof of transfer
                     </p>
                     <p
                        style={{
                           color: '#EE4622',
                           fontSize: '3rem',
                        }}
                     >
                        <i>
                           {' '}
                           <FaPaperclip />
                        </i>
                     </p>
                  </label>
                  <div className="send-payment">
                     <button type="submit" className="send-payment-text-button">
                        <p className="send-payment-text">Send</p>
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
}

export default Payment;
