import Navbar from '../components/navbar/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import '../styles/Transaction/transaction.css';
import { Table } from 'react-bootstrap';
import { VscTriangleDown } from 'react-icons/vsc';

function Transaction() {
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
                     </tr>
                  </tbody>
               </Table>
            </div>
         </div>
      </div>
   );
}

export default Transaction;
