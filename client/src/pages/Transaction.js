import { useState, useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import '../styles/Transaction/transaction.css';
import { Table } from 'react-bootstrap';
import { VscTriangleDown } from 'react-icons/vsc';
import { API } from '../config/api';

function Transaction() {
   //=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*= Get transaction=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
   const [transactions, setTransactions] = useState('');
   const [loading, setLoading] = useState(true);
   const getTransactions = async () => {
      const config = {
         headers: {
            'Content-Type': 'application/json',
         },
      };
      const response = await API.get('/transactions', config);
      setTransactions(response.data.data.transactions);
      setLoading(false);
   };
   //=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*==*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
   useEffect(() => {
      getTransactions();
   }, []);
   //=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*= update transaction=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
   const updateTransactions = async (idTransaction, dataUpdate) => {
      const config = {
         headers: {
            'Content-Type': 'application/json',
         },
      };
      const body = JSON.stringify({ payment_status: dataUpdate });
      const response = await API.patch(
         `/transaction/${idTransaction}`,
         body,
         config
      );
      getTransactions();
      setLoading(false);
   };
   return (
      <div>
         <Navbar />
         <div className="container__">
            <div className="transaction-title-wrapper">
               <h1 style={{ color: 'white', fontSize: '4rem' }}>
                  Incoming Transaction
               </h1>
            </div>
            <div className="transaction-table-wrapper">
               <Table striped bordered hover variant="dark">
                  <thead>
                     <tr>
                        <th
                           style={{
                              width: '4%',
                              height: '5rem',
                              textAlign: 'center',
                              verticalAlign: 'middle',
                              fontSize: '1.5rem',
                              color: '#EE4622',
                           }}
                        >
                           No
                        </th>
                        <th
                           style={{
                              width: '10%',
                              height: '5rem',
                              textAlign: 'center',
                              verticalAlign: 'middle',
                              fontSize: '1.5rem',
                              color: '#EE4622',
                           }}
                        >
                           Users
                        </th>
                        <th
                           style={{
                              width: '10%',
                              height: '5rem',
                              textAlign: 'center',
                              verticalAlign: 'middle',
                              fontSize: '1.5rem',
                              color: '#EE4622',
                           }}
                        >
                           Bukti Transfer
                        </th>
                        <th
                           style={{
                              width: '10%',
                              height: '5rem',
                              textAlign: 'center',
                              verticalAlign: 'middle',
                              fontSize: '1.5rem',
                              color: '#EE4622',
                           }}
                        >
                           Remaining Active
                        </th>
                        <th
                           style={{
                              width: '10%',
                              height: '5rem',
                              textAlign: 'center',
                              verticalAlign: 'middle',
                              fontSize: '1.5rem',
                              color: '#EE4622',
                           }}
                        >
                           Status User
                        </th>
                        <th
                           style={{
                              width: '10%',
                              height: '5rem',
                              textAlign: 'center',
                              verticalAlign: 'middle',
                              fontSize: '1.5rem',
                              color: '#EE4622',
                           }}
                        >
                           Status Payment
                        </th>
                        <th
                           style={{
                              width: '10%',
                              height: '5rem',
                              textAlign: 'center',
                              verticalAlign: 'middle',
                              fontSize: '1.5rem',
                              color: '#EE4622',
                           }}
                        >
                           Action
                        </th>
                     </tr>
                  </thead>
                  <tbody>
                     {/* <tr>
                        <td
                           style={{
                              width: '4%',
                              height: '5rem',
                              textAlign: 'center',
                              verticalAlign: 'middle',
                              fontSize: '1.5rem',
                           }}
                        >
                           1
                        </td>
                        <td
                           style={{
                              width: '10%',
                              height: '5rem',
                              textAlign: 'center',
                              verticalAlign: 'middle',
                              fontSize: '1.5rem',
                           }}
                        >
                           Mark
                        </td>
                        <td
                           style={{
                              width: '10%',
                              height: '5rem',
                              textAlign: 'center',
                              verticalAlign: 'middle',
                              fontSize: '1.5rem',
                           }}
                        >
                           Bca.jpg
                        </td>
                        <td
                           style={{
                              width: '10%',
                              height: '5rem',
                              textAlign: 'center',
                              verticalAlign: 'middle',
                              fontSize: '1.5rem',
                           }}
                        >
                           26 / Hari
                        </td>
                        <td
                           style={{
                              width: '10%',
                              height: '5rem',
                              textAlign: 'center',
                              verticalAlign: 'middle',
                              fontSize: '1.5rem',
                              color: '#0ACF83',
                           }}
                        >
                           Active
                        </td>
                        <td
                           style={{
                              width: '10%',
                              height: '5rem',
                              textAlign: 'center',
                              verticalAlign: 'middle',
                              fontSize: '1.5rem',
                              color: '#0ACF83',
                           }}
                        >
                           Approve
                        </td>
                        <td
                           className="clicked"
                           style={{
                              width: '10%',
                              height: '5rem',
                              textAlign: 'center',
                              verticalAlign: 'middle',
                              fontSize: '3rem',
                              color: '#1C9CD2',
                           }}
                        >
                           <Dropdown bsPrefix="dropdown-style">
                              <Dropdown.Toggle
                                 bsPrefix="dropdown-style"
                                 id="dropdown-basic"
                              >
                                 <i
                                    style={{
                                       fontSize: '3rem',
                                       color: '#1C9CD2',
                                    }}
                                 >
                                    <VscTriangleDown />
                                 </i>
                              </Dropdown.Toggle>
                              <Dropdown.Menu bsPrefix="background-dropdown-item">
                                 <Dropdown.Item
                                    href="#/action-1"
                                    style={{
                                       color: '#0ACF83',
                                       fontSize: '2rem',
                                    }}
                                 >
                                    Approved
                                 </Dropdown.Item>
                                 <Dropdown.Item
                                    href="#/action-2"
                                    style={{
                                       color: '#FF0000',
                                       fontSize: '2rem',
                                    }}
                                 >
                                    Cancel
                                 </Dropdown.Item>
                              </Dropdown.Menu>
                           </Dropdown>
                        </td>
                     </tr> */}
                     {loading ? (
                        <div>
                           <h1>Loading....</h1>
                        </div>
                     ) : (
                        transactions?.map((transaction) => (
                           <tr>
                              <td
                                 style={{
                                    width: '4%',
                                    height: '5rem',
                                    textAlign: 'center',
                                    verticalAlign: 'middle',
                                    fontSize: '1.5rem',
                                 }}
                              >
                                 1
                              </td>
                              <td
                                 style={{
                                    width: '10%',
                                    height: '5rem',
                                    textAlign: 'center',
                                    verticalAlign: 'middle',
                                    fontSize: '1.5rem',
                                 }}
                              >
                                 {transaction.user.fullname}
                              </td>
                              <td
                                 style={{
                                    width: '10%',
                                    height: '5rem',
                                    textAlign: 'center',
                                    verticalAlign: 'middle',
                                    fontSize: '1.5rem',
                                 }}
                              >
                                 {transaction.attachment}
                              </td>
                              <td
                                 style={{
                                    width: '10%',
                                    height: '5rem',
                                    textAlign: 'center',
                                    verticalAlign: 'middle',
                                    fontSize: '1.5rem',
                                 }}
                              >
                                 {transaction.daysRemaining} / Hari
                              </td>
                              <td
                                 style={{
                                    width: '10%',
                                    height: '5rem',
                                    textAlign: 'center',
                                    verticalAlign: 'middle',
                                    fontSize: '1.5rem',
                                    color: '#0ACF83',
                                 }}
                              >
                                 {transaction.user_status}
                              </td>
                              <td
                                 style={{
                                    width: '10%',
                                    height: '5rem',
                                    textAlign: 'center',
                                    verticalAlign: 'middle',
                                    fontSize: '1.5rem',
                                    color: '#0ACF83',
                                 }}
                              >
                                 {transaction.payment_status}
                              </td>
                              <td
                                 className="clicked"
                                 style={{
                                    width: '10%',
                                    height: '5rem',
                                    textAlign: 'center',
                                    verticalAlign: 'middle',
                                    fontSize: '3rem',
                                    color: '#1C9CD2',
                                 }}
                              >
                                 <Dropdown bsPrefix="dropdown-style">
                                    <Dropdown.Toggle
                                       bsPrefix="dropdown-style"
                                       id="dropdown-basic"
                                    >
                                       <i
                                          style={{
                                             fontSize: '3rem',
                                             color: '#1C9CD2',
                                          }}
                                       >
                                          <VscTriangleDown />
                                       </i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu bsPrefix="background-dropdown-item">
                                       <div
                                          onClick={() => {
                                             updateTransactions(
                                                transaction.id,
                                                'Approved'
                                             );
                                          }}
                                       >
                                          <Dropdown.Item
                                             href="#/action-1"
                                             style={{
                                                color: '#0ACF83',
                                                fontSize: '2rem',
                                             }}
                                          >
                                             Approved
                                          </Dropdown.Item>
                                       </div>
                                       <div
                                          onClick={() => {
                                             updateTransactions(
                                                transaction.id,
                                                'Cancel'
                                             );
                                          }}
                                       >
                                          <Dropdown.Item
                                             href="#/action-2"
                                             style={{
                                                color: '#FF0000',
                                                fontSize: '2rem',
                                             }}
                                          >
                                             Cancel
                                          </Dropdown.Item>
                                       </div>
                                    </Dropdown.Menu>
                                 </Dropdown>
                              </td>
                           </tr>
                        ))
                     )}
                  </tbody>
               </Table>
            </div>
            {/* <div>
               <pre style={{ color: 'white', fontSize: '2.5rem' }}>
                  {JSON.stringify(songList, 2, 4)}
                  {JSON.stringify(transactions, 2, 4)}
               </pre>
            </div> */}
         </div>
      </div>
   );
}

export default Transaction;
