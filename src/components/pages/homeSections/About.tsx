import scss from "./About.module.scss";

const About = () => {
  return (
    <section id="about" className={scss.About}>
      <div className="container">
        <div className={scss.content}>
          <h2>Abouut</h2>
        </div>
      </div>
    </section>
  );
};

export default About;
