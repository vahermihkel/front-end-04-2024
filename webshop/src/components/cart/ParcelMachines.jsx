import React, { useEffect, useRef, useState } from 'react'
import { Spinner } from 'react-bootstrap';

function ParcelMachines() {
  const [parcelmachines, setParcelmachines] = useState([]);
  const [dbParcelmachines, setDbParcelmachines] = useState([]);
  const [selectedPM, setSelectedPM] = useState("");
  const pmRef = useRef();
  const pmSearchRef = useRef();
  const [isLoading, setLoading] = useState(true);
 
  // uef --> kohe lehele tulles tehakse API päring
  useEffect(() => {
    fetch('https://www.omniva.ee/locations.json')
      .then(response => response.json())
      .then(json => {
        setParcelmachines(json);
        setDbParcelmachines(json);
        setLoading(false);
      })
  }, []);

  function selectPM() {
    setSelectedPM(pmRef.current.value);
    pmSearchRef.current.value = "";
    searchFromPMs();
  }

  function searchFromPMs() {
    const result = dbParcelmachines.filter(pm => 
      pm.NAME.toLowerCase().includes(pmSearchRef.current.value.toLowerCase())
    );
    setParcelmachines(result);
  }

  function deleteSelected() {
    setSelectedPM("");
  }

  if (isLoading === true) {
    return <Spinner />
  }

  return (
    <div>
        {selectedPM === "" &&
        <React.Fragment>
          <input 
            placeholder='Search parcelmachines' 
            onChange={searchFromPMs} 
            ref={pmSearchRef} 
            type="text" />
          <select
            onChange={selectPM}
            ref={pmRef}
          >
            <option>Vali pakiautomaat</option>
            {parcelmachines
              .filter(pm => pm.A0_NAME === "EE")
              .map(pm => <option key={pm.NAME}>{pm.NAME}</option>)}
          </select>
        </React.Fragment>
        }
        {selectedPM !== "" && 
          <div>
            Valitud pakiautomaat: {selectedPM} 
            <button onClick={deleteSelected}>x</button>
          </div>
        }
    </div>
  )
}

export default ParcelMachines