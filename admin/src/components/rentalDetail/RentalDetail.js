


import bike_img from "../../../src/images/bike_black_image.jpg";
import "./RentalDetail.scss";

import RentalDetail from "../rentalDetail/RentalDetail";

const RentalDetail = (rentalDetail) => {
    // Handle rental details here (e.g., call an API to create a rental)
    console.log('Rental details submitted:', rentalDetail);
};

function handleRentalDetailSubmit(){
    
}


function BikeRental() {
    return (
        <div className='Bike-Rental'>
            <img src={bike_img} className="bike-background" alt="bicycle"></img>
            <RentalDetail onRentalDetailSubmit={handleRentalDetailSubmit} />
        </div>
    );
}

export default RentalDetail;
