import classes from './Interest.module.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

export default function Interest() {
  return (
    <div className={classes.box} id='interest'>
      {/* <ScrollAnimation
        offset={0}
        animateIn='fadeInLeft'
        duration={2.4}
        animateOnce={true}
        initiallyVisible={true}
      > */}
      <span className={classes.head}>SKILLS</span>
      <h2 className={classes.heading}>TECHNICAL AND PROFESSIONAL STRENGTHS</h2>
      <div className={classes.Interest}>
        {/* <ScrollAnimation
            offset={0}
            animateIn='fadeInLeft'
            duration={2.4}
            animateOnce={true}
            initiallyVisible={true}
          > */}
        <div className={classes.web}>
          <h3>Technical Skills</h3>
          <p>
            Languages: Java, JavaScript, TypeScript, SQL. Frameworks: React.js, Next.js, Node.js,
            Spring Boot. Databases: MySQL, MongoDB.
          </p>
        </div>
        {/* </ScrollAnimation>
          <ScrollAnimation
            offset={0}
            animateIn='fadeInLeft'
            duration={2.4}
            animateOnce={true}
            initiallyVisible={true}
          > */}
        <div className={classes.app}>
          <h3>Tools and Platforms</h3>
          <p>
            Git, GitHub, REST APIs, JWT Authentication, AWS, Postman. Comfortable with collaborative
            workflows, modular codebases, and API-first development.
          </p>
        </div>
        {/* </ScrollAnimation>
          <ScrollAnimation
            offset={0}
            animateIn='fadeInLeft'
            duration={2.4}
            animateOnce={true}
            initiallyVisible={true}
          > */}
        <div className={classes.other}>
          <h3>Soft Skills</h3>
          <p>
            Leadership, teamwork, problem solving, communication, and time management with a strong
            willingness to learn and contribute in fast-moving teams.
          </p>
        </div>
        {/* </ScrollAnimation> */}
      </div>
      {/* </ScrollAnimation> */}
    </div>
  );
}
