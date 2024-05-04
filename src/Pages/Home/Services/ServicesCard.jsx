import { FaArrowRight } from "react-icons/fa6";

const ServicesCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div className="card bg-base-100 border-2 border-orange-200 mt-10">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl h-40 w-full " />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{title}</h2>
        <div className="flex items-center justify-between text-orange-500 font-bold">
          <p>Price: $ {price}</p>
          <button className=""><FaArrowRight /></button>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;