import React, {useState} from "react";
import maze from '../../assets/images/maze.png'
import triforce from '../../assets/images/triforce.png'
import kwitter from '../../assets/images/kwitter.png'
import haterade from '../../assets/images/haterade.png'

export const Project = () => {

    const [projects, setProjects] = useState([
        {
          id: "maze",
          title: "Link's Maze",
          pic: {maze},
          logo: {triforce},
          repo: "https://github.com/anapowa/maze",
          live: "https://anapowa.github.io/maze/",
          alt: "Maze with styling based on the game 'Ledend of Zelda' and a sprite of Link placed at the start",
        },
        {
            id: "haterade",
            title: "Twitter clone: Haterade",
            pic: {kwitter},
            logo: {haterade},
            // repo: "",
            live: "https://cryptic-spire-26871.herokuapp.com/",
            alt: "haterade logo followed by text field to write a 'tweet'"

        },
        // {
        //     id: "haterade",
        //     title: "Twitter clone: Haterade",
        //     pic: {kwitter},
        //     logo: {haterade},
        //     repo: "",
        //     live: "https://cryptic-spire-26871.herokuapp.com/",
        //     alt: "haterade logo followed by text field to write a 'tweet'"

        // }
      ])

      const repo = (project) => {
          if(project.repo){
            return(<a href={project.repo}>repo</a>)
          }
      }
    return (
        <div className="sec-container">
           {projects.map((project) => (
                <section key={project.id} id={project.id} className="card">
                    <div className="project-title">
                        <div className="title-group">
                            <img className="logito" src={Object.values(project.logo)[0]} alt="logo"/>
                            <h4>{project.title}</h4>
                        </div>
                        <div className="dropdown">
                            <div className="elipsis"></div>
                            <div className="dropdown-content" style={{right:"0"}}>
                                {repo(project)}
                                <a href={project.live}>live</a>
                            </div>
                        </div>
                        
                    </div>
                    <img
                        className="pic"
                        id={project.id}
                        src={Object.values(project.pic)[0]}
                        alt={project.alt}
                        style={{width: "100%", height: "18em"}}
                    />
                </section>
            ))} 
        </div>
    )
}
