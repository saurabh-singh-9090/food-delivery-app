

const Shimmer = () => {
    return (
        <div className="flex flex-wrap justify-center">
            {Array(12).fill(0).map((ele, index)=>(
                <div key={index} className="rounded-lg  h-[480px] w-[250px] m-3 p-1 bg-gray-200"></div>
                ))}
        </div>
    )
}

export default Shimmer;