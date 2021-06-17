import resume from '../../assets/images/anaServaasSDresume2021.pdf'

export const Nav = () => {
    return (
        <header>
            <nav className="navbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="#landing" className="nav-link">
                            <span className="link-text logo-text">Home</span>
                            <span className="material-icons-round md-48 seaweed">emoji_food_beverage</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        {/* <a href="https://drive.google.com/file/d/1UFMJAPPb7sywsSB87f7SUKUZkQ6iqfzq/view?usp=sharing" className="nav-link"> */}
                        <a href={resume} className="nav-link">
                            <span className="link-text logo-text">Resume</span>
                            <span className="material-icons-round md-48 seaweed">text_snippet</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link">
                            <span className="link-text logo-text">Contact</span>
                            <span className="material-icons-round md-48 seaweed">send</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#projects" className="nav-link">
                            <span className="link-text logo-text">Projects</span>
                            <span className="material-icons-round md-48 seaweed">grid_view</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-link">
                            <span className="link-text logo-text">About Me</span>
                            <span className="material-icons-round md-48 seaweed">sentiment_very_satisfied</span>
                        </a>
                    </li>
                    {/* <li className="nav-item">
                        <a href="#" className="nav-link">
                            <span className="link-text logo-text">Dark Mode</span>
                            <span className="material-icons-round md-48 seaweed">light_mode</span>
                            <span className="material-icons-round">dark_mode</span>
                        </a>
                    </li> */}
                </ul>
            </nav>    
        </header>
    )
}
