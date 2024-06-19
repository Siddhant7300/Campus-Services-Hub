import React, { useState, useEffect } from 'react';
import "./Bike.scss";
import { USERID, getItem } from '../../utils/localStorageManager';
import { axiosClient } from '../../utils/axiosClient';

const Bike = () => {
    const [startDate, setStartDate] = useState(new Date().toISOString().slice(0, 10));
    const [numDays, setNumDays] = useState(1);
    const [bikeType, setBikeType] = useState('Non-geared'); 
    const [totalCost, setTotalCost] = useState(150); 
    const [bikeRates, setBikeRates] = useState([]); 

    async function getBikeRates(){
      const response = await axiosClient.get("/main/bike");
      setBikeRates(response.result);
      // console.log(response.result);
    }

    useEffect(()=>{
      getBikeRates()
    }, [])
  
    // const bikeRates = {
    //     'Non-geared': 150,
    //     'Non-geared (Disc Brake)': 180,
    //     'Geared (Disc Brake)': 200,
    //     'Mountain Bike': 250,
    // };

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'startDate') {
            setStartDate(value);
        } else if (name === 'numDays') {
            setNumDays(parseInt(value));
        } else if (name === 'bikeType') { // Handle bike type change
            setBikeType(value);
            calculateTotalCost(); // Recalculate total cost on bike type change
        }
    };

    const calculateTotalCost = () => {
        const rate = bikeRates[bikeType] || 150; // Handle non-existent bike types
        setTotalCost(rate * numDays);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userid = getItem(USERID);
        const bike = bikeRates.find((bike)=>(bike.bikeid == bikeType))
        const type = bike.type;
        const bikeid = bikeType;
        const response = await axiosClient.post("/main/rent", {userid, startDate, numDays, bikeType:type,totalCost, bikeid})
        alert("Request submitted successful : " + bikeid)
        // console.log({userid, startDate, numDays, bikeType,totalCost, bikeid}); // Include bikeType in submission
    };

    useEffect(() => {
        calculateTotalCost(); // Calculate initial cost on component mount
    }, [bikeType, numDays]); // Recalculate on bikeType or numDays change

    return (
        <div>
            <form onSubmit={handleSubmit} className="Bike-Form">
                <label htmlFor="startDate">Start Date:</label>
                <input type="date" id="startDate" name="startDate" value={startDate} onChange={handleChange} required />
                <label htmlFor="numDays">Number of Days:</label>
                <input type="number" id="numDays" name="numDays" value={numDays} min="1" onChange={handleChange} required />
                <label htmlFor="bikeType">Bike Type:</label>
                <select id="bikeType" name="bikeType" value={bikeType} onChange={handleChange} className='bike-select'>
                    {bikeRates.map((bike) => (
                        <option key={bike.bikeid} value={bike.bikeid}>
                            {bike.type}
                        </option>
                    ))}
                </select>
                <label htmlFor="totalCost">Total Cost:</label>
                <input type="number" id="totalCost" name="totalCost" value={totalCost} readOnly /> {/* Display total cost as read-only */}
                <button type="submit" className='rentBtn'>Rent</button>
            </form>
        </div>
    );
};

export default Bike;