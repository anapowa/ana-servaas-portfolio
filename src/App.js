import React from 'react';
import {useState} from "react"
import { Nav, Footer, Section, Project } from "./components/index";
import logo from './assets/images/anaServaas_logo_transparent.png'
import ana from './assets/images/iheartcoding.gif'
function App() {
  const [sections, setSections] = useState([
    {
      id: "landing",
      content: 
        <div>
          <img 
            id="ana-logo"
            src={logo}
            alt="Ana Servaas Software Developer, 2020,
            name, role, year placed around line drawing of flowering plant grounded by a set of anchor tags"
          />
          <p id="ana-values">Anchored in creativity, communication, cooperation and courage</p>
          <Footer />
        </div>
    }, 
    {
      id: "projects",
      title: "Projects",
      content: 
      <Project />
    },
    {
      id: "about",
      title: "About Me",
      content: 
      <div>
        <h4>
            It took a leap of faith and the support of my family to embark on this journey.
        </h4>
        <p>
            After the most difficult year most of us have experienced, a lot of lines of code
            and who knows how many cups of tea, I can confidently say:&nbsp; 
            <strong><q> 
                Hello, my name is Ana Servaas, and 
                <em> I am a software developer</em>.
            </q></strong>
        </p>
        <p>
            I decided to take a leave from the workforce in order to complete a one year
            Software Engineering program at <a href="https://www.kenzie.academy/">Kenzie Academy</a>. 
            I am thankful for the time I have been able to commit to further my education 
            as it has been invaluable to my professional and personal growth. 
        </p>
        <p>
            Through code, I want to build pragmatic and creative solutions to challenging problems.
            Over the past year I've developed my skills to do just that. I've gained experience 
            with JavaScript, React, Python and Django among other technologies.
            I've discovered that debugging is an essential skill, not only in coding but
            in daily life. Most importantly, I've learned that iteration is akin to growth and
            without change there's no improvement.
        </p>
        <p>
            Aside from coding, I'm interested in reading about Art History, long distance running,
            practicing yoga, artistic endeavors such as painting and glass blowing, and more recently
            cooking and gardening.
        </p>
        <p id="call2act">
            Thank you for stopping by, let's <a href="#ana-values">connect</a> and have a conversation soon!
        </p>
      </div>
    },   
  ])

  return (
    <div>
      <Nav />
      <main className="main">
        <Section sections={sections} />
      </main>
      <footer id="pie">
      <div id="ana-name">
        <img id="ana-gif" src={ana} alt="View of the ocean, software engineer with animated sunglasses, text 'i heart coding' is shown above her outstreched arms."/>
        Ana SerVaas 🤓⭐️
        </div>
      </footer>
    </div>
  );
}

export default App;
