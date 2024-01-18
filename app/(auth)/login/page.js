"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";
import InputText from "../../_components/InputText";
import { setCookies } from "../../utility/cookies";
import Slider from "@/app/_components/Slider";

const LOREM = [
  {
    title: "Lorem",
    desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..., There is no one who loves pain itself, who seeks after it",
  },
  {
    title: "Lorem",
    desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..., There is no one who loves pain itself, who seeks after it",
  },
  {
    title: "Lorem",
    desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..., There is no one who loves pain itself, who seeks after it",
  }
]

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const router = useRouter();
  const storedData = useSelector((data) => data.register.users);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClick = () => {
    const loggedUser = storedData.find(
      (data) =>
        data.username === loginData.username &&
        data.password === loginData.password
    );
    if (loggedUser) {
      setCookies("user", loggedUser);
      router.push("/pages/profile");
    } else alert("tidak ada data");
  };
  return (
    <div className="m-0 p-0 h-screen flex flex-row">
      <div className="bg-[#131167] flex-1 flex flex-col items-center justify-center">
        <Image src="/logo.png" width={250} height={250} alt="logo" />
        <div className="w-full max-w-[487px] mt-16">
          <Slider data={LOREM} />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center text-gray-500">
        <div>
          <h1 className="text-6xl font-extrabold pb-4 text-[#20184e]">
            Silahkan Login
          </h1>
          <p className="font-normal mt-2 mb-5">
            Masukkan Username dan password Anda untuk masuk
          </p>
          <div className="pt-4">
            <InputText
              label="Username"
              type="text"
              placeholder="Username Anda"
              name="username"
              id="username"
              onChange={(e) => handleChange(e)}
            />
            <InputText
              showPassword
              label="Password"
              type="password"
              placeholder="Password Anda"
              name="password"
              id="password"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="my-8">
            <button
              className="rounded-full w-full py-4 px-4 bg-[#e5e7fd] text-[#20184e] font-extrabold hover:bg-[#d4d6f9]"
              onClick={() => handleClick()}
            >
              Masuk Sekarang
            </button>
          </div>
          <p className="text-center">
            Belum punya akun?{" "}
            <Link href="/register" className="font-extrabold text-[#20184e]">
              Daftar Sekarang
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
