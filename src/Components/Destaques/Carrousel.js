import React from 'react';
import Slider from "react-slick";
import imgDestaque1 from '../../imagens/destaque-1.svg';
import imgDestaque2 from '../../imagens/destaque-2.svg';
import imgDestaque3 from '../../imagens/destaque-3.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Carrousel.module.css';


class SimpleSlider extends React.Component {

  
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,

      responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: false
              }
          },
          {
              breakpoint: 992,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
              }
          },
          {
              breakpoint: 768,
              settings: {
                  dots:true,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false,
              }
          }
      ]
    };
    return (
      <Slider {...settings} className={styles.slickDestaques}>
        <div className={styles.chapter}>
          <img src={imgDestaque1} alt="Texto" className="img-fluid"/>
          <h3>78 milhões</h3>
          <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum </p>
        </div>

        <div className={styles.chapter}>
          <img src={imgDestaque2} alt="Texto" className="img-fluid"/>
          <h3>10.728 pessoas impactadas</h3>
          <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum </p>
        </div>

        <div className={styles.chapter}>
          <img src={imgDestaque3} alt="Texto" className="img-fluid"/>
          <h3>61v milhões</h3>
          <p>e nossa energia limpa</p>
        </div>
        <div className={styles.chapter}>
          <img src={imgDestaque1} alt="Texto" className="img-fluid"/>
          <h3>78 milhões</h3>
          <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum </p>
        </div>

        <div className={styles.chapter}>
          <img src={imgDestaque2} alt="Texto" className="img-fluid"/>
          <h3>10.728 pessoas impactadas</h3>
          <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum </p>
        </div>

        <div className={styles.chapter}>
          <img src={imgDestaque3} alt="Texto" className="img-fluid"/>
          <h3>61v milhões</h3>
          <p>e nossa energia limpa</p>
        </div>
      </Slider>
    );
  }
}
export default SimpleSlider;




