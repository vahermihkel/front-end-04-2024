import React, { useRef, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { ToastContainer, toast as toastify } from 'react-toastify';

function Seaded() {
  const aadressRef = useRef();
  const emailRef = useRef();
  const telefonRef = useRef();

  const [aadress, muudaAadress] = useState(localStorage.getItem("aadress") || "Aadressi pole veel sisestatud");
  const [email, muudaEmail] = useState(localStorage.getItem("email") ||"Emaili pole veel sisestatud");
  const [telefon, muudaTelefon] = useState(localStorage.getItem("telefon") || "Telefoni pole veel sisestatud");

  function lisaAadress() {
    if (aadressRef.current.value === "") {
      toast.error('Aadress on jäänud sisestamata!');
      return; // lõpetame funktsiooni
    }
    if (aadressRef.current.value.length < 5) {
      toast.error('Aadress on liiga lühike!');
      return; // lõpetame funktsiooni 0123
    }                             //  tammsaare 123
    if (aadressRef.current.value.toLowerCase()[0] === aadressRef.current.value[0]) {
      toast.error('Aadress ei alga suure tähega!');
      return; // lõpetame funktsiooni
    }
    muudaAadress(aadressRef.current.value);
    toastify.success('Aadress sisestatud!');
    localStorage.setItem("aadress", aadressRef.current.value);
    aadressRef.current.value = ""; // <----- kõige all
  }

  function lisaEmail() {
    if (emailRef.current.value === "") {
      toast.error('Email on jäänud sisestamata!');
      return; 
    }
    if (emailRef.current.value.length < 5) {
      toast.error('Email on liiga lühike!');
      return; 
    }                             
    if (emailRef.current.value.includes("@") === false) {
      toast.error('E-mail ei ole korrektne!');
      return;
    }
    muudaEmail(emailRef.current.value);
    toastify.success('Email sisestatud!');
    localStorage.setItem("email", emailRef.current.value);
    emailRef.current.value = "";
  }

  function lisaTelefon() {
    if (telefonRef.current.value === "") {
      toast.error('Telefon on jäänud sisestamata!');
      return; 
    }
    if (telefonRef.current.value.length < 11) { // +3725512345
      toast.error('Telefon on liiga lühike!');
      return; 
    }                             
    if (telefonRef.current.value.startsWith("+372") === false) {
      toast.error('Telefonil ei ole Eesti suunakood!');
      return;
    }
    if (isNaN(Number(telefonRef.current.value))) {
      toast.error('Tähti ei saa telefonumbrisse sisestada!');
      return;
    }
    muudaTelefon(telefonRef.current.value);
    toastify.success('Telefon sisestatud!');
    localStorage.setItem("telefon", telefonRef.current.value);
    telefonRef.current.value = "";
  }

  return (
    <div>

      <label>Aadress</label>
      <input ref={aadressRef} type="text" />
      <button onClick={lisaAadress}>Sisesta</button>
      <br />

      <label>Email</label>
      <input ref={emailRef} type="text" />
      <button onClick={lisaEmail}>Sisesta</button>
      <br />

      <label>Telefon</label>
      <input ref={telefonRef} type="text" />
      <button onClick={lisaTelefon}>Sisesta</button>
      <br />

      <div>Sisestatud aadress: {aadress}</div>
      <div>Sisestatud email: {email}</div>
      <div>Sisestatud telefon: {telefon}</div>
      
      {/* react-hot-toast */}
      <Toaster />

      {/* toastify */}
      <ToastContainer
          position="bottom-right"
          autoClose={4000}
          theme="dark"
        />

    </div>
  )
}

export default Seaded