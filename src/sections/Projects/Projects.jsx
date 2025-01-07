import styles from './ProjectsStyles.module.css';
import tictac from '../../assets/tictac.png'
import weath from '../../assets/weath.png'
import password from '../../assets/password.png'
import countdown from '../../assets/count.png'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={tictac}
          link="https://arpit10singh.github.io/Tic-tac-toe/"
          h3="Tic Tac Toe"
          p="Game"
        />
        <ProjectCard
          src={weath}
          link="https://weather-app-steel-theta.vercel.app/"
          h3="Weather"
          p="App"
        />
        <ProjectCard
          src={password}
          link="https://arpit10singh.github.io/Password-generator/"
          h3="Password Generator"
          p="App"
        />
        <ProjectCard
          src={countdown}
          link="https://arpit10singh.github.io/Countdown-timer/"
          h3="Countdown Timer"
          p="App"
        />
      </div>
    </section>
  );
}

export default Projects;
