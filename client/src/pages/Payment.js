import { useState, useEffect } from 'react';
import NavbarUser from '../components/navbarUser/NavbarUser';
import '../styles/Payment/payment.css';
import { FaPaperclip } from 'react-icons/fa';
import { API } from '../config/api';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
   attachment: yup
      .mixed()
      .required('You need provide a image')
      .test('fileSize', 'the File is too large', (value) => {
         return value && value[0].size <= 200000;
      }),
   accountnumber: yup

      .number()
      .required('You need provide a image')
      .typeError('This field must be a number')
      .positive()
      .integer()
      .required('this field is required'),
   // .positive()
   // .integer()
});
function Payment() {
   //=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*= React Hook Form conf=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
   // const { payment, handleSubmit, errors } = useForm({
   //    validationSchema: schema,
   // });

   // const { register, handleSubmit, errors } = useForm({
   //    validationSchema: schema,
   // });

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      resolver: yupResolver(schema),
   });

   const [preview, setPreview] = useState('');

   const onChange = (e) => {
      if (e.target.type === 'file') {
         let url = URL.createObjectURL(e.target.files[0]);
         setPreview(url);
      }
   };

   const onSubmit = async (data) => {
      console.log(data);
      const formData = new FormData();
      formData.set('attachment', data.attachment[0], data.attachment[0].name);
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
               <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                  <input
                     {...register('accountnumber')}
                     type="text"
                     name="accountnumber"
                     id=""
                     placeholder="Account Number"
                     className="form-design"
                     style={{ height: '5rem' }}
                     // onChange={(e) => {
                     //    onChangeInputPayment(e);
                     // }}
                  />
                  {errors.accountnumber && (
                     <p style={{ fontSize: '2rem', color: 'white' }}>
                        {errors.accountnumber.message}
                     </p>
                  )}

                  <input
                     {...register('attachment')}
                     type="file"
                     name="attachment"
                     id="img"
                     style={{ display: 'none' }}
                     onChange={onChange}
                  />

                  {/* <input {...register('attachment')} /> */}

                  {/* {<p>{errors.attachment?.message}</p>} */}

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
                  {preview && (
                     <div
                        style={{
                           backgroundColor: 'red',
                           height: '35rem',
                           width: '35rem',
                           marginTop: '2rem',
                        }}
                     >
                        <img
                           src={preview}
                           style={{
                              objectFit: 'cover',
                           }}
                           className="image-size-100"
                        />
                     </div>
                  )}
                  {errors.attachment && (
                     <p style={{ fontSize: '2rem', color: 'white' }}>
                        {errors.attachment?.message}
                     </p>
                  )}
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
// =-=-=-=-=-=-=-=
// import { useState, useEffect } from 'react';
// import NavbarUser from '../components/navbarUser/NavbarUser';
// import '../styles/Payment/payment.css';
// import { FaPaperclip } from 'react-icons/fa';
// import { API } from '../config/api';
// import { useHistory } from 'react-router';
// import Swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content';
// import * as Yup from 'yup';
// import { useFormik } from 'formik';
// function Payment() {
//    const history = useHistory();
//    const removeChars = /[0-9]/g;
//    const { handleSubmit, handleChange, values, touched, errors, handleBlur } =
//       useFormik({
//          initialValues: {
//             accountnumber: '',
//             attachment: '',
//          },
//          validationSchema: Yup.object({
//             accountnumber: Yup.string()
//                .matches(removeChars, 'Account Number must be numeric')
//                .min(12, 'This field must be containt 12 numeric character')
//                .max(12, 'This field must be containt  12 numeric character')
//                .required('This field is Required'),
//             attachment: Yup.mixed()
//                .required('You need to provide a file')
//                .test('fileSize', 'The file is too large', (value) => {
//                   return value && value.size <= 2000000;
//                })
//                .test('type', 'We only support jpeg', (value) => {
//                   console.log(value);
//                   return value && value.type === 'image/jpeg';
//                }),
//          }),
//          onSubmit: ({ accountnumber, attachment }) => {
//             alert(accountnumber);
//             // submitAddPayment(accountnumber, attachment);
//          },
//       });

//    //=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*= form Input Music=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
//    // const [formPayment, setFormPayment] = useState({
//    //    accountnumber: '',
//    //    attachment: '',
//    // });

//    //=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=Submit Payment=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
//    const submitAddPayment = async (accountnumber, attachment) => {
//       const formData = new FormData();
//       formData.set('accountnumber', accountnumber);
//       formData.set('attachment', attachment[0], attachment[0].name);
//       try {
//          const config = {
//             headers: {
//                'Content-type': 'multipart/form-data',
//             },
//          };
//          await API.post(`/transaction`, formData, config);
//          // setFormPayment({
//          //    attachment: '',
//          // });
//          history.push('/');
//       } catch (err) {}
//    };
//    return (
//       <div>
//          <NavbarUser />
//          <div className="container__">
//             <div className="title-wrapper">
//                <h1 style={{ color: 'white', fontSize: '4rem' }}>Premium</h1>
//             </div>
//             <div className="title-wrapper-2">
//                <p className="text-1">
//                   Bayar sekarang dan nikmati streaming music yang kekinian dari{' '}
//                   <span style={{ fontWeight: 'bold' }}>
//                      <span style={{ color: '#EE4622' }}>DUMB</span>SOUND
//                   </span>{' '}
//                </p>
//             </div>
//             <div className="payment-code-wrapper">
//                <p className="text-1">
//                   <span style={{ fontWeight: 'bold' }}>
//                      <span style={{ color: '#EE4622' }}>DUMB</span>SOUND :
//                      0981312323
//                   </span>{' '}
//                </p>
//             </div>
//             <div className="form-wrapper">
//                <form onSubmit={handleSubmit}>
//                   {touched.accountnumber && errors.accountnumber ? (
//                      <div style={{ color: 'white', fontSize: '2rem' }}>
//                         {errors.accountnumber}
//                      </div>
//                   ) : null}
//                   <input
//                      type="text"
//                      name="accountnumber"
//                      id=""
//                      placeholder="Account Number"
//                      className="form-design"
//                      style={{ height: '5rem' }}
//                      onChange={handleChange}
//                      onBlur={handleBlur}
//                      value={values.accountnumber}
//                   />

//                   <input
//                      type="file"
//                      name="attachment"
//                      id="img"
//                      style={{ display: 'none' }}
//                      onChange={handleChange(values.attachment)}
//                      onBlur={handleBlur}
//                      // value={values.attachment}
//                   />

//                   <label
//                      className="form-design clicked button-a"
//                      for="img"
//                      style={{
//                         width: '100%',
//                         fontWeight: 'bold',
//                         fontSize: '1.8rem',
//                         backgroundColor: '#161616',
//                         height: '5rem',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'space-between',
//                      }}
//                   >
//                      <div>
//                         {touched.attachment && errors.attachment ? (
//                            <div style={{ color: 'white', fontSize: '2rem' }}>
//                               {errors.attachment.message}
//                            </div>
//                         ) : null}
//                      </div>
//                      <p
//                         style={{
//                            color: '#EE4622',
//                            backgroundColor: '#161616',
//                         }}
//                      >
//                         Attache proof of transfer
//                      </p>
//                      <p
//                         style={{
//                            color: '#EE4622',
//                            fontSize: '3rem',
//                         }}
//                      >
//                         <i>
//                            {' '}
//                            <FaPaperclip />
//                         </i>
//                      </p>
//                   </label>
//                   {/* {preview && (
//                      <div
//                         style={{
//                            backgroundColor: 'red',
//                            height: '35rem',
//                            width: '35rem',
//                            marginTop: '2rem',
//                         }}
//                      >
//                         <img src={preview} className="image-size-100" />
//                      </div>
//                   )} */}
//                   <div className="send-payment">
//                      <button type="submit" className="send-payment-text-button">
//                         <p className="send-payment-text">Send</p>
//                      </button>
//                   </div>
//                </form>
//             </div>
//          </div>
//       </div>
//    );
// }

// export default Payment;

// //=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*= onchange & State Music input controller=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
// // const [preview, setPreview] = useState('');
// // const onChangeInputPayment = (e) => {
// //    const updatePostForm = { ...formPayment };
// //    updatePostForm[e.target.name] =
// //       e.target.type === 'file' ? e.target.files : e.target.value;
// //    setFormPayment(updatePostForm);
// //    if (e.target.type === 'file') {
// //       let url = URL.createObjectURL(e.target.files[0]);
// //       setPreview(url);
// //    }
// // };
// // *
// // *
// // MySwal.fire({
// //    title: <p>Hello World</p>,
// //    footer: 'Copyright 2018',
// //    didOpen: () => {
// //       // `MySwal` is a subclass of `Swal`
// //       //   with all the same instance & static methods
// //       MySwal.clickConfirm();
// //    },
// // }).then(() => {
// //    return MySwal.fire({
// //       title: 'Are you sure?',
// //       text: "You won't be able to revert this!",
// //       icon: 'warning',
// //    });
// // });
// // console.log('form-payment', formPayment.attachment);

//
//
//
//
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//
//
//
//
// import { useState, useEffect } from 'react';
// import NavbarUser from '../components/navbarUser/NavbarUser';
// import '../styles/Payment/payment.css';
// import { FaPaperclip } from 'react-icons/fa';
// import { API } from '../config/api';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';

// const schema = yup.object().shape({
//    attachment: yup
//       .mixed()
//       .required('You need provide a image')
//       .test('fileSize', 'the Fileis too large', (value) => {
//          return value && value[0].size <= 50000;
//       }),
// });
// function Payment() {
//    //=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*= React Hook Form conf=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
//    // const { payment, handleSubmit, errors } = useForm({
//    //    validationSchema: schema,
//    // });

//    // const { register, handleSubmit, errors } = useForm({
//    //    validationSchema: schema,
//    // });

//    const {
//       register,
//       handleSubmit,
//       formState: { errors },
//    } = useForm({
//       resolver: yupResolver(schema),
//    });

//    const onSubmit = (data) => {
//       console.log(data);
//    };
//    return (
//       <div>
//          <NavbarUser />
//          <div className="container__">
//             <div className="title-wrapper">
//                <h1 style={{ color: 'white', fontSize: '4rem' }}>Premium</h1>
//             </div>
//             <div className="title-wrapper-2">
//                <p className="text-1">
//                   Bayar sekarang dan nikmati streaming music yang kekinian dari{' '}
//                   <span style={{ fontWeight: 'bold' }}>
//                      <span style={{ color: '#EE4622' }}>DUMB</span>SOUND
//                   </span>{' '}
//                </p>
//             </div>
//             <div className="payment-code-wrapper">
//                <p className="text-1">
//                   <span style={{ fontWeight: 'bold' }}>
//                      <span style={{ color: '#EE4622' }}>DUMB</span>SOUND :
//                      0981312323
//                   </span>{' '}
//                </p>
//             </div>
//             <div className="form-wrapper">
//                <form onSubmit={handleSubmit(onSubmit)}>
//                   {/* <input
//                      type="text"
//                      name="accountnumber"
//                      id=""
//                      placeholder="Account Number"
//                      className="form-design"
//                      style={{ height: '5rem' }}
//                      onChange={(e) => {
//                         onChangeInputPayment(e);
//                      }}
//                   /> */}

//                   <input
//                      {...register('attachment')}
//                      type="file"
//                      name="attachment"
//                      id="img"
//                      style={{ display: 'none' }}
//                      // onChange={(e) => {
//                      //    onChangeInputPayment(e);
//                      // }}
//                   />

//                   {/* <input {...register('attachment')} /> */}

//                   {errors.attachment && <p>{errors.attachment?.message}</p>}
//                   {/* {<p>{errors.attachment?.message}</p>} */}

//                   <label
//                      className="form-design clicked button-a"
//                      for="img"
//                      style={{
//                         width: '100%',
//                         fontWeight: 'bold',
//                         fontSize: '1.8rem',
//                         backgroundColor: '#161616',
//                         height: '5rem',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'space-between',
//                      }}
//                   >
//                      <p
//                         style={{
//                            color: '#EE4622',
//                            backgroundColor: '#161616',
//                         }}
//                      >
//                         Attache proof of transfer
//                      </p>
//                      <p
//                         style={{
//                            color: '#EE4622',
//                            fontSize: '3rem',
//                         }}
//                      >
//                         <i>
//                            {' '}
//                            <FaPaperclip />
//                         </i>
//                      </p>
//                   </label>

//                   <div className="send-payment">
//                      <button type="submit" className="send-payment-text-button">
//                         <p className="send-payment-text">Send</p>
//                      </button>
//                   </div>
//                </form>
//             </div>
//          </div>
//       </div>
//    );
// }

// export default Payment;
//
//
//
//
//
//
//
//
//
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// import { useState, useEffect } from 'react';
// import NavbarUser from '../components/navbarUser/NavbarUser';
// import '../styles/Payment/payment.css';
// import { FaPaperclip } from 'react-icons/fa';
// import { API } from '../config/api';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';

// const schema = yup.object().shape({
//    attachment: yup
//       .mixed()
//       .required('You need provide a image')
//       .test('fileSize', 'the File is too large', (value) => {
//          return value && value[0].size <= 200000;
//       }),
//    accountnumber: yup

//       .number()
//       .required('You need provide a image')
//       .typeError('This field must be a number')
//       .positive()
//       .integer()
//       .required('this field is required'),
//    // .positive()
//    // .integer()
// });
// function Payment() {
//    //=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*= React Hook Form conf=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
//    // const { payment, handleSubmit, errors } = useForm({
//    //    validationSchema: schema,
//    // });

//    // const { register, handleSubmit, errors } = useForm({
//    //    validationSchema: schema,
//    // });

//    const {
//       register,
//       handleSubmit,
//       formState: { errors },
//    } = useForm({
//       resolver: yupResolver(schema),
//    });

//    const onSubmit = (data) => {
//       console.log(data);
//    };
//    return (
//       <div>
//          <NavbarUser />
//          <div className="container__">
//             <div className="title-wrapper">
//                <h1 style={{ color: 'white', fontSize: '4rem' }}>Premium</h1>
//             </div>
//             <div className="title-wrapper-2">
//                <p className="text-1">
//                   Bayar sekarang dan nikmati streaming music yang kekinian dari{' '}
//                   <span style={{ fontWeight: 'bold' }}>
//                      <span style={{ color: '#EE4622' }}>DUMB</span>SOUND
//                   </span>{' '}
//                </p>
//             </div>
//             <div className="payment-code-wrapper">
//                <p className="text-1">
//                   <span style={{ fontWeight: 'bold' }}>
//                      <span style={{ color: '#EE4622' }}>DUMB</span>SOUND :
//                      0981312323
//                   </span>{' '}
//                </p>
//             </div>
//             <div className="form-wrapper">
//                <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
//                   <input
//                      {...register('accountnumber')}
//                      type="text"
//                      name="accountnumber"
//                      id=""
//                      placeholder="Account Number"
//                      className="form-design"
//                      style={{ height: '5rem' }}
//                      // onChange={(e) => {
//                      //    onChangeInputPayment(e);
//                      // }}
//                   />
//                   {errors.accountnumber && (
//                      <p style={{ fontSize: '2rem', color: 'white' }}>
//                         {errors.accountnumber.message}
//                      </p>
//                   )}

//                   <input
//                      {...register('attachment')}
//                      type="file"
//                      name="attachment"
//                      id="img"
//                      style={{ display: 'none' }}
//                      // onChange={(e) => {
//                      //    onChangeInputPayment(e);
//                      // }}
//                   />

//                   {/* <input {...register('attachment')} /> */}

//                   {/* {<p>{errors.attachment?.message}</p>} */}

//                   <label
//                      className="form-design clicked button-a"
//                      for="img"
//                      style={{
//                         width: '100%',
//                         fontWeight: 'bold',
//                         fontSize: '1.8rem',
//                         backgroundColor: '#161616',
//                         height: '5rem',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'space-between',
//                      }}
//                   >
//                      <p
//                         style={{
//                            color: '#EE4622',
//                            backgroundColor: '#161616',
//                         }}
//                      >
//                         Attache proof of transfer
//                      </p>
//                      <p
//                         style={{
//                            color: '#EE4622',
//                            fontSize: '3rem',
//                         }}
//                      >
//                         <i>
//                            {' '}
//                            <FaPaperclip />
//                         </i>
//                      </p>
//                   </label>
//                   {errors.attachment && (
//                      <p style={{ fontSize: '2rem', color: 'white' }}>
//                         {errors.attachment?.message}
//                      </p>
//                   )}
//                   <div className="send-payment">
//                      <button type="submit" className="send-payment-text-button">
//                         <p className="send-payment-text">Send</p>
//                      </button>
//                   </div>
//                </form>
//             </div>
//          </div>
//       </div>
//    );
// }

// export default Payment;
