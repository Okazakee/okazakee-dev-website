import React, { useState, useContext } from 'react';
import { MainContext } from '../../components/context/MainContext';
import Link from 'next/link';
import Head from 'next/head';
import { MongoClient } from 'mongodb';

export default function Cms({ avaliablePages }) {
  const { pageStyles, isUserAuth } = useContext(MainContext);
  const [selectedPage, SetSelectedPage] = useState(avaliablePages[0]);

  return (
    <div>
      {isUserAuth && (
        <div className="mt-20 sm:-mt-10 py-5 w-[90vw] max-w-7xl border border-red-700">
          <div className="basis-3/4 mx-5">
            <div className="flex items-center justify-center border rounded-3xl min-w-[50%] h-10 mb-5">
              <h1 className="mx-5">
                You are currently editing{' '}
                <label className="text-[#8c54fb] cursor-text">
                  {selectedPage}
                </label>{' '}
                page
              </h1>
            </div>
          </div>
          <div className="flex">
            <div className="flex-wrap border basis-1/4 rounded-3xl pt-5 px-5 mx-5">
              {avaliablePages.map((page, i) => (
                <div
                  onClick={() => SetSelectedPage(page)}
                  key={i}
                  className={`cursor-pointer border text-center px-2 py-1 mb-5 rounded-3xl hover:bg-[#8c54fb] ${
                    selectedPage === page && 'bg-[#8c54fb]'
                  }`}
                >
                  <div className="">{page}</div>
                </div>
              ))}
            </div>
            <div className="flex-wrap border basis-3/4 rounded-3xl pt-5 px-5 mr-5">
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db(process.env.COLLECTION_ENV);
    const collections = await db.listCollections().toArray();

    // Extract the collection names
    const sortedCollections = collections.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

    const avaliablePages = sortedCollections.map((collection) => collection.name);

    return {
      props: {
        avaliablePages
      },
    };
  } catch (e) {
    console.error(e);
  }
}
