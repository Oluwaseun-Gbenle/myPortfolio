import { ProgressBar } from "./progressBar";

const About = ({ aboutElement }) => {
  return (
    <>
      <div id="about" ref={aboutElement} className="pt-5 text-light">
        <div className="about-me container">
          <div className="section-title pt-4">
            <h2>About</h2>
          </div>

          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img
                src="https://i.ibb.co/6gbH6kB/useful.jpg"
                className="img-fluid rounded"
                alt="profile pic"
              />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Learn More About Me</h3>
              <div className="row">
                <div className="skills container">
                  <div className="row skills-content">
                    <div className="col-lg-6">
                      <ProgressBar
                        width={95}
                        skill={"HTML"}
                      />

                      <ProgressBar
                        width={90}
                        skill={"CSS"}
                      />

                      <ProgressBar
                        width={80}
                        skill={"JavaScript"}
                      />

                      <ProgressBar
                        width={59}
                        skill={"Node.js"}
                      />
                    </div>

                    <div className="col-lg-6">
                      <ProgressBar
                        width={85}
                        skill={"React"}
                      />

                      <ProgressBar
                        width={61}
                        skill={"React Native"}
                      />

                      <ProgressBar
                        width={64}
                        skill={"TypeScript"}
                      />

                      <ProgressBar
                        width={52}
                        skill={"Photoshop"}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <p>
                I am a highly motivated and results-driven developer with a
                passion for continuous learning, eager to take on new challenges
                and advance my skills in a dynamic, fast-paced environment. I am
                a dedicated and enthusiastic professional, committed to
                achieving high performance standards and delivering outstanding
                results. With a proven track record of success in leveraging my
                skills and experience to drive innovation and improve
                productivity, I am confident in my ability to make a valuable
                contribution to any team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
