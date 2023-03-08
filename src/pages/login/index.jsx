import React, { useState, useContext } from 'react';
import { MainContext } from '../../context/MainContext';
import Link from 'next/link';
import Head from 'next/head';

export default function AdminAuth() {
  const [authType, SetAuthType] = useState('login');
  const { pageStyles } = useContext(MainContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="pt-32 sm:pt-20">
      <Head>
        <title>CMS auth page - Okazakee.dev</title>
      </Head>
      <div className="flex-wrap sm:scale-150 scale-125 transform-gpu">
        <img
          src="/images/user.png"
          alt="user_icon"
          className="w-24 -mb-12 mx-auto"
        ></img>
        <div className="rounded-3xl border pt-16 pb-5">
          <div>
            {authType === 'login' ? (
              <form onSubmit={null}>
                <div className="flex items-center justify-around mb-5">
                  <img
                    src="/images/mail.png"
                    alt="mail_icon"
                    className="w-5 h-fit mx-2"
                  ></img>
                  <div className="text-center">
                    <input
                      type={'email'}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={'Email:'}
                      className={pageStyles.cms.auth.input}
                    ></input>
                  </div>
                  <div className="w-5 mx-2"></div>
                </div>
                <div className="flex items-center justify-around mb-5">
                  <img
                    src="/images/lock.png"
                    alt="lock_icon"
                    className="w-5 h-fit mx-2"
                  ></img>
                  <div className="text-center">
                    <div className="">
                      <input
                        type={'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder={'Password:'}
                        className={pageStyles.cms.auth.input}
                      ></input>
                    </div>
                  </div>
                  <div className="w-5 mx-2"></div>
                </div>
                <div className="flex justify-between items-center mx-4 mb-5 text-sm">
                  <div className="flex justify-between items-center">
                    <input className="" type={'checkbox'}></input>
                    <p className="ml-1">Remember me</p>
                  </div>
                  <div>
                    <button className="ml-5">Forgot password?</button>
                  </div>
                </div>
                <div className="flex justify-between items-center mx-2">
                  <button className="bg-[#653bba] w-full rounded-3xl">
                    <Link type="submit" href={'/cms'} passHref>
                      Login
                    </Link>
                  </button>
                </div>
                <div className="flex justify-center items-center mx-4 mt-5 text-sm">
                  <p className="">
                    Not registered? Request
                    <button
                      onClick={() => SetAuthType('register')}
                      className="text-center ml-2 text-[#653bba]"
                    >
                      HERE
                    </button>
                  </p>
                </div>
              </form>
            ) : (
              <form className="">
                <div className="flex items-center justify-around mb-5">
                  <img
                    src="/images/username.png"
                    alt="username_icon"
                    className="w-5 h-fit mx-2"
                  ></img>
                  <div className="text-center">
                    <input
                      type={'username'}
                      placeholder={'Username:'}
                      className={pageStyles.cms.auth.input}
                    ></input>
                  </div>
                  <div className="w-5 mx-2"></div>
                </div>
                <div className="flex items-center justify-around mb-5">
                  <img
                    src="/images/mail.png"
                    alt="mail_icon"
                    className="w-5 h-fit mx-2"
                  ></img>
                  <div className="text-center">
                    <input
                      type={'email'}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={'Email:'}
                      className={pageStyles.cms.auth.input}
                    ></input>
                  </div>
                  <div className="w-5 mx-2"></div>
                </div>
                <div className="flex items-center justify-around mb-5">
                  <img
                    src="/images/lock.png"
                    alt="lock_icon"
                    className="w-5 h-fit mx-2"
                  ></img>
                  <div className="text-center">
                    <div className="">
                      <input
                        type={'password'}
                        placeholder={'Password:'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={pageStyles.cms.auth.input}
                      ></input>
                    </div>
                  </div>
                  <div className="w-5 mx-2"></div>
                </div>
                <div className="flex justify-between items-center mx-2">
                  <button className="bg-[#653bba] w-full rounded-3xl">
                    <Link type="submit" href={'/cms'} passHref>
                      Register
                    </Link>
                  </button>
                </div>
                <div className="flex justify-center items-center mx-6 mt-5 text-sm">
                  <p className="">
                    Already registered? Login
                    <button
                      onClick={() => SetAuthType('login')}
                      className="text-center ml-2 text-[#653bba]"
                    >
                      HERE
                    </button>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
