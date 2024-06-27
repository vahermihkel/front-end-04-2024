import React, { useEffect, useRef, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { ParcelMachine } from '../../models/ParcelMachine';

function ParcelMachines() {
  const [parcelmachines, setParcelmachines] = useState<ParcelMachine[]>([]);
  const [dbParcelmachines, setDbParcelmachines] = useState<ParcelMachine[]>([]);
  const [selectedPM, setSelectedPM] = useState<string>("");
  const pmRef = useRef<HTMLSelectElement>(null);
  const pmSearchRef = useRef<HTMLInputElement>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
 
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
    if (pmRef.current === null || pmSearchRef.current === null) {
      return;
    }

    setSelectedPM(pmRef.current.value);
    pmSearchRef.current.value = "";
    searchFromPMs();
  }

  function searchFromPMs() {
    const pmSearchInput = pmSearchRef.current;
    if (pmSearchInput === null) {
      return;
    }

    const result = dbParcelmachines.filter(pm => 
      pm.NAME.toLowerCase().includes(pmSearchInput.value.toLowerCase())
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