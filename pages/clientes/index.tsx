import React, { useState, useEffect } from "react";
import List from "../../components";
import { Client } from "../../types";

const Clients = () => {
  const [data, setData] = useState<Client[]>([]);

  const handleData = async () => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    const result = await fetch(url);
    const response = await result.json();
    console.log("response", response);
    setData(response);
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <div>
      <h1 className="clientPage">Client Page</h1>
      {data && <List data={data}></List>}
    </div>
  );
};

export default Clients;
