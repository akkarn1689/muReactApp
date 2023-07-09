const Shimmer = () => {
    return (
        <div className="restaurant-list flex flex-wrap justify-center justify-between w-4/5 p-5 bg-grey-50 my-5 mx-auto items-center rounded-lg">
            {Array(12)
                .fill("")
                .map((e, index) => (
                    <div key={index} className="shimmer-card"></div>
                ))}
        </div>
    );
};

export default Shimmer;