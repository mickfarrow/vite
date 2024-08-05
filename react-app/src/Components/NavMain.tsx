export default function NavMain(){
    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <a className="navbar-brand" href="/">My Site</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="Home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="About">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="Home">Disabled</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="Dummy">No Page</a>
                    </li>
                </ul>                
            </div>
            </nav>
    )
} 