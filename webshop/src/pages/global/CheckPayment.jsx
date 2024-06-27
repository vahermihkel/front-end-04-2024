import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

// SIIA LEHELE TULEB PEALE MAKSET TAGASI SUUNATA
function CheckPayment() {
  const [searchParams] = useSearchParams();
  const paymentReference = searchParams.get("payment_reference");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(
      "https://igw-demo.every-pay.com/api/v4/payments/" +
        paymentReference +
        "?api_username=92ddcfab96e34a5f",
      {
        headers: {
          Authorization:
            "Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA==",
        },
      }
    )
      .then((res) => res.json())
      .then((json) => {
        switch(json.payment_state) {
          case "settled":
            // tegelikult peaks: OTSIMA TELLIMUSE ANDMEBAASIST ÜLES JA MUUTMA TA MAKSTUKS
            setMessage("Edukalt makstud!");
            return;
          case "failed":
            // tegelikult peaks:  OTSIMA TELLIMUSE ANDMEBAASIST ÜLES JA MUUTMA TA MAKSE FEILINUKS
            setMessage("Makse ei õnnestunud!");
            return
          case "voided":
            // tegelikult peaks:  OTSIMA TELLIMUSE ANDMEBAASIST ÜLES JA MUUTMA TA MAKSE VOIDEDIKS
            setMessage("Makse ei õnnestunud!");
            return;
          case "abandoned":
            // tegelikult peaks: OTSIMA TELLIMUSE ANDMEBAASIST ÜLES JA MUUTMA TA MAKSE ABANDONE-KS
            setMessage("Makse ei õnnestunud!");
            return;
          default:
            setMessage("Tundmatu viga!");
            return;
        }
      });
  }, [paymentReference]);

  return (
    <div>
      <div>{message}</div>
    </div>
    );
}

export default CheckPayment;