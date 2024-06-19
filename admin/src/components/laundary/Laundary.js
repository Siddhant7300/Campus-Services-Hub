import { useState } from "react";
import "./Laundary.scss";

const Laundary = () => {
  const [selectedLaundryOptions, setSelectedLaundryOptions] = useState([]);
  const [laundryStatus, setLaundryStatus] = useState("");

  const handleLaundryOptionChange = (option) => {
    if (selectedLaundryOptions.includes(option)) {
      setSelectedLaundryOptions(selectedLaundryOptions.filter((item) => item !== option));
    } else {
      setSelectedLaundryOptions([...selectedLaundryOptions, option]);
    }
  };

  const handleSubmitLaundryRequest = () => {
    // onSubmitLaundryRequest(selectedLaundryOptions);
    console.log("Selected Laundry Options:", selectedLaundryOptions);
    setLaundryStatus("Laundry request submitted successfully.");
  };

  const handleCheckLaundryStatus = () => {
    // onCheckLaundryStatus();
    // Code to check laundry status (implement logic)
    setLaundryStatus("Laundry status: In progress"); // Update status (temporary)
  };

  return (
    <div className="laundry-container">
      <h2 className="laundry-title">Laundry Service</h2>
      <div className="laundry-section">
        <h3>Choose Laundry Option:</h3>
        <div className="laundry-options"> {/* New container for checkboxes */}
          <label>
            <input
              type="checkbox"
              value="Wash and Fold"
              checked={selectedLaundryOptions.includes("Wash and Fold")}
              onChange={() => handleLaundryOptionChange("Wash and Fold")}
            />
            Wash and Fold
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="Dry Cleaning"
              checked={selectedLaundryOptions.includes("Dry Cleaning")}
              onChange={() => handleLaundryOptionChange("Dry Cleaning")}
            />
            Dry Cleaning
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="Pickup and Delivery"
              checked={selectedLaundryOptions.includes("Pickup and Delivery")}
              onChange={() => handleLaundryOptionChange("Pickup and Delivery")}
            />
            Pickup and Delivery
          </label>
          {/* Add more laundry service options here */}
        </div>
      </div>
      <div className="laundry-section">
        <button className="laundry-button" onClick={handleSubmitLaundryRequest}>
          Submit Request
        </button>
        <button className="laundry-button" onClick={handleCheckLaundryStatus}>
          Check Status
        </button>
      </div>
      {laundryStatus && (
        <div className="laundry-status">
          <h3>Laundry Status</h3>
          <p>{laundryStatus}</p>
        </div>
      )}
    </div>
  );
};

export default Laundary;
