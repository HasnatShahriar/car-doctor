import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full rounded-xl" />
        <div className="absolute flex rounded-xl transform  h-full left-0  top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className='text-white w-2/3 pl-12 space-y-7'>
            <h2 className='text-6xl font-bold mt-40'>Lorem ipsum dolor sit amet consectetur.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam non optio voluptas doloribus. Aliquam, nam harum ducimus sunt totam tempora.</p>
            <button className='btn btn-primary'>Discover More</button>
            <button className='btn btn-warning ml-5'>Latest Project</button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle mr-5">❮</a>
          <a href="#slide2" className="btn btn-circle bg-red-400">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-xl" />
        <div className="absolute flex rounded-xl transform  h-full left-0  top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className='text-white w-2/3 pl-12 space-y-7'>
            <h2 className='text-6xl font-bold mt-40'>Lorem ipsum dolor sit amet consectetur.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam non optio voluptas doloribus. Aliquam, nam harum ducimus sunt totam tempora.</p>
            <button className='btn btn-primary'>Discover More</button>
            <button className='btn btn-warning ml-5'>Latest Project</button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-5">❮</a>
          <a href="#slide3" className="btn btn-circle bg-red-400">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-xl" />
        <div className="absolute flex rounded-xl transform  h-full left-0  top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className='text-white w-2/3 pl-12 space-y-7'>
            <h2 className='text-6xl font-bold mt-40'>Lorem ipsum dolor sit amet consectetur.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam non optio voluptas doloribus. Aliquam, nam harum ducimus sunt totam tempora.</p>
            <button className='btn btn-primary'>Discover More</button>
            <button className='btn btn-warning ml-5'>Latest Project</button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-5">❮</a>
          <a href="#slide4" className="btn btn-circle bg-red-400">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full rounded-xl" />
        <div className="absolute flex rounded-xl transform  h-full left-0  top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className='text-white w-2/3 pl-12 space-y-7'>
            <h2 className='text-6xl font-bold mt-40'>Lorem ipsum dolor sit amet consectetur.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam non optio voluptas doloribus. Aliquam, nam harum ducimus sunt totam tempora.</p>
            <button className='btn btn-primary'>Discover More</button>
            <button className='btn btn-warning ml-5'>Latest Project</button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-5">❮</a>
          <a href="#slide1" className="btn btn-circle bg-red-400">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;