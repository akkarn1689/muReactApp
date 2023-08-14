import { app, database } from "../context/firebase";
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";



function ProfileInfoFormComponent() {
  const [data, setData] = useState({});
  const options = [
    { label: 'Home', value: 'Home' },
    { label: 'Office', value: 'Office' },
  ];

  const [selectedOption, setSelectedOption] = useState('');

  const myCollection = collection(database, "users");

  const navigate = useNavigate();

  const handleInput = (e) => {
    let newInput = { [e.target.name]: e.target.value };
    setData({ ...data, ...newInput });
  }

  const handleSubmit = async () => {
    try {
      await addDoc(myCollection, {
        name: data.name,
        mobile: data.mobile,
        email: data.email,
        address: {
          type: data.addressType,
          houseNo: data.houseNo,
          locality: data.locality,
          city: data.city,
          state: data.state,
          pin: data.pin
        },
      }
      )
        .then((res) => {
          alert('New user added successfully!!!')
          navigate('/login')
          console.log(res);

        })
    } catch (err) {
      alert('Error: ' + err.message);
    }
  }
  // onSubmit={handleSubmit}
  return (
    <div className="mx-auto my-10 w-3/5 grid gap-6 mb-6 md:grid-cols-2 auto-cols-max ">
      <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-500 md:text-5xl lg:text-6xl">Basic Form in React</h1>
      <div>
        <label htmlFor="name" className="block mb-2 text-lg font-large">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="border border-gray-300 text-sm rounded-lg p-2 w-full"
          onChange={handleInput}
        />
      </div>
      <div>
        <label htmlFor="mobile" className="block mb-2 text-lg font-large">Mobile Number</label>
        <input
          type="text"
          id="mobile"
          name="mobile"
          className="border border-gray-300 text-sm rounded-lg p-2 w-full"
          onChange={handleInput}
        />

      </div>
      <div>
        <label htmlFor="email" className="block mb-2 text-lg font-large">Email ID</label>
        <input
          type="email"
          id="email"
          name="email"
          className="border border-gray-300 text-sm rounded-lg p-2 w-full"
          onChange={handleInput}
        />

      </div>
      <div>
        <label htmlFor="houseNo" className="block mb-2 text-lg font-large">House Number</label>
        <input
          type="text"
          id="houseNo"
          name="houseNo"
          className="border border-gray-300 text-sm rounded-lg p-2 w-full"
          onChange={handleInput}
        />

      </div>
      <div>
        <label htmlFor="locality" className="block mb-2 text-lg font-large">Locality</label>
        <input
          type="text"
          id="locality"
          name="locality"
          className="border border-gray-300 text-sm rounded-lg p-2 w-full"
          onChange={handleInput}
        />

      </div>
      <div>
        <label htmlFor="city" className="block mb-2 text-lg font-large">City</label>
        <input
          type="text"
          id="city"
          name="city"
          className="border border-gray-300 text-sm rounded-lg p-2 w-full"
          onChange={handleInput}
        />

      </div>
      <div>
        <label htmlFor="state" className="block mb-2 text-lg font-large">State</label>
        <input
          type="text"
          id="state"
          name="state"
          className="border border-gray-300 text-sm rounded-lg p-2 w-full"
          onChange={handleInput}
        />

      </div>
      <div>
        <label htmlFor="pin" className="block mb-2 text-lg font-large">PIN Code</label>
        <input
          type="text"
          id="pin"
          name="pin"
          className="border border-gray-300 text-sm rounded-lg p-2 w-full"
          onChange={handleInput}
        />
      </div>
      <div>
        <label htmlFor="addressType" className="block mb-2 text-lg font-large">Address Type</label>
        <input
          type="text"
          id="addressType"
          name="addressType"
          className="border border-gray-300 text-sm rounded-lg p-2 w-full"
          onChange={handleInput}
        />
        <label htmlFor="addressType">(Home/Office)</label>
      </div>
      {/* ... other input fields */}
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default ProfileInfoFormComponent;