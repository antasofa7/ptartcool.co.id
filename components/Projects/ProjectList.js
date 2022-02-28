import ProjectItem from './ProjectItem';
import styles from './Projects.module.css';

export default function ProjectList() {
  return (
    <section className={styles.projects} id="projects">
        <div className="container">
            <div className="wrapper-title">
                <h1 className="title">
                    Projects
                </h1>
            </div>
            <div className={styles.wrapper}>
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
            </div>
        </div>
    </section>
  );
}
