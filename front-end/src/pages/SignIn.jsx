import axios from "axios";
import { Alert, Button, Spinner } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { signInFailure, signInStart, signInSuccess } from "../redux/User/userSlice";
import OAuth from "../components/OAuth";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ( !formData.email || !formData.password) {
      return dispatch(signInFailure("Please fill out all fields."));
    }
    try {
        dispatch(signInStart());
      const response = await axios.post(
        "http://localhost:3030/api/auth/signin",
        formData
      );
      const data = response.data;
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }
      
      if (response.status === 200) {
        dispatch(signInSuccess(data));
        navigate('/');
      }
    } catch (error) {
        dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Sign Up</h2>
        <p className="text-red-500 mb-4"></p>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            placeholder="youremail@gmail.com"
            id="email"
            onChange={handleChange}
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="email"
          />
          <input
            placeholder="********"
            id="password"
            onChange={handleChange}
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="password"
          />
          <Button
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <>
                <Spinner size="sm" />
                <span className="pl-3">Loading...</span>
              </>
            ) : (
              "Sign In"
            )}
          </Button>
          <OAuth/>
        </form>
        <div className="flex gap-2 text-sm mt-5">
          <span>Dont have an account?</span>
          <Link to="/api/signup" className="text-blue-500">
            Sign up
          </Link>
        </div>
        {errorMessage && (
          <Alert className="mt-5" color="failure">
            {errorMessage}
          </Alert>
        )}
      </div>
    </div>
  );
}
