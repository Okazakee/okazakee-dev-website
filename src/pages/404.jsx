import React from "react"
import Link from "next/link"
import Head from "next/head"

export default function Custom404() {
    return <div className='min-h-[80vh] text-7xl justify-center grid place-items-center'>
                <Head><title>404 Error - Okazakee.dev</title></Head>
                <h1 className="grid place-items-center justify-center">
                    404 - Page Not Found
                    <Link href="/" passHref>
                        <button className="text-[#8c54fb] grid place-items-center justify-center mx-auto">Go back home</button>
                    </Link>
                </h1>
            </div>
  }