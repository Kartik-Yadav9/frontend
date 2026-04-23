import axios from "axios";
import "./LazyLoad.css"
import React, { useEffect, useState } from "react";

function LazyLoad() {
  let [getData, setGetData] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products");
        setGetData(res?.data.products);
        console.log(res?.data.products);
        
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <p>LazyLoad</p>
      <div className="lazyGrid">
        {getData.map((i, index) => {
          return (
            <div key={index}>
              <img src={i.thumbnail} />
              <p>{i.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LazyLoad;
