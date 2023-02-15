import React, { useState, useContext, useEffect } from 'react';
import { MainContext } from '../../components/context/MainContext';
import Link from 'next/link';
import Head from 'next/head';
import { MongoClient } from 'mongodb';

export default function Cms(props) {

  const { avaliablePages, collectionsData } = props;

  // Debug logs
  useEffect(() => {
    console.table({
      "Obtained props": props
    })
  }, [props]);

  const { pageStyles, isUserAuth } = useContext(MainContext);
  const [selectedPage, SetSelectedPage] = useState(avaliablePages[0]);

  return (
    <div>
      {isUserAuth && (
        <div className="mt-20 sm:-mt-10 mb-16 py-5 w-[90vw] max-w-7xl">
          <div className="mx-5">
            <div className="flex items-center justify-center border rounded-3xl min-w-[50%] h-12 mb-5">
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
            <div className="flex-wrap border basis-1/5 rounded-3xl pt-5 px-5 mx-5 lg:text-lg">
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
              <div
                onClick={() => null}
                className="cursor-pointer border text-center px-2 py-1 mb-5 rounded-3xl hover:bg-[#8c54fb]"
              >
                <div className="">+</div>
              </div>
            </div>
            <div className="flex-wrap border basis-4/5 rounded-3xl pt-5 px-5 mr-5 max-h-[60vh] md:max-h-[70vh]  overflow-auto lg:text-lg">
              <div className='text-end cursor-pointer'>
                ↻
              </div>
              {/* <div className="flex mb-2">
                <h1 className="mr-3">
                  title: {collectionsData[selectedPage][0].title}
                </h1>
              </div>
              <div className="flex mb-2">
                <h1 className="mr-3">
                  Img Link: {collectionsData[selectedPage][0].img}
                </h1>
              </div>
              <div className="flex mb-2">
                <h1 className="mr-3">
                  text: {collectionsData[selectedPage][0].text}
                </h1>
              </div>
              <div className="flex mb-2">
                <h1 className="mr-3">
                  MD: {collectionsData[selectedPage][0].markdown}
                </h1>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {

  // Detect what type of page it is and serve a different response, like isArtivle=[true/false]
  // if articles, show a grid of articles titles, each one can be clicked to open and edit its values
  // if not, show directly editable data when clicking on left button

  let client;
  let db;
  let collectionsData;
  let avaliablePages;

  // Connect to mongoDB and collection
  try {

    client = await MongoClient.connect(process.env.MONGODB_URI);
    console.log("Connected to mongoDB");

    db = client.db(process.env.COLLECTION_ENV);
    console.log(`Connected to ${process.env.COLLECTION_ENV}.`);

  } catch (e) {
  console.error("Error occured while connecting to MongoDB,", e);
  }

  // Gather collections data
  try {

    collectionsData = await db.listCollections().toArray();
    console.log("Correctly gathered collections data");

  } catch (e) {
    console.error("Error occured while fetching collections names,", e);
  }

  // Gather avaliable pages
  try {

    avaliablePages = collectionsData.map(
      (collection) => collection.name
    ).sort();

    console.log(`Avaliable pages: ${avaliablePages}`);

  } catch (e) {
    console.error("Error occured while getting avaliable pages,", e);
  }

  // Gather pages data
  try {

    console.log("Correctly gathered pages data");

  } catch (e) {
    console.error("Error occured while fetching collections names,", e);
  }

  // Send all props to frontend
  try {

    console.log("Sending props to frontend...");

    return {
      props: {
        avaliablePages
      },
    };

  } catch (e) {
    console.error("Error occured while sending props to frontend", e);
  }

    // Make serialized response to be served as prop
    /* const collectionsData = {};
    for (const collectionName of avaliablePages) {
      const data = await db.collection(collectionName).find({}).toArray();
      // Convert each ObjectId to string
      collectionsData[collectionName] = data.map((d) => {
        if (d._id) {
          d._id = d._id.toString();
        }
        return d;
      });
    } */
}
