import './ZipLookUp.css';

import React, { useState, useEffect } from 'react';

function ZipLookUp() {

    const [zip, setZip] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [allZipCodes, setAllZipCodes] = useState([]);
    const [lookupHappened, setLookupHappened] = useState(false);

    useEffect(() => {
        fetch('./zipCodesUSA.json')
            .then(response => response.json())
            .then(result => {
                const zipCodes = result.map(item => {
                    return item;
                });
                setAllZipCodes(zipCodes);
            });
    }, []);

    const handleZipChange = (a) => {
        let val = a.replace(/[^\d]/, '');
        if (val.length < 6) {
            setZip(val);
        }
        if (val.length < 5 && lookupHappened) {
            setState('');
            setCity('');
            setLookupHappened(false);
        }
        if (val.length === 5) {
            const entry = allZipCodes.filter(item => {
                return item['zip'].toLowerCase().includes(val.toLowerCase())
            });
            if (entry.length === 0) {
                setState('No entry found');
                setCity('No entry found');
                setLookupHappened(true);
                // setTimeout(() => { // clear the fields in 2 seconds after showing 'No entry found'
                //     setState('');
                //     setCity('');
                // }, 2000);
            } else if (entry.length === 1) {
                setState(entry[0]['state_name']);
                setCity(entry[0]['city']);
                setLookupHappened(true);
            } else {
                setState('More than one match');
                setCity('More than one match');
                setLookupHappened(true);
            }
        }
    };

    return (
        <div className="zip-box">
            <ol>
                <li>Zip length limit = 5 digits</li>
                <li>Only digits are allowed for entering</li>
                <li>If the Zip changes after lookup - clear the state and city fields</li>
            </ol>
            <input type="text" placeholder="Zip" value={zip} onChange={(e) => handleZipChange(e.target.value)} />
            <input type="text" placeholder="State" value={state} onChange={(e) => setState(e.target.value)} />
            <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
        </div>
    );
}

export default ZipLookUp;
