import React from 'react';

export const Nav = ({resume}) => {
    const navIn = () => {
        const main = document.querySelector('main');
        main.style.opacity = "0.25"
        main.style.transition = "600ms"
      }
    
      const navOut = () => {
        const main = document.querySelector('main');
        main.style.opacity = "1"
        main.style.transition = "600ms"
      }
    return (
        <header>
            <nav className="navbar" onMouseEnter={navIn} onMouseLeave={navOut}>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="#landing" className="nav-link">
                            <span className="link-text logo-text">Home</span>
                            <span className="material-icons-round md-48 seaweed">emoji_food_beverage</span>
                        </a>
                    </li>
                    <li className="nav-item">
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
