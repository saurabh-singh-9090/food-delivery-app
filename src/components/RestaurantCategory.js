
import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
    // console.log("Restaurant Category data--->>>",props.data)

    const {data, showItems, setShowIndex} = props;

    const onClickHandler = () => {
        console.log("clicked");
        setShowIndex()
    }

    return(
        <div>
            {/* Header */}
            <div className="flex flex-col justify-between w-8/12 bg-gray-50 shadow-lg p-4 mx-auto my-4">
                <div className="flex flex-row justify-between cursor-pointer" onClick={onClickHandler}>
                    <span className="font-bold">{data?.title} ({data.itemCards.length})</span>
                    <span>⬇️</span>
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