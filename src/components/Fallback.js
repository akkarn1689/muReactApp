import { useUserAuth } from "../context/UserAuthContext";
import { Link } from "react-router-dom";
import AddressCard from "./Address";
import { ADDRESS_LIST } from "../constants";


const Fallback = () => {
  const { user } = useUserAuth();

  return (
    <div className="grid grid-row-2 bg-white  p-3">
      {!user? (
        <div className="flex flex-col justify-start mx-4 gap-4">
          <div>
            <p>
              To place your order now, log in to your existing account or sign
              up.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex flex-col justify-center items-center gap-5">
              <h1 className="mt-1">
                Have an account already ?{" "}
              </h1>
              <Link to="/login">
                <button className="p-1 m-1 bg-black text-white rounded-lg">
                  LOG IN
                </button>
              </Link>
            </div>
            <div className="flex items-center my-1">
              <p className="text-center font-semibold mx-4 mb-0">OR</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <h1 className="text-base mt-1">
                New User ?{" "}
              </h1>
              <Link to="/signup">
                <button className="p-1 m-1 bg-black text-white rounded-lg">
                  SIGN UP
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-start mx-4 gap-4">
          <div>
            <div className="bg-white shadow-md p-5 flex flex-col ">
              <h1 className="text-xl mt-1 text-title font-bold ">
                Delivery Address
              </h1>
              <div className="flex flex-wrap justify-around items-center w-[100%]">
                {ADDRESS_LIST.map((address) => {
                  return <AddressCard {...address} key={address.id} />;
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default Fallback;
