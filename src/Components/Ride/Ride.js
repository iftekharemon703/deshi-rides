import React from 'react';
import { useHistory } from 'react-router';
import './Ride.css';

const Ride = (props) => {
    const {name , img} = props.ride;
    const history = useHistory();

    const handleRide = () => {
        history.push('/destination');
    }
    return (
        <div class="col-md-3 col-sm-12 mt-5">
            <div onClick={handleRide} class="p-3 border bg-white">
                <img class="img" src={img} alt=""/>
                <h2 class="text-center">{name}</h2>
            </div>
        </div>
    );
};

export default Ride;