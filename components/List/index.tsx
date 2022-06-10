import { NextPage } from "next";

type ListProps = {
  data: any;
};

const List: NextPage<ListProps> = ({ data }) => {
  return (
    <div className="wrapper">
      <div>Showing Clients</div>
      {data &&
        data.map((item: any, index: number) => <li key={index}>{item}</li>)}
    </div>
  );
};

export default List;
