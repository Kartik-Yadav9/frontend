import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";

function SearchBar() {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      try {
        let res = await axios.get("https://dummyjson.com/users");
        setUsers(res.data.users);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  //useMemo
  const filteredUser = useMemo(() => {
    return users.filter((item) => (
      console.log("re-rendered stopped bcoz of memo"),
      
      item.firstName.toLowerCase().includes(search.toLowerCase()) //before writing anything in search(onchange),
    )); //-----------------------------------------------------------includes will be true that's why it shows all data
  }, [users, search]);
  return (
    <div className="flex flex-col  gap-6">
      <p className="text-center text-4xl font-bold">SearchBar</p>
      <input
        type="search"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-gray-200 rounded-2xl pl-4 py-1 px-1.5 mx-auto w-45 text-2xl"
      />

      <ul className="grid gap-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 text-center">
        {filteredUser.map((item) => {
          return <li key={item.id}>{item.firstName}</li>;
        })}
      </ul>
    </div>
  );
}

export default SearchBar;
