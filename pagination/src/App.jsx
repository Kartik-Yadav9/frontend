import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  let [userData, setUserData] = useState([]);
  let [currentPage, setCurrentPage]= useState(1)
  let [rowsPerPage, setRowsPerPage]= useState(10)
  let indexOfLastItem= currentPage * rowsPerPage
  let indexOfFirstItem = indexOfLastItem - rowsPerPage
  let currentItems = userData?.users?.slice(indexOfFirstItem, indexOfLastItem) || [];
  const totalPages = Math.ceil(userData?.total / rowsPerPage);


  let extractData = async () => {
    try {
      let res = await axios.get("https://dummyjson.com/users?limit=0");
      setUserData(res?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    extractData();
  }, []);

  return (
    <div className=" max-w-screen  flex flex-col items-center pb-20">
      <p className=" font-semibold text-4xl mx-auto px-25  text-center py-4">
        Pagination
      </p>
      <table className="w-[500px] text-white">
        <thead>
          <tr className="font-bold text-5xl  bg-blue-600 min-h-[500px] ">
            <th className="py-7">Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => {
            return (
              <tr
                key={index}
                className="font-semibold text-2xl bg-gray-400  text-center"
              >
                <td className="py-2">{item.firstName}</td>
                <td>{item.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex max-w-full justify-between items-center mt-3">
        <button className="w-[150px] bg-green-400 p-4 rounded-2xl">Prev</button>
        <button className="w-[150px] bg-green-400 p-4 rounded-2xl">Next</button>
      </div>
    </div>
  );
}

export default App;
