import { Component } from 'react';
import classes from './Education.module.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

class Education extends Component {
  render() {
    return (
      <div className={classes.box} id='education'>
        <span className={classes.head}>MY JOURNEY</span>
        <section className={classes.container}>
          <div>
            <div className={classes.row}>
              <div className={classes.row_md_12}>
                <div className={classes.timeline_centered}>
                  <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
                      <MdWork />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Software Engineer (Undergraduate Trainee) <span>Present</span>
                      </h2>
                      <div className={classes.description}>
                        Building full-stack systems with React.js, Next.js, Node.js, Java Spring
                        Boot, and modern API-driven architecture.
                      </div>
                    </div>
                  </article>

                  <article className={classes.timeline_entry}>
                    <div className={classes.timeline_icon}>
                      <MdSchool />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Software Engineering Undergraduate <span>Colombo, Sri Lanka</span>
                      </h2>
                      <div className={classes.description}>
                        Focused on software design, backend engineering, database systems, and
                        practical product development.
                      </div>
                    </div>
                  </article>

                  <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`}>
                      <FaSchool />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Team Collaboration and Delivery <span>2025-Present</span>
                      </h2>
                      <div className={classes.description}>
                        Collaborated in individual and group projects using Git feature branches,
                        code reviews, and iterative development cycles.
                      </div>
                    </div>
                  </article>

                  <article>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`}>
                      <MdWork />
                    </div>
                    <div className={classes.label}>
                      <h2>Core Engineering Focus</h2>
                      <div className={classes.description}>
                        RESTful APIs, JWT authentication, role-based access control, and scalable
                        full-stack web applications.
                      </div>
                    </div>
                    <div className={classes.timeline_entry_inner}>
                      <div className={classes.timeline_icon_3 || classes.color_none}></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Education;
