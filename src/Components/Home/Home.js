import React, { useState } from 'react';
import data from '../../data/data.json';
import Ride from '../Ride/Ride';

const Home = () => {
    const [rides , setRides] = useState(data);
    return (
        <div class="bg-dark py-5">
            <div class="container px-4">
                <div class="row gx-5">
                    {
                        rides.map(ride => <Ride ride={ride}></Ride>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;