import { Fragment, useState } from "react";
import { MouseEvent } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // eventHandler
  const handleClick = (event: MouseEvent) => console.log(event);

  const getMessage = () => {
    return items.length === 0 && <p>There are no items in the list</p>;
  };

  return (
    <>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelelectItem(item);
            }}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
