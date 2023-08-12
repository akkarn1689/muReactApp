const Title = () => (
    <a href="/">
        {/* <img
            className="h-24 p-2 rounded-lg"
            alt="logo"
            src={Logo}
        /> */}
        <div className="h-24 p-2 rounded-lg"></div>
        <figcaption>InstaBites</figcaption>
    </a>
);


const HeaderShimmer = () => {
    return (
        <div className="flex justify-center">
            <div className="flex items-center flex-wrap w-11/12 justify-between bg-pink-50 shadow-lg">
                <Title />
                <div className="nav-items">
                    <ul className="flex py-10 ">
                        <li className="px-2"></li>
                        <li className="px-2"></li>
                        <li className="px-2"></li>
                        <li className="px-2"></li>

                        <li className="px-2"></li>
                    </ul>

                </div>
                <h1>{}</h1>

                {/* {
                    !isLoggedIn && user ? <button onClick={handleLogOut}>Logout</button> : <button onClick={() => setIsLoggedIn()}><Link to="/login">Login</Link></button>
                } */}

            </div>
        </div>
    )
}

export default HeaderShimmer;


// 
{/* <Link to="/">Home</Link> */}
{/* <Link to="/about"></Link> */}
{/* <Link to="/contact"></Link> */}
{/* <Link to="/instamart"></Link> */}
{/* <Link to="/cart">Cart- {totalItemsCount} items</Link> */}