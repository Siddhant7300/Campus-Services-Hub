import { useState, useEffect } from "react";
import "./Room.scss";
import { axiosClient } from '../../utils/axiosClient';

const Room = () => {
  const [data, setData] = useState([]);
  const [otherOptionText, setOtherOptionText] = useState("");

  async function fetchData() {
    const response = await axiosClient.get('admin/room');
    setData(response.result.roomData);
    // console.log(response.result.roomData);
  }

  useEffect(() => {
    fetchData();
  }, [])

  async function handleComplete(id) {
    const response = await axiosClient.post('/admin/fixroom', { id })
    fetchData();
  }

  async function handleDelete(id) {
    const response = await axiosClient.post('/admin/deleteroom', { id })
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
                <th scope="col">Services</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                data && data.map((obj, index) => {
                  return <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{obj.userid.name}</td>
                    <td>{obj.block}</td>
                    <td>{obj.roomno}</td>
                    <td>{obj.services.map((s) => {
                      return <p key={index}>{s.name}</p>
                    })}</td>
                    <td>{obj.status}</td>
                    <td>
                      <button className="btn btn-warning" onClick={() => handleComplete(obj._id)}>Complete</button>
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

export default Room;
