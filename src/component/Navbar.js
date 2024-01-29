function Navbar(){
    return(
        <div className="navbar">
        <div className="navbar--s1">
          <h1 className="navbar--s1__title">Udemy</h1>
        </div>
        <div className="navbar--s2">
          <i className="fa-solid fa-magnifying-glass" style={{color: "#000000"}}></i>
          <input
            className="navbar--s2__input"
            type="text"
            placeholder="Search for Anything"
          />
        </div>
        <div className="navbar--s3">
          <p>courses</p>
          <div className="mylearning">
            <p>My Learning</p>
            <p class="mylearning__popup">You did not purchase anything yet</p>
          </div>
          <i className="fa-solid fa-cart-shopping" style={{color: "#000000"}}></i>
          <i className="fa-solid fa-bell" style={{color: "#000000"}}></i>
          <i className="fa-solid fa-user" style={{color: "#000000"}}></i>
        </div>
        <div className="navbar-toggle">
          <i className="fa-solid fa-bars" style={{color: "#000000"}}></i>
        </div>
      </div>
    )
}

export default Navbar