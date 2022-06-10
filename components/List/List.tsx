import React, { FC } from "react";
import { Client } from "../../types";
import ItemList from "./ItemList";

type ListProps = {
  data: Client[];
};

const List: FC<ListProps> = ({ data }) => {
  return (
    <div className="wrapper">
      <div className="title">Showing Clients</div>
      {data &&
        data.map(({ id, title }, index: number) => (
          <ItemList key={index} {...{ title, id }} />
        ))}
    </div>
  );
};

export default React.memo(List);
