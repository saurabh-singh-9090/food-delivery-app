import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = (props) => {
  const { items } = props;
  // console.log("ITEMS----->>>>", items);

  const dispatch = useDispatch();

  const addItemHandler = (item) => {
    //Dispatch an action
    dispatch(addItem(item))
  }

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex flex-col sm:flex-row justify-between p-3 m-1 sm:m-2 border-gray-200 border-b-2"
        >
          <div className="w-10/12 m-4">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs hidden md:block">{item.card.info.description}</p>
          </div>
          <div className=" flex flex-wrap justify-between relative w-12/12 sm:w-4/12 ml-2">
            <img className="rounded-lg" src={CDN_URL + item.card.info.imageId} />
            <div className="absolute bottom-0 right-0 mb-[-10px] mr-[-10px]">
              <button 
              className="p-1 m-1 rounded-lg bg-green-500 text-white shadow-lg"
              onClick={() => addItemHandler(item)}
              >Add +</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
