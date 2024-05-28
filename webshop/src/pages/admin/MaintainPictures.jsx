import React, { useEffect, useRef, useState } from 'react'
//REACT_APP_PICTURES_DB_URL
//sama mis categories
//võtmine, lisamine, kustutamine
 
// const newPicture = {url: "", alt: "", header: "", text: ""}
//.push()
 
function MaintainPictures() {
  const [pictures, setPictures] = useState([]);
  const urlRef= useRef();
  const altRef= useRef();
  const headerRef= useRef();
  const textRef= useRef();
  const url = process.env.REACT_APP_PICTURES_DB_URL;
 
 
  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(json => setPictures(json || []));
  }, [url]);
 
  const add = () => {
    const newPicture = {
      "url": urlRef.current.value, 
      "alt": altRef.current.value, 
      "header": headerRef.current.value, 
      "text": textRef.current.value
    };
    pictures.push(newPicture)
    fetch(url, {"method": "PUT", "body": JSON.stringify(pictures)});
    setPictures(pictures.slice());
    //toast?
    urlRef.current.value = "";
    altRef.current.value = "";
    headerRef.current.value = "";
    textRef.current.value = "";
  }
 
  const remove = (index) => {
    pictures.splice(index,1);
    setPictures(pictures.slice());
    fetch(url, {"method": "PUT", "body": JSON.stringify(pictures)});
  }
  return (
    <div>
      <label>Picture url</label><br />
      <input ref={urlRef} type="text" /><br />
      <label>Picture alt text</label><br />
      <input ref={altRef} type="text" /><br />
      <label>Picture header text</label><br />
      <input ref={headerRef} type="text" /><br />
      <label>Picture text</label><br />
      <input ref={textRef} type="text" /><br />
      <button onClick={add}>Add</button><br />
      <hr />
      <table>
        <thead>
          <tr>
            <th>Picture url</th>
            <th>Picture alt text</th>
            <th>Picture header text</th>
            <th>Picture text</th>
          </tr>
        </thead>
        <tbody>
      {pictures.map((picture, index) =>
         <tr key={picture.url}>
          <td>{picture.url}</td>
          <td>{picture.alt}</td>
          <td>{picture.header}</td>
          <td>{picture.text}</td>
          <td><button onClick={() => remove(index)}>x</button></td>
          </tr>
         )}
         </tbody>
      </table>
    </div>
  )
}
 
export default MaintainPictures