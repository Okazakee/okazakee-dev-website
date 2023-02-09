import React, { useState, useContext } from 'react';
import { MainContext } from '../../components/context/MainContext';
import Link from 'next/link';
import Head from 'next/head';
import { MongoClient } from 'mongodb';

export default function Cms({ avaliablePages, collectionsData }) {
  const { pageStyles, isUserAuth } = useContext(MainContext);
  const [selectedPage, SetSelectedPage] = useState(avaliablePages[0]);

  return (
    <div>
      {isUserAuth && (
        <div className="mt-20 sm:-mt-10 mb-16 py-5 w-[90vw] max-w-7xl">
          <div className="mx-5">
            <div className="flex items-center justify-center border rounded-3xl min-w-[50%] h-14 mb-5">
              <h1 className="mx-5 text-2xl">
                You are currently editing{' '}
                <label className="text-[#8c54fb] cursor-text">
                  {selectedPage}
                </label>{' '}
                page
              </h1>
            </div>
          </div>
          <div className="flex">
            <div className="flex-wrap border basis-1/5 rounded-3xl pt-5 px-5 mx-5">
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
            <div className="flex-wrap border basis-4/5 rounded-3xl pt-5 px-5 mr-5">
              <div className='flex mb-2'>
                <h1 className='mr-3'>title: {collectionsData[selectedPage][0].title}</h1>
              </div>
              <div className='flex mb-2'>
                <h1 className='mr-3'>Img Link: {collectionsData[selectedPage][0].img}</h1>
              </div>
              <div className='flex mb-2'>
                <h1 className='mr-3'>text: {collectionsData[selectedPage][0].text}</h1>
              </div>
              <div className='flex mb-2'>
                <h1 className='mr-3'>MD: {collectionsData[selectedPage][0].markdown}</h1>
              </div>
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

    // Extract the collection names and reorder
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

    const collectionsData = {};
    for (const collectionName of avaliablePages) {
      const data = await db.collection(collectionName).find({}).toArray();
      // Convert each ObjectId to string
      collectionsData[collectionName] = data.map((d) => {
        if (d._id) {
          d._id = d._id.toString();
        }
        return d;
      });
    }

    return {
      props: {
        avaliablePages,
        collectionsData
      },
    };
  } catch (e) {
    console.error(e);
  }
}