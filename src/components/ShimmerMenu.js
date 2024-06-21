

const ShimmerMenu = () => {
    return (
        <div className="flex flex-col flex-wrap justify-center">
            {Array(8).fill(0).map((ele, index)=>(
                <div key={index} className="flex justify-between rounded-lg w-8/12 h-[80px] bg-gray-100 shadow-lg p-4 mx-auto my-4"></div>
                ))}
        </div>
    )
}

export default ShimmerMenu;