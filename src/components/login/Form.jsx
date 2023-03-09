import React from 'react';
import Link from 'next/link';

function Form() {
  return (
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
  );
}

export default Form;
