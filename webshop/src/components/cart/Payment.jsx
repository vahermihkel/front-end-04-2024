import React from 'react'

function Payment(props) {
  
  const pay = () => {
    // vahetult enne maksmist, paneme tellimuse andmebaasi, maksmata kujul
    // alles siis lähme maksma

    const url = "https://igw-demo.every-pay.com/api/v4/payments/oneoff";
    const paymentBody = {
      "account_name": "EUR3D1",
      "nonce": "1657daa" + new Date() + Math.random() * 99999999,
      "timestamp": new Date(),
      "amount": props.sum,
      "order_reference": Math.random() * 99999999,
      "customer_url": "https://err.ee",
      "api_username": "92ddcfab96e34a5f"
    };
    const paymentHeaders = {
      "Authorization": "Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA==",
      "Content-Type": "application/json"
    }; // authorization

    fetch(url, {method: "POST", body: JSON.stringify(paymentBody), headers: paymentHeaders})
      .then(response => response.json())
      .then(json => window.location.href = json.payment_link)
  }
  
  return (
      <button onClick={pay}>Maksa</button>
  )
}

export default Payment