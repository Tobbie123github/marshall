import "./Portfolio.css";
import { EffectFade, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { portfolio } from "../../data";
import theme_pattern from "../../assets/theme_pattern.svg";
import { Link } from 'react-router-dom';
const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container portfolio">
        <div className="portfolio_head">
          <h1>My Works</h1>
          <img src={theme_pattern} alt="theme" />
        </div>

        <Swiper
          className="all_swiper"
          modules={[EffectFade, EffectCoverflow]}
          spaceBetween={40}
          effect={"coverflow"}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
        >
          {portfolio.map(({ id, image }) => (
            <SwiperSlide className="portfolio_card" key={id}>
              <img src={image} alt="pics" />
              <div>
                <Link to={`/portfolio/${id}`}>Read More</Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
