import React, { useEffect, useState } from 'react';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('https://thawing-tundra-98270.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h3 className="text-center my-5">I GROW BY HELPING PEOPLE IN NEED.</h3>
            <div className="input-group mx-auto w-50">
                <input type="text" className="form-control" placeholder="Search....." aria-label="search" aria-describedby="basic-addon2"/>
                <span className="input-group-text bg-primary text-white" id="basic-addon2">Search</span>
            </div>
            <div className="container my-5">
                <div className="row">
                {
                    services.map(service => <div 
                    key={service._id} className="col-lg-3">
                        <div className="m-2">
                            <img className="w-100" src={service.img} alt="" />
                            <h5 className="p-2">{service.title}</h5>
                        </div>
                    </div>)
                }
                </div>
            </div>
        </div>
    );
};

export default Home;