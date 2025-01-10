import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nidhi Parikh </span>
            from <span className="purple"> Vadodara, Gujarat.</span>
             <br />

             I am a Frontend Developer and UI/UX Designer with a B.Tech in Computer Science & Engineering and hands-on experience as a Full Stack Developer (React & Node) during my internship at Rishabh Soft Pvt. Ltd. I specialize in building dynamic, responsive websites using HTML, CSS, JavaScript, and React.js, while creating intuitive designs with Figma. Passionate about merging functionality with aesthetics, I'm eager to contribute fresh ideas and innovative solutions. Looking for opportunities to collaborate and make an impact through design and development. Let's create something amazing together!

            <br /> 

            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Nidhi Parikh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
