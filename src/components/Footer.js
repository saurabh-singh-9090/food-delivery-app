const Footer = () => {
    return(
        <div className="flex justify-center bg-gray-200 p-10 ">
            <div className="flex justify-center flex-wrap items-center bottom-0">
                <div className="m-5"><b>For better experience, Download our App now</b></div>
                <div className="flex flex-wrap">
                    <img className="m-5 h-12" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"/>
                    <img className="m-5 h-12" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"/>
                </div>
            </div>
        </div>
    )
}

export default Footer;