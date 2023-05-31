import { Link, useNavigate } from "react-router-dom";
import loginImg from "../assets/login.png";
import { CommonInput } from "../Components";
import { useDispatch, useSelector } from "react-redux";
import { loginIn } from "../Store/Slices/auth/thunks";
import React from "react";
import { useEffect } from "react";

export const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const Navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginIn(email, password));
  };
  useEffect(() => {
    if (user) {
      Navigate("/");
    }
  }, [user]);

  return (
    <div className="flex h-screen justify-center md:px-3 md:pt-3 col-span-3 bg-[#000000] ">
      <div className="hidden lg:grid justify-items-center items-end h-full">
        <img src={loginImg} alt="" />
      </div>
      <div className="flex flex-col">
        <div className="shadow-lg my-10 w-auto md:w-[24rem] xl:w-auto p-10 sm:p-16 border rounded-lg">
          <form action="" className="grid justify-center gap-6 h-3/5">
            <h1 className="font-medium text-3xl text-center mb-4 text-white ">
              YupiChat
            </h1>
            <CommonInput
              type="text"
              text="Correo electronico "
              setter={setEmail}
            />
            <CommonInput
              type="password"
              text="Contraseña"
              setter={setPassword}
            />
            <button
              onClick={(e) => {
                handleLogin(e);
              }}
              className="h-14 w-72 bg-[#2655FD] text-white rounded-md hover:bg-[#4155FD]"
            >
              Ingresar
            </button>
          </form>
        </div>
        <div className="shadow-lg my-1 w-auto md:w-[24rem] xl:w-auto p-auto sm:p-8 border rounded-lg ">
          <p className="text-center mt-1 text-white">
            ¿No tienes cuenta?
            <Link
              className="underline text-blue-500 ml-1 hover:text-blue-700"
              to="/signup"
            >
              Registrate
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
