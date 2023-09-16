import "./Navbar.css"
function Navbar() {
  return (
    <nav>
            <div className="logo-area">
                <div className="tooltip">
                    <span className="material-icons hover">menu</span>
                    <span className="tooltip-text">Main Menu</span>
                </div>

                <span className="logo-area"><img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"/></span> 
                <span className="logo-text">Keep</span>
            </div>

            <div className="searchbar">
                <div className="tooltip">
                    <span className="material-icons hover">search</span>
                    <span className="tooltip-text">Search</span>
                </div>
                <input type="text" placeholder="Search" />
            </div>
            <div className="settings-p1">
                <div className="tooltip">
                    <span className="material-icons hover">refresh</span>
                    <span className="tooltip-text">Refresh</span>
                </div>
                <div className="tooltip">
                    <span className="material-icons hover">view_agenda</span>
                    <span className="tooltip-text">List View</span>
                </div>
                <div className="tooltip">
                    <span className="material-icons hover">settings</span>
                    <span className="tooltip-text">Settings</span>
                </div>
            </div>
            <div className="profile-actions-p2">
                <div className="tooltip">
                    <span className="material-icons hover">apps</span>
                    <span className="tooltip-text">Apps</span>
                </div>
                <div className="tooltip logout">
                    <span className="material-icons hover">account_circle</span>
                    <span className="tooltip-text">Logout</span>
                    <span className="auth-user"></span>
                </div>
            </div>
        </nav>
  );
}

export default Navbar;
