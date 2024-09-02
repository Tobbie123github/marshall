import "./Hero.css";
import { ReactTyped } from "react-typed";
import dp from "../../assets/dp.png";
import pdfFile from "../../assets/MY_RESUME.pdf";
const Hero = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = pdfFile;
        link.download = 'My Resume';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
    
  return (
    <section id='home'>
      <div className="hero_container container">
        <div className="img">
          <img src={dp} alt="Profile" />
        </div>

        <div className="heading">
          <h1>
            I&apos;m <span>Abegunde Emmanuel</span>
          </h1>
          <br />

          <h1 id="disp">
            <ReactTyped
              strings={[
                "WordPress Designer",
                "Frontend Developer",
                "PHP Developer",
              ]}
              typeSpeed={60}
              backSpeed={60}
              loop
            />
          </h1>
        </div>
        <p>
          I utilize the power frontend development to solve real-world
          challenges through innovative digital solutions.
        </p>

        <div className="info">
          {/* <div className="connect">Connect with me</div> */}
          <div onClick={handleDownload} className="resume">My Resume</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
