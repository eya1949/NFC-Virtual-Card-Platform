import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function ResetPassword() {
    const [password, setPassword] = useState("");

    axios.defaults.withCredentials = true;
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      axios
        .post("http://localhost:3030/api/V1/auth/forgetPassword", {
          email,
        })
        .then((res) => {
          if (res.data.status === "success") {
            navigate("/login");
          }
        })
        .catch((err) => console.log(err));
    };
  
    return (
      <div>
        <div className="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white">
          <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
            Reset Password
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="block relative">
            <label
              htmlFor="password"
              className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-white tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
            />
          </div>
            <button
              type="submit"
              className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    );
}
