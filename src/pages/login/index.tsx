import { useState, useContext, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { MainContext } from '../../context/MainContext';
import axios from 'axios';

export default function AdminAuth() {
  const { router } = useContext(MainContext);

  const [isLoginForm, SetisLoginForm] = useState(true);
  const [rememberMe, SetRememberMe] = useState(false);
  const [password, setPassword] = useState('');
  const [username, setUserName] = useState('');
  const [postError, setPostError] = useState(null);
  const [buttonLocked, SetButtonLocked] = useState(false);

  useEffect(() => {
    // Function to clear the error state
    const clearError = () => {
      setPostError(null);
    };

    // Check if there is an error, and schedule its removal after 5 seconds
    if (postError) {
      const timeoutId = setTimeout(clearError, 5000);

      // Clean up the timeout if the component unmounts or if the error changes before 5 seconds
      return () => clearTimeout(timeoutId);
    }
  }, [postError]);

  const handlePOST = async (event) => {
    event.preventDefault();

    SetButtonLocked(true);

    try {
      // User data to be sent in the request payload
      const userData = {
        username,
        password,
        rememberMe
      };

      // Make a POST request to the authentication API without the token
      const response = await axios.post(process.env.NEXT_PUBLIC_API_ENDPOINT + '/loginHandler', userData);

      if (response.status === 200) {
        //redirect
        router.push('/cms')
      }

    } catch (error) {
      // If there's an error during the request or API logic, handle it here
      setPostError('Error during login: ' + error.response.data.error);
    } finally {
      // Regardless of success or error, always unlock the button
      SetButtonLocked(false);
    }
  };

  return (
    <div className="mt-16 sm:pt-0 max-w-[32rem]">
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
        <form className="flex flex-col" onSubmit={handlePOST}>
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
                onChange={(e) => setUserName(e.target.value)}
                className="text-center text-2xl rounded-3xl px-5 py-1 text-[#090909]"
              ></input>
            </div>
            <div className="w-10 mx-4"></div>
          </div>
          {/* <div className="flex items-center justify-around mb-10">
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
          </div> */}
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
                className="text-center text-2xl rounded-3xl px-5 py-1 text-[#090909]"
              ></input>
            </div>
            <div className="w-10 mx-4"></div>
          </div>
          <div className="flex justify-center items-center mx-4">
            <button
              className={`bg-[#653bba] w-1/3 text-center text-2xl rounded-3xl px-5 py-1 ${buttonLocked && 'bg-[#341d61]'}`}
              disabled={buttonLocked}
              type="submit"
            >
              {isLoginForm ? (
                <p>
                  Login
                </p>
              ) : (
                <p>
                  Register
                </p>
              )}
            </button>
          </div>
          {isLoginForm && (
            <div className="flex justify-center items-center mx-12 mt-10 text-xl">
              <div className="flex text-center justify-between items-center">
                <input onChange={() => SetRememberMe(!rememberMe)} type={'checkbox'}></input>
                <p className="ml-2">Remember me</p>
              </div>
              {/* <div>
                <button className="ml-10">Forgot password?</button>
              </div> */}
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
      {postError &&
        <p className='text-center mt-5 text-red-500 mx-5'>{postError}</p>}
    </div>
  );
}
