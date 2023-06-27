import MenuItem from "./MenuItem";


const RestaurantItemCategory = ({itemList},index) => {
    return (
        <div key={index}>
            <h1>{itemList?.title}</h1>
            {itemList?.itemCards?.map((item)=>(
                <MenuItem key={item?.id} item={item?.card?.info}/>
            ))
            }
        </div>
    )
}



export default RestaurantItemCategory;