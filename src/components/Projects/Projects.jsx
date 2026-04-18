import 'animate.css/animate.min.css';
import Tilt from 'react-parallax-tilt';
// import ScrollAnimation from 'react-animate-on-scroll';

import classes from './Projects.module.css';
import chess from '../images/chess.png';
import travel from '../images/travel-log.png';
import monorepo from '../images/monorepo.png';
import courseApp from '../images/courseApp.png';
import github from '../images/github.png';

const keyProjects = [
  {
    link: 'https://github.com/UlinduDakshitha',
    title: 'SMARTBIZ (Individual Project)',
    period: 'Jan-Mar 2026',
    role: 'Fullstack Developer',
    techStack: 'React.js, Java, Spring Boot, MySQL',
    desc: 'Built a full-stack ERP system with secure JWT authentication and 20+ RESTful APIs for complete CRUD operations.',
    image: chess,
    color: '#d5ebda',
    githubLink: 'https://github.com/UlinduDakshitha'
  },
  {
    link: 'https://github.com/UlinduDakshitha',
    title: 'INKMATCH (Individual, Ongoing)',
    period: 'Feb 2026-Present',
    role: 'Fullstack Developer',
    techStack: 'Next.js, Java, Spring Boot, MySQL',
    desc: 'Developing a tattoo marketplace with four-tier role-based access, booking APIs, consultation flow, and profile management.',
    image: monorepo,
    color: '#ffe4bf',
    githubLink: 'https://github.com/UlinduDakshitha'
  },
  {
    link: 'https://github.com/UlinduDakshitha',
    title: 'SUSLCORE (Group, Ongoing)',
    period: 'Jan 2026-Present',
    role: 'Backend Developer',
    techStack: 'Next.js, Node.js, Express.js, MySQL',
    desc: 'Building a university financial aid management platform serving 100+ students with collaborative Git workflows.',
    image: courseApp,
    color: '#cfe2ff',
    githubLink: 'https://github.com/UlinduDakshitha'
  },
  {
    link: 'https://github.com/UlinduDakshitha',
    title: 'PURE NATION (Group Project)',
    period: 'Jun-Dec 2025',
    role: 'Fullstack Developer',
    techStack: 'React.js, Node.js, Express.js, MongoDB, Sequelize',
    desc: 'Created a community platform to report environmental issues and coordinate clean-up activities across pilot communities.',
    image: travel,
    color: '#fcd5ce',
    githubLink: 'https://github.com/UlinduDakshitha'
  },
  {
    link: 'https://github.com/UlinduDakshitha',
    title: 'CEYLONCONNECT (Group Project)',
    period: 'Mar-Aug 2025',
    role: 'Frontend Lead',
    techStack: 'React.js, Node.js, Express.js, MongoDB, Prisma',
    desc: 'Led frontend development for a tourism platform connecting travelers with Sri Lankan destinations and services.',
    image: chess,
    color: '#e5e5e5',
    githubLink: 'https://github.com/UlinduDakshitha'
  }
];

export default function Projects() {
  const getProjectCard = (cardItem, idx) => {
    return (
      <Tilt
        perspective={900}
        glareEnable={true}
        glareMaxOpacity={0.45}
        key={`${cardItem.title}-${idx}`}
      >
        <li style={{ backgroundColor: cardItem.color, borderRadius: '21px' }}>
          <a href={cardItem.link} className={classes.card} target='_blank' rel='noreferrer'>
            <img src={cardItem.image} className={classes.card__image} alt='' />
          </a>
          <div
            onClick={() => {
              if (cardItem?.githubLink) window.open(cardItem?.githubLink, '_blank');
            }}
            className={classes.card__title__container}
          >
            <h3 className={classes.card__title}>{cardItem.title}</h3>
            {cardItem?.githubLink && <img src={github} className={classes.card__title__img} />}
          </div>
          <div className={classes.card__details}>
            <p>
              <b>Duration:</b> {cardItem.period}
            </p>
            <p>
              <b>Role:</b> {cardItem.role}
            </p>
            <p>
              <b>Tech:</b> {cardItem.techStack}
            </p>
            <p>{cardItem.desc}</p>
          </div>
        </li>
      </Tilt>
    );
  };

  return (
    <div className={classes.box} id='projects'>
      {/* <ScrollAnimation
        offset={0}
        animateIn='fadeInLeft'
        duration={2.4}
        animateOnce={true}
        initiallyVisible={true}
      > */}
      <span className={classes.head}>KEY PROJECTS</span>
      <h2 className={classes.heading}>FULL-STACK PROJECT HIGHLIGHTS</h2>
      <ul className={classes.cards}>
        {keyProjects.map((item, idx) => {
          return getProjectCard(item, idx);
        })}
      </ul>
      {/* </ScrollAnimation> */}
    </div>
  );
}
