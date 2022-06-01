import { useState } from "react";
import axios from "axios";
import React from "react";

export const AddHouse = () => {
  const [houses, setHouses] = useState({
    name: "",
    ownerName: "",
    address: "",
    areaCode: "",
    rent: "",
    preferredtenants: "",
    image: "",
  });

  const handleChange = (e) => {
    console.log(e.target.value);

    const { id, value } = e.target;

    setHouses({
      ...houses,
      [id]: value,
    });
  };

  const submitData = (e) => {
    e.preventDefault();
    // console.log(formData);

    axios.post("http://localhost:8080/houses", houses).then(() => {
      alert("user created sucessfully");

      // setHouses({
      //   name: "",
      //   ownerName: "",
      //   address: "",
      //   areaCode: "",
      //   rent: "",
      //   preferredtenants: "",
      //   image: "",
      // });
    });
  };

  return (
    <div className="addHouseContainer">
      <form onSubmit={submitData}>
        <label>name</label>
        <input
          type="text"
          id="name"
          onChange={handleChange}
          className="name"
          required
        />
        <br />
        <label>ownerName</label>
        <input
          value={setHouses.ownerName}
          onChange={handleChange}
          type="text"
          id="ownerName"
          className="ownerName"
          required
        />
        <br />
        <label>address</label>
        <input
          value={setHouses.address}
          onChange={handleChange}
          id="address"
          type="text"
          className="address"
          required
        />
        <br />
        <label>areaCode</label>
        <input
          value={setHouses.areaCode}
          onChange={handleChange}
          type="text"
          id="areaCode"
          className="areaCode"
          required
        />
        <br />
        <label>rent</label>
        <input
          value={setHouses.rent}
          onChange={handleChange}
          type="text"
          id="rent"
          className="rent"
          required
        />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input
          checked={setHouses.bachelor}
          onChange={handleChange}
          type="checkbox"
          id="preferredtenants"
          className="bachelor"
          value="bachelor"
        />
        <br />
        <label>married</label>
        <input
          checked={setHouses.married}
          onChange={handleChange}
          type="checkbox"
          value="married"
          id="preferredtenants"
          className="married"
        />
        <br />
        <label>image</label>
        <input
          value={setHouses.image}
          onChange={handleChange}
          type="text"
          id="image"
          className="image"
          required
        />
        <br />
        <input className="submitBtn" type="submit" 
        />
      </form>
    </div>
  );
};