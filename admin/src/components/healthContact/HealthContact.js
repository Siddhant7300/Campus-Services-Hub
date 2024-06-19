import React, { useEffect, useState } from 'react';
import './HealthContact.scss';
import { axiosClient } from '../../utils/axiosClient';

const HealthContact = () => {
    
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    healthConcerns: '',
    additionalInfo: '',
    counselor: '',
    date: ''
  });

  const [counsellor, setCounsellor] = useState(null);

  async function fetchCoData(){
    const response = await axiosClient.get('/main/counsellor');
    // console.log(response.result);
    setCounsellor(response.result);
  }

  useEffect(()=>{
    fetchCoData();
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    const response = await axiosClient.post("/main/health", formData);
    // console.log(response);
    alert('We have successfully allocated counsellor to you');

    setFormData({
      name: '',
      age: '',
      gender: '',
      healthConcerns: '',
      additionalInfo: '',
      counselor: '',
      date: ''
    });
  };

  return (
    <div className="HealthCounselingForm">
      <h2>Health Counseling Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Gender:
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Health Concerns:
          <textarea
            name="healthConcerns"
            value={formData.healthConcerns}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Additional Information:
          <textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Counselor:
          <select
            name="counselor"
            value={formData.counselor}
            onChange={handleChange}
            required
          >
              <option value="">Select Counselor</option>

            {counsellor && counsellor.map((obj)=>{
                return <option value={obj._id}>{obj.name} ({obj.specialization})</option>
                })}
          </select>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default HealthContact;
