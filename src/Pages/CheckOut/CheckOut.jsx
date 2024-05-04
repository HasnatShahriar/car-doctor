import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";



const CheckOut = () => {
  const serviceData = useLoaderData();
  const {_id, title, img, price } = serviceData;

  const {user} = useContext(AuthContext);
   
  const handleCheckOutService = e =>{
    e.preventDefault();

    const form = e.target;
    
    const name = form.name.value;
    const email =user?.email;
    const date = form.date.value;
    const dueAmount = form.dueAmount.value;

    const booking = {
      customerName : name,
      email,
      date,
      img,
      service_title : title,
      service_id : _id,
      price: price,
      dueAmount
    }
    console.log(booking);


    fetch('http://localhost:5000/bookings',{
      method: "POST",
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Booking Ordered Successfully !!!",
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
  }


  return (
    <div>
      <h3>CheckOut: {title}</h3>
      <form onSubmit={handleCheckOutService} className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name="name" defaultValue={user?.name} className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input type="date" name="date" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" defaultValue={user?.email}  placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input type="text" name="dueAmount" defaultValue={'$ '+ price} className="input input-bordered" required />
          </div>
        </div>
        <div className="form-control mt-6">
          <input type="submit" value="Order Confirmed" className="btn btn-block bg-orange-500" />
        </div>
      </form>
    </div>
  );
};

export default CheckOut;