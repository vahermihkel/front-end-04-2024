import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material'; // võtan tüki @mui/material kaustast (loogelised sulud)
// import TextField from '@mui/material/TextField'; // võtan terve @mui/material/Textfield kausta

export const ContactUs = () => {
  const form = useRef();
 
  const sendEmail = (e) => {
    // console.log(e)
    e.preventDefault(); 
     // forms tagi submittimine teeb lehele by default refreshi
     // e.preventDefault takistab refreshi tegemist
 
    // emailjs
    //   .sendForm('', '', form.current, {
    //     publicKey: '',
    //   })
    //   .then(
    //     () => {
    //       console.log('SUCCESS!');
    //     },
    //     (error) => {
    //       console.log('FAILED...', error.text);
    //     },
    //   );
  };
 
  return (
    <form ref={form} onSubmit={sendEmail}>
      {/* <label>Name</label><br />
      <input type="text" name="from_name" /><br /> */}
      <br />
      <TextField id="outlined-basic" label="Name" variant="outlined" name="from_name" /> <br /><br />
      <TextField id="outlined-basic" label="Email" variant="outlined" name="from_email" /> <br /><br />
      <TextField id="outlined-basic" label="Message" variant="outlined" name="message" /> <br /><br />
      {/* <label>Email</label><br />
      <input type="email" name="from_email" /><br />
      <label>Message</label><br />
      <textarea name="message" /><br /> */}
      {/* <input label="Outlined" type="submit" value="Send" /> */}
      <Button variant='outlined' type='submit'>Send</Button>
    </form>
  );
};