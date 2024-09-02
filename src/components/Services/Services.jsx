import "./Services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import wordpress from "../../assets/wordpress.svg";
import react from "../../assets/react.svg";
import php from "../../assets/php.png";
import postman from "../../assets/postman.svg";

const Services = () => {
  return (
    <section id="services">
      <div className="container services">
        <div className="services_head">
          <h1>Services</h1>
          <img src={theme_pattern} alt={theme_pattern} />
        </div>

        <div className="card">
          <div className="skill">
            <h2>
              <span>
                <img src={wordpress} alt={wordpress}/>
              </span>
              WordPress Design
            </h2>
            <p>
            Specializing in crafting custom WordPress websites that are not only visually appealing but also highly functional. Whether you need a personal blog, an e-commerce platform, or a corporate website, I ensure your WordPress site is optimized for performance, security, and user experience. From theme customization to plugin integration, I deliver solutions that drive results.
            </p>
          </div>

          <div className="skill">
            <h2>
              <span>
                <img src={react} alt={react}/>
              </span>
              Frontend Development
            </h2>
            <p>
            Transforming ideas into interactive, responsive, and user-friendly interfaces. Leveraging the latest technologies like React, HTML5, CSS3, and JavaScript, I create user experiences that captivate and engage visitors.
            </p>
          </div>

          <div className="skill">
            <h2>
              <span>
                <img src={php} alt={php}/>
              </span>
              Database Management
            </h2>
            <p>
            Ensuring your data is structured, secure, and accessible. With expertise in database management systems like MySQL, PostgreSQL, and SQLite, I design and optimize databases that support complex applications. Whether it's for a content management system, an e-commerce site, or a custom application, I ensure your database performs efficiently and reliably.
            </p>
          </div>

          <div className="skill">
            <h2>
              <span>
                <img src={postman} alt={postman}/>
              </span>
              API Integration
            </h2>
            <p>
            I specialize in integrating APIs into any type of website, whether it's a custom-built solution, a content management system (CMS), or a customer relationship management (CRM) platform. From connecting third-party services to embedding payment gateways, I ensure seamless and secure integration that enhances your website's functionality and user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
