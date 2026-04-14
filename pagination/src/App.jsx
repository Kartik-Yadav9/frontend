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


  const prevBtn=()=>{
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  }

  const handleNext=()=>{
    setCurrentPage((prev)=>Math.min(prev+1, totalPages))
  }

  const handlePageClick=(pageNumber)=>{
    setCurrentPage(pageNumber)
  };

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
      <div className="flex max-w-full gap-5 items-center mt-3">
        <button
          className="w-[150px] bg-green-400 p-4 rounded-2xl disabled:bg-gray-400 disabled:cursor-not-allowed"
          onClick={prevBtn}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, index) => {
          return (
            <button
              key={index}
              className={`w-7 p-2 ${
                currentPage === index + 1 ? "bg-blue-500" : "bg-green-400"
              }`}
              onClick={() => handlePageClick(index + 1)}
            >
              {index + 1}
            </button>
          );
        })}
        <button
          className="w-[150px] bg-green-400 p-2 rounded-2xl disabled:bg-gray-400 disabled:cursor-not-allowed"
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
