import './NavBar.css';

function NavBar(){
    return (
        <nav>
            <ul>
                <li><a href="/">home</a></li>
                <li><a href="/">about</a></li>
                <li><a href="/">contact</a></li>
                <li><a href="/">sign in</a></li>
                <div className="search">
                 <input type='text' className="searchBar" placeholder='search products'/>
                 <button className="searchBtn">search</button>
                 </div>
            </ul>

           
        </nav>
    );
}

export default NavBar;