import React from 'react';
import {FaSadTear} from 'react-icons/fa'

const NoDataFound = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '40vh', // You might need to adjust this based on your layout
      }}
    >
      <h1 style={{ fontSize: '30px', fontWeight: 'bolder', color: 'black' }}>
        No Search Results Found {"  "}
        <FaSadTear/>
      </h1>

      <p></p>
    </div>
  );
};

export default NoDataFound;
