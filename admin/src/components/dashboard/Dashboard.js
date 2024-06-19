import React from 'react'
import './Dashboard.css';
import { Link, useNavigate } from 'react-router-dom';
import roomImage from '../../images/room.jpg'
import wifiImage from '../../images/wifi.jpg'
import laundryImage from '../../images/laundary.jpg'
import healthImage from '../../images/healthImg1.jpg'
import bikeImage from '../../images/bike.jpg'

function Dashboard() {

  const navigate = useNavigate();
  return (
    <div className='mainContainer'>
      <div className="cardContainer">
        <div className="card" style={{ width: '25rem' }}>
          <img src={roomImage} className="card-img-top" alt="..." onClick={()=>navigate('/room')} />
          <div className="card-body">
            <h5 className="card-title">Room Maintenance</h5>
            <Link className="btn btn-primary" to="/room">Click</Link>
          </div>
        </div>

        <div className="card" style={{ width: '25rem' }}>
          <img src={wifiImage} className="card-img-top" alt="..." onClick={()=>navigate('/wifi')} />
          <div className="card-body">
            <h5 className="card-title">Wifi Support</h5>
            <Link className="btn btn-primary" to="/wifi">Click</Link>
          </div>
        </div>

        <div className="card" style={{ width: '25rem' }}>
          <img src={bikeImage} className="card-img-top" alt="..." onClick={()=>navigate('/bike')} />
          <div className="card-body">
            <h5 className="card-title">Bike Rent</h5>
            <Link className="btn btn-primary" to="/bike">Click</Link>
          </div>
        </div>

        <div className="card" style={{ width: '25rem' }}>
          <img src={healthImage} className="card-img-top" alt="..." onClick={()=>navigate('/health')} />
          <div className="card-body">
            <h5 className="card-title">Health Counselling</h5>
            <Link className="btn btn-primary" to="/health">Click</Link>
          </div>
        </div>

        <div className="card" style={{ width: '25rem' }}>
          <img src={laundryImage} className="card-img-top" alt="..."  onClick={()=>navigate('/laundary')} />
          <div className="card-body">
            <h5 className="card-title">Laundry Service</h5>
            <Link className="btn btn-primary" to="/laundary">Click</Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Dashboard