import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function AdminAuth() {
  const [authType, SetAuthType] = useState('');

  return (
    <div>
      <Head>
        <title>Admin auth page - Okazakee.dev</title>
      </Head>
      <h1 className="text-center my-5">ADMIN AUTH PAGE</h1>
      {authType === '' && (
        <div className="text-center">
          <p>Select auth type:</p>
          <div className="my-10">
            <button onClick={() => SetAuthType('register')}>register</button>
          </div>
          <div className="my-10">
            <button onClick={() => SetAuthType('login')}>login</button>
          </div>
        </div>
      )}
      {authType === 'register' && (
        <div className="my-10 text-center">
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
            <button type="submit">
              <Link href={'/admin/panel'} passHref shallow>
                Register
              </Link>
            </button>
          </div>
        </div>
      )}
      {authType === 'login' && (
        <div className="my-10 text-center">
          <div className="my-10">
            <p>Username:</p>
            <input type={'username'}></input>
          </div>
          <div className="my-10">
            <p>Password:</p>
            <input type={'password'}></input>
          </div>
          <div className="my-10">
            <button type="submit">
              <Link href={'/admin/panel'} passHref shallow>
                Login
              </Link>
            </button>
          </div>
        </div>
      )}
      {authType !== '' && (
        <button onClick={() => SetAuthType('')} className="text-center">
          Go back
        </button>
      )}
    </div>
  );
}
