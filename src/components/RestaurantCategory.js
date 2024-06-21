
import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
    // console.log("Restaurant Category data--->>>",props.data)

    const {data, showItems, setShowIndex} = props;

    const onClickHandler = () => {
        setShowIndex((showItems)=>!showItems)
    }

    return(
        <div>
            {/* Header */}
            <div className="flex flex-col justify-between w-8/12 bg-gray-100 shadow-lg p-4 mx-auto my-4 cursor-pointer">
                <div className="flex flex-row justify-between "  onClick={onClickHandler}>
                    <span className="font-bold">{data?.title} ({data.itemCards.length})</span>
                    {!showItems ? <span>⬇️</span> : <span>⬆️</span>}
                </div>
                <div className="flex justify-center">
                     {showItems && <ItemList items={data.itemCards}/>}
                </div>
            </div>
            {/* Accordion Body*/}
        </div>
    )
}

export default RestaurantCategory;