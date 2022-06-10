import React, { FC } from "react";
type ItemListProps = {
  id: number;
  title: string;
};

const ItemList: FC<ItemListProps> = ({ id, title }) => {
  return (
    <div className="row">
      <div>
        <b>Id</b>:{id}
      </div>
      <div>
        <b>Title</b>:{title}
      </div>
    </div>
  );
};

export default React.memo(ItemList);
