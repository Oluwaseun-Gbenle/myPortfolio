import { ProgressBar } from "./utils/progressBar";

const About = ({ aboutElement }) => {
  return (
    <>
      <div id="about" ref={aboutElement} className="pt-5 text-light">
        <div className="about-me container">
          <div className="section-title py-4 text-center">
            <h2>About</h2>
          </div>

          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img src="https://i.ibb.co/pJtCYj1/IMG-0285.jpg" className="img-fluid rounded" alt="profile pic" />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Learn More About Me</h3>
              <div className="row">
                <div className="skills container">
                  <div className="row skills-content">
                    <div className="col-lg-6">
                      <ProgressBar width={98} skill={"HTML"} />

                      <ProgressBar width={95} skill={"CSS"} />

                      <ProgressBar width={90} skill={"JavaScript"} />

                      <ProgressBar width={85} skill={"TypeScript"} />

                      <ProgressBar width={94} skill={"React"} />

                      <ProgressBar width={90} skill={"React Native"} />

                      <ProgressBar width={85} skill={"Redux"} />
                    </div>

                    <div className="col-lg-6">

                      <ProgressBar width={88} skill={"Tailwind"} />

                      <ProgressBar width={82} skill={"Bootstrap"} />

                      <ProgressBar width={80} skill={"Express.js"} />

                      <ProgressBar width={80} skill={"MongoDB"} />

                      <ProgressBar width={85} skill={"Next.js"} />

                      <ProgressBar width={82} skill={"Node.js"} />

                      <ProgressBar width={80} skill={"C#"} />
                    </div>
                  </div>
                </div>
              </div>
              <p className="py-3">
                I am a highly motivated and results-driven developer with a passion for continuous learning, eager to take on new challenges and
                advance my skills in a dynamic, fast-paced environment. I am a dedicated and enthusiastic professional, committed to achieving high
                performance standards and delivering outstanding results. With a proven track record of success in leveraging my skills and experience
                to drive innovation and improve productivity, I am confident in my ability to make a valuable contribution to any team.
              </p>
              <a className="resume-btn" href="/Seun Gbenle's Dev CV Updated.docx.pdf" download target="_blank" rel="noreferrer">
                <i className="mx-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" viewBox="0 0 24 24">
                    <path d="M12 21l-8-9h6v-12h4v12h6l-8 9zm9-1v2h-18v-2h-2v4h22v-4h-2z" />
                  </svg>
                </i>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
