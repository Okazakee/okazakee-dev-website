import { useState, useContext } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { MainContext } from '../../context/MainContext';
import axios from 'axios';

export default function AdminAuth() {
  const { pageStyles } = useContext(MainContext);

  const [isLoginForm, SetisLoginForm] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlePOST = async () => {
    const data = {
      token: '131273127u2byu1ebyb2un',
    };

    axios
      .post('http://localhost:3000/api/auth', data.token)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error.response.data);
      });
  };

  return (
    <div className="pt-16 sm:pt-0">
      <Head>
        <title>CMS auth page - Okazakee.dev</title>
      </Head>
      <div className="rounded-3xl grid border px-5 pb-10 mt-20">
        <div className="rounded-full relative hover:cursor-pointer justify-self-center mb-5 -mt-24">
          <Image
            width={192}
            height={192}
            src="/images/user.png"
            alt="user_icon"
            className=""
          ></Image>
        </div>
        <form className="">
          {!isLoginForm && (
            <div className="flex items-center justify-around mb-10">
              <Image
                width={40}
                height={40}
                src="/images/username.png"
                alt="username_icon"
                className="mx-4"
              ></Image>
              <div className="text-center">
                <input
                  type={'username'}
                  placeholder={'Username:'}
                  className="text-center text-2xl rounded-3xl px-5 py-1"
                ></input>
              </div>
              <div className="w-10 mx-4"></div>
            </div>
          )}
          <div className="flex items-center justify-around mb-10">
            <Image
              width={40}
              height={40}
              src="/images/mail.png"
              alt="mail_icon"
              className="mx-4"
            ></Image>
            <div className="text-center">
              <input
                type={'email'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={'Email:'}
                className="text-center text-2xl rounded-3xl px-5 py-1"
              ></input>
            </div>
            <div className="w-10 mx-4"></div>
          </div>
          <div className="flex items-center justify-around mb-10">
            <Image
              width={40}
              height={40}
              src="/images/lock.png"
              alt="lock_icon"
              className="mx-4"
            ></Image>
            <div className="text-center">
              <input
                type={'password'}
                placeholder={'Password:'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-center text-2xl rounded-3xl px-5 py-1"
              ></input>
            </div>
            <div className="w-10 mx-4"></div>
          </div>
          <div className="flex justify-center items-center mx-4">
            <button
              onClick={() => handlePOST()}
              className="bg-[#653bba] w-1/3 text-center text-2xl rounded-3xl px-5 py-1"
            >
              {isLoginForm ? (
                <Link type="submit" href={'/cms'} passHref>
                  Login
                </Link>
              ) : (
                <Link type="submit" href={'/cms'} passHref>
                  Register
                </Link>
              )}
            </button>
          </div>
          {isLoginForm && (
            <div className="flex justify-between items-center mx-12 mt-10 text-xl">
              <div className="flex justify-between items-center">
                <input className="" type={'checkbox'}></input>
                <p className="ml-2">Remember me</p>
              </div>
              <div>
                <button className="ml-10">Forgot password?</button>
              </div>
            </div>
          )}
          {/* <div className="flex justify-center items-center mx-12 mt-10 text-lg">
              {isLoginForm
              ?
                <p className="flex">
                  Not registered? Request
                  <label
                    onClick={() => SetisLoginForm(false)}
                    className="cursor-pointer text-center ml-4 text-[#653bba]"
                  >
                    HERE
                  </label>
                </p>
              :
                <p className="flex">
                  Already registered? Login
                  <label
                    onClick={() => SetisLoginForm(true)}
                    className="cursor-pointer text-center ml-4 text-[#653bba]"
                  >
                    HERE
                  </label>
                </p>
              }
            </div> */}
        </form>
      </div>
    </div>
  );
}
