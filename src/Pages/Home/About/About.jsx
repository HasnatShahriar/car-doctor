import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200 my-10 rounded-2xl">
      <div className="hero-content flex-col lg:flex-row">
        <div className='lg:w-1/2 relative'>
          <img src={person} className="w-4/5 rounded-lg shadow-2xl" />
          <img src={parts} className="w-1/2 rounded-lg shadow-2xl absolute top-1/2 right-5 border-8 border-white rounded-xl" />
        </div>
        <div className='lg:w-1/2 space-y-4'>
          <h3 className='text-3xl font-bold text-orange-400'>About</h3>
          <h1 className="text-5xl font-bold">Box Office News! Lorem ipsum dolor sit amet.</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sint illo accusamus tempora dolore veniam.</p>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button className="btn btn-primary btn-outline">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;