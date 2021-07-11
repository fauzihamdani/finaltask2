import NavbarUser from '../components/navbarUser/NavbarUser';
import '../styles/Payment/payment.css';
import { FaPaperclip } from 'react-icons/fa';
function Payment() {
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
               <form>
                  <input
                     type="text"
                     name="year"
                     id=""
                     placeholder="Year"
                     className="form-design"
                     style={{ height: '5rem' }}
                  />

                  <input
                     type="file"
                     name="attache"
                     id="img"
                     style={{ display: 'none' }}
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
