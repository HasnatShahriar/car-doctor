import { Link } from "react-router-dom";
import signUp from '../../assets/images/login/login.svg'
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const SignUp = () => {

  const {createUser} = useContext(AuthContext);

  const handleSignUp = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmedPassword = form.confirmedPassword.value;
    console.log(name,email,password,confirmedPassword);

    createUser(email,password)
    .then(result =>{
      console.log(result.user);
    })
    .catch(error =>{
      console.error(error);
    })
  }


  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="mr-28 w-1/2">
          <img src={signUp} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-2xl font-bold text-center mt-4">SignUp</h1>
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name="name" placeholder="name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirmed Password</span>
              </label>
              <input type="password" name="confirmedPassword" placeholder="password" className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
              <input type="submit" value="SignUp" className="btn bg-orange-500 text-white" />
            </div>
          </form>
          <p className='ml-8 mb-10'>Already Have an account <Link className='text-orange-500 font-semibold underline' to='/login'>Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;