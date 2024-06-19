import React, { useState, useEffect } from 'react';
import './Wifi.scss';
import { axiosClient } from '../../utils/axiosClient';

function Wifi() {
    // State variables to hold form data
    const [data, setData] = useState('');
    
  async function fetchData() {
    const response = await axiosClient.get('admin/wifi');
    console.log(response.result.wifiData)
    setData(response.result.wifiData);
  }

  useEffect(() => {
    fetchData();
  }, [])

  async function handleComplete(id) {
    const response = await axiosClient.post('/admin/wifiFix', { id })
    fetchData();
  }

  async function handleDelete(id) {
    const response = await axiosClient.post('/admin/wifiDelete', { id })
    fetchData();
  }

   
  return (
    <>
      <div className="maintenance-options container">
        <div className="maintenance-container">
          <h2 className="maintenance-title">Maintenance Requests</h2>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">S. no.</th>
                <th scope="col">Name</th>
                <th scope="col">Block</th>
                <th scope="col">Room no</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                data && data.map((obj, index) => {
                  return <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{obj.name}</td>
                    <td>{obj.block}</td>
                    <td>{obj.roomNo}</td>
                    <td>{obj.status}</td>
                    <td>
                      <button className="btn btn-warning" onClick={() => handleComplete(obj._id)}>Completed</button>
                      <button className="btn btn-danger" onClick={() => handleDelete(obj._id)}>Delete</button>
                    </td>
                  </tr>
                })}

            </tbody>
          </table>

        </div>
      </div>

    </>
  );
};


export default Wifi;

