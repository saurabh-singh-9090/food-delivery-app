import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";

export const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    //fetch the data from API
    useEffect(()=>{
        fetchData();       
    },[]);

    const fetchData = async () => {
        const data = await fetch(MENU_API_URL + resId);
        const json = await data.json();
        setResInfo(json.data);
    }

    return resInfo;
}