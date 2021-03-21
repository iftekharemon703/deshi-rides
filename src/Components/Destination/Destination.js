import React from 'react';
import './Destination.css';
import { Map, Marker } from "pigeon-maps"

const Destination = () => {
    return (
        <div class="container px-4 mt-5">
            <div class="row gx-5">
                <hr/>
                <div class="col-md-3 col-sm-12">
                    <div class="p-3 border bg-white">
                        <form>
                            <p>Pick From</p>
                            <input type="text" placeholder="Mirpur 1"/>
                            <br/>
                            <p>Pick To</p>
                            <input type="text" placeholder="Danmondi"/>
                            <br/>
                            <p>Date</p>
                            <input type="date"/>
                            <br/>
                            <p>Time</p>
                            <input type="time"/>
                            <br/> <br/>
                            <input class="submit" type="submit" value="Search"/>
                        </form>
                    </div>
                </div>
                <div class="col-md-9 col-sm-12">
                    <div class="p-3 border bg-light">
                    <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
                        <Marker width={50} anchor={[50.879, 4.6997]} />
                    </Map>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;