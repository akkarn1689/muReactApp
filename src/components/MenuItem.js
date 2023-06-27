const MenuItem = ({item},index)=>{
    const {id,name,price,imageId} = item;

    return (
        <div key={index}>
            <h3>{name}</h3>
            <h4>
                {price > 0 ? "₹ " + item.price / 100 : " "}{" "}
            </h4>
        </div>
    )
};

export default MenuItem;