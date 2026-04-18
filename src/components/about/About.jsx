import { Component } from 'react';
import classes from './About.module.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

class About extends Component {
  render() {
    return (
      <div className={classes.box} id='about'>
        {/* <ScrollAnimation
          offset={0}
          animateIn='fadeInLeft'
          duration={2.4}
          animateOnce={true}
          initiallyVisible={true}
        > */}
        <span className={classes.head}>PROFILE</span>
        <h2 className={classes.heading}>Motivated Software Engineering Undergraduate</h2>
        <div className={classes.About}>
          <p>
            I am <b>Ulindu Dakshitha Bandara</b>, a software engineering undergraduate with hands-on
            experience in full-stack web development, RESTful API design, and system architecture.
          </p>
          <p className={classes.br}>
            I have built projects using React, Next.js, Node.js, and Spring Boot with both SQL and
            NoSQL databases. I enjoy developing practical products including ERP systems,
            marketplaces, and community applications while continuously improving teamwork,
            communication, and problem-solving skills.
          </p>
        </div>
        {/* </ScrollAnimation> */}
      </div>
    );
  }
}

export default About;
