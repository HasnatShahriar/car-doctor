import { useEffect } from "react";
import { useState } from "react";
import ServicesCard from "./ServicesCard";


const Services = () => {

  const [services,setServices] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/services')
    .then(res => res.json())
    .then(data => setServices(data))
  },[])


  return (
    <div className="my-10">
      <div className="text-center space-y-3">
        <h1 className="text-orange-500  text-2xl font-semibold">Our Services</h1>
        <h1 className="text-center text-4xl font-semibold">Our Services Area</h1>
        <p>Ipsam unde totam corporis, illo deserunt exercitationem quo maxime neque blanditiis dolorum. <br /> Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
        }
      </div>
    </div>
  );
};

export default Services;