import { useUserAuth } from "../context/UserAuthContext";
import { Link } from "react-router-dom";
import AddressCard from "./Address";
import { ADDRESS_LIST } from "../constants";


const Fallback = () => {
  const { user } = useUserAuth();

  return (
    <div className="grid grid-row-2 bg-white drop-shadow-md p-3">
      {!user? (
        <div className="flex flex-col justify-start mx-4 gap-4">
          <div>
            <h1 className="text-xl mt-2.5 text-title font-bold ">Account</h1>
            <p>
              To place your order now, log in to your existing account or sign
              up.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex flex-col justify-center items-center gap-5">
              <h1 className="text-base mt-2.5 text-bio font-bold ">
                Have an account already ?{" "}
              </h1>
              <Link to="/login">
                <button className="bg-white rounded border border-yellow text-sm text-blue-dark">
                  LOG IN
                </button>
              </Link>
            </div>
            <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray before:mt-0.5 after:flex-1 after:border-t after:border-gray after:mt-0.5">
              <p className="text-center text-bio font-semibold mx-4 mb-0">OR</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <h1 className="text-base mt-2.5 text-bio font-bold ">
                New to Instafood ?{" "}
              </h1>
              <Link to="/signup">
                <button className="bg-yellow rounded text-sm text-blue-dark">
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
