import MenuItem from "./MenuItem";


const RestaurantItemCategory = ({itemList},index) => {
    return (
        <div key={index} className="px-8">
            <h1 className="text-3xl font-bold">{itemList?.title}</h1>
            {itemList?.itemCards?.map((item)=>(
                <MenuItem key={item?.id} item={item?.card?.info}/>
            ))
            }
        </div>
    )
}



export default RestaurantItemCategory;