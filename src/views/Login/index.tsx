import React, { useState } from "react"
/**
 * Styles
 */
import s from "./login.module.css"

function LoginView(): JSX.Element {
  const [isRemember, setRemember] = useState<boolean>(false)
  const [userDetails, setDetails] = useState({
    email: "",
    password: "",
  })

  return (
    <div
      className={`${s.container} bg-white border border-gray-500 rounded-lg relative overflow-hidden z-20`}
    >
      <div className="flex flex-col items-center pt-6 pb-6">
        <div className="font-bold text-4xl">Sign in</div>
        <div className="font-light text-base text-gray-light">
          Welcome, we missed you!
        </div>
      </div>

      <div className="px-7">
        <div className="pb-6">
          <div className="text-xs text-gray-regular pb-2.5">Your Email</div>
          <div>
            <input
              type="text"
              value={userDetails?.email}
              placeholder="Enter your email"
              className="border-b-2 border-gray-100 outline-none w-full pb-2.5 text-black-default placeholder-gray-regular placeholder-opacity-50"
              onChange={(e: any) =>
                setDetails({ ...userDetails, email: e?.target?.value })
              }
            />
          </div>
        </div>

        <div className="pb-6">
          <div className="text-xs text-gray-regular pb-2.5">Password</div>
          <div>
            <input
              type="text"
              value={userDetails?.password}
              placeholder="Enter your password"
              className="border-b-2 border-gray-100 outline-none w-full pb-2.5 text-black-default placeholder-gray-regular placeholder-opacity-50"
              onChange={(e: any) =>
                setDetails({ ...userDetails, password: e?.target?.value })
              }
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between align-center px-7">
        <div>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio h-5 w-5 text-gray-500 bg-gray-500"
              checked={isRemember}
              onClick={() => setRemember(!isRemember)}
            />
            <span className="ml-2 text-gray-regular text-opacity-60 text-sm">
              Remember me
            </span>
          </label>
        </div>
        <div className="text-linkOrange text-sm">Forgot Password?</div>
      </div>

      <div>
        <button className="absolute focus:outline-none bottom-0 bg-button w-full h-14 flex justify-center items-center text-white text-2xl border-0">
          Login
        </button>
      </div>
    </div>
  )
}

export default LoginView
