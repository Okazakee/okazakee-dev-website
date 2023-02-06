import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function AdminAuth() {
  const [authType, SetAuthType] = useState(true);

  return (
    <div>
      <Head>
        <title>Admin auth page - Okazakee.dev</title>
      </Head>
      {!authType && (
        <div className="my-10 text-center">
          <h1 className="text-3xl">REGISTER</h1>
          <div className="my-10">
            <p>Username:</p>
            <input type={'username'}></input>
          </div>
          <div className="my-10">
            <p>Email:</p>
            <input type={'email'}></input>
          </div>
          <div className="my-10">
            <p>Password:</p>
            <input type={'password'}></input>
          </div>
          <div className="my-10">
            <button className="bg-[#653bba]">
              <Link href={'/admin/panel'} passHref shallow>
                Register
              </Link>
            </button>
          </div>
        </div>
      )}
      {authType && (
        <div className="my-10 text-center">
          <h1 className="text-3xl">LOGIN</h1>
          <div className="my-10">
            <p>Username:</p>
            <input type={'username'}></input>
          </div>
          <div className="my-10">
            <p>Password:</p>
            <input type={'password'}></input>
          </div>
          <div className="my-10">
            <button className="bg-[#653bba]">
              <Link href={'/admin/panel'} passHref shallow>
                Login
              </Link>
            </button>
          </div>
        </div>
      )}
      {authType ? (
        <p>
          Not registered? Request
          <button
            onClick={() => SetAuthType(false)}
            className="text-center ml-3 text-[#653bba]"
          >
            HERE
          </button>
        </p>
      ) : (
        <p>
          Already registered? Login
          <button
            onClick={() => SetAuthType(true)}
            className="text-center ml-3 text-[#653bba]"
          >
            HERE
          </button>
        </p>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
