import {app, database} from "../context/firebase";
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";



function ProfileInfoFormComponent() {
  const [data, setData] = useState({});
  const myCollection = collection(database, "users")

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

        })
    } catch (err) {
      alert('Error: ' + err.message);
    }
  }
  // onSubmit={handleSubmit}
  return (
    <div>
      <h1>Basic Form in React</h1>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="border-solid"
            onChange={handleInput}
          />
        </div>
        <div>
          <label htmlFor="mobile">Mobile Number</label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            className="border-solid"
            onChange={handleInput}
          />
          
        </div>
        <div>
          <label htmlFor="email">Email ID</label>
          <input
            type="email"
            id="email"
            name="email"
            
            onChange={handleInput}
          />
          
        </div>
        <div>
          <label htmlFor="houseNo">House Number</label>
          <input
            type="text"
            id="houseNo"
            name="houseNo"
            className="border-solid"
            onChange={handleInput}
          />
          
        </div>
        <div>
          <label htmlFor="locality">Locality</label>
          <input
            type="text"
            id="locality"
            name="locality"
            className="border-solid"
            onChange={handleInput}
          />
          
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            className="border-solid"
            onChange={handleInput}
          />
          
        </div>
        <div>
          <label htmlFor="state">State</label>
          <input
            type="text"
            id="state"
            name="state"
            className="border-solid"
            onChange={handleInput}
          />
          
        </div>
        <div>
          <label htmlFor="pin">PIN Code</label>
          <input
            type="text"
            id="pin"
            name="pin"
            className="border-solid"
            onChange={handleInput}
          />
          
        </div>
        {/* ... other input fields */}
        <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default ProfileInfoFormComponent;