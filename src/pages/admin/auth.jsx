import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export default function AdminAuth() {
  const [authType, SetAuthType] = useState(true);

  return (
    <div className="flex items-center mb-[30vh] ">
      <Head>
        <title>Admin auth page - Okazakee.dev</title>
      </Head>
      {authType ? (
        <div className="text-center flex-wrap">
          <img src="/images/user.png" className="w-28 -mb-14 mx-auto"></img>
          <div className="rounded-3xl border pt-20 pb-5">
            <div className="flex items-center justify-around mb-5">
              <img src="/images/mail.png" className="w-5 h-fit mx-2"></img>
              <div className="text-center">
                <input
                  type={'email'}
                  placeholder={'Email:'}
                  className="text-center rounded-3xl flex-1 justify-center"
                ></input>
              </div>
              <div className="w-5 mx-2"></div>
            </div>
            <div className="flex items-center justify-around mb-5">
              <img src="/images/lock.png" className="w-5 h-fit mx-2"></img>
              <div className="text-center">
                <div className="">
                  <input
                    type={'password'}
                    placeholder={'Password:'}
                    className="text-center rounded-3xl"
                  ></input>
                </div>
              </div>
              <div className="w-5 mx-2"></div>
            </div>
            <div className="flex justify-between items-center text-xs mx-4 mb-5">
              <div className="flex justify-between items-center">
                <input className="" type={'checkbox'}></input>
                <p className="ml-1">Remember me</p>
              </div>
              <div>
                <button className="">Forgot password?</button>
              </div>
            </div>
            <div className="flex justify-between items-center mx-2">
              <button className="bg-[#653bba] w-full rounded-3xl">
                <Link href={'/admin/panel'} passHref shallow>
                  Login
                </Link>
              </button>
            </div>
            <div className="flex justify-between items-center text-xs mx-4 mt-5">
              <p className="text-sm">
                Not registered? Request
                <button
                  onClick={() => SetAuthType(false)}
                  className="text-center ml-2 text-[#653bba]"
                >
                  HERE
                </button>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center flex-wrap">
          <img src="/images/user.png" className="w-28 -mb-14 mx-auto"></img>
          <div className="rounded-3xl border pt-20 pb-5">
            <div className="flex items-center justify-around mb-5">
              <img src="/images/username.png" className="w-5 h-fit mx-2"></img>
              <div className="text-center">
                <input
                  type={'username'}
                  placeholder={'Username:'}
                  className="text-center rounded-3xl flex-1 justify-center"
                ></input>
              </div>
              <div className="w-5 mx-2"></div>
            </div>
            <div className="flex items-center justify-around mb-5">
              <img src="/images/mail.png" className="w-5 h-fit mx-2"></img>
              <div className="text-center">
                <input
                  type={'email'}
                  placeholder={'Email:'}
                  className="text-center rounded-3xl flex-1 justify-center"
                ></input>
              </div>
              <div className="w-5 mx-2"></div>
            </div>
            <div className="flex items-center justify-around mb-5">
              <img src="/images/lock.png" className="w-5 h-fit mx-2"></img>
              <div className="text-center">
                <div className="">
                  <input
                    type={'password'}
                    placeholder={'Password:'}
                    className="text-center rounded-3xl"
                  ></input>
                </div>
              </div>
              <div className="w-5 mx-2"></div>
            </div>
            <div className="flex justify-between items-center mx-2">
              <button className="bg-[#653bba] w-full rounded-3xl">
                <Link href={'/admin/panel'} passHref shallow>
                  Register
                </Link>
              </button>
            </div>
            <div className="flex justify-between items-center text-xs mx-4 mt-5">
              <p className="text-sm">
                Already registered? Login
                <button
                  onClick={() => SetAuthType(true)}
                  className="text-center ml-2 text-[#653bba]"
                >
                  HERE
                </button>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {}, // dunno if this will be useful
  };
}
