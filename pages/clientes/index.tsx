import React, { useState, useEffect, useCallback } from "react";
import List from "../../components";
import { Client } from "../../types";

const Clients = () => {
  const [data, setData] = useState<Client[]>([]);
  const [page, setPage] = useState<number>(0);
  const [isData, setIsData] = useState<boolean>(true);

  const handleData = useCallback(async () => {
    const limit = 10
    const url = `https://jsonplaceholder.typicode.com/todos?_start=${page*limit}&_limit=${limit}`;
    const result = await fetch(url);
    const response = await result.json();
    if(response.length>0) {
      setData([...data,...response])
      setIsData(true)
    }else {
      setIsData(false)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[page]);

  const handlePrev = ()=> setPage(page-1)
  const handleNext = ()=> setPage(page+1)

  useEffect(() => {
    handleData();
  }, [handleData]);

  return (
    <>
      <div>
        <h1 className="clientPage">Client Page</h1>
        {data && <List data={data}></List>}
      </div>
      <div>
        <button className={`btn btn-primary ${page===0?"btn-disabled":""}`} disabled={page===0} onClick={handlePrev}>Prev</button>
        <button className={`btn btn-primary ${!isData?"btn-disabled":""}`} disabled={data.length===0} onClick={handleNext}>Next</button>
      </div>
    </>
  );
};

export default Clients;
