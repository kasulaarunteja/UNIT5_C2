import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import "./Rentals.css";

export const Rentals = () => {
  const [data, getData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/houses")
      .then((res) => {
        getData([...res.data]);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);


  const handleChangeSort = (key, value = 1) => {
    if (value == 1) {
      data.sort((a, b) => a[key] - b[key])
      getData([...data])
    }
    else {
      data.sort((a, b) => b[key] - a[key])
      getData([...data])
    }
  }

  // console.log(data);

  return (
    <div className="rentalContainer">
      <div className="sortingButtons">
        <button className="sortById"
          onClick={() => {
            handleChangeSort("id")
          }}
        >Sort by ID</button>


        <button className="sortByRentAsc"
          onClick={() => {
            handleChangeSort("rent")
          }}
        >Rent Low to high</button>
        <button className="sortByRentDesc" onClick={() => {
          handleChangeSort("rent", -1)
        }}>Rent High to low</button>
        <button className="sortByAreaAsc" onClick={() => {
          handleChangeSort("areaCode")
        }}>Area Low to high</button>
        <button className="sortByAreaDesc" onClick={() => {
          handleChangeSort("areaCode", -1)
        }}>Area High to Low</button>
      </div>
      <input
        className="searchAddress"
        type="text"
        placeholder="Search Address"
      />
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Owner Name</th>
            <th>Address</th>
            <th>Area Code</th>
            <th>Rent</th>
            <th>Available For</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data.map((house, index) => {
            return (
              <tr key={house.id} className="houseDetails">
                <td className="houseId">{house.id}</td>
                <td className="houseName">{house.name} </td>
                <td className="ownersName">{house.ownerName}</td>
                <td className="address">{house.address}</td>
                <td className="areaCode">{house.areaCode}</td>
                <td className="rent">{house.rent}</td>
                <td className="preferredTenants">
                  {/* Show text Both or Bachelors or Married based on values */}
                </td>
                <td className="houseImage">
                  <img src={house.image} alt="house" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};