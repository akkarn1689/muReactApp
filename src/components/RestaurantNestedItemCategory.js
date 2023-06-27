import RestaurantItemCategory from "./RestaurantItemCategory";

const RestaurantNestedItemCategory = ({nestedList})=>{
    return (
        <div>
            {nestedList?.categories.map((category,index)=>(
                <div key={index}>
                    <RestaurantItemCategory itemList={category} />
                </div>
            ))
            }
        </div>
    );
}

export default RestaurantNestedItemCategory;