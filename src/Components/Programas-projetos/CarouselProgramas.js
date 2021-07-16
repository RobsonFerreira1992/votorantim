import React from 'react'
import Slider from "react-slick";
import ThumbCards from '../../imagens/thumb-cards.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './CarouselProgramas.module.css';

class SimpleSlider extends React.Component {
  render() {
    var settingsProgramas = {
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      className: 'notes-slider',
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
                  arrows: false,
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
      ]
    };
    return (
      <Slider {...settingsProgramas} className={styles.slickFlip}>
              <div className="cards">
                <div className={styles.flipCard}>
                  <div className={styles.flipCardInner}>
                    <div className={styles.flipCardFront}>
                      <h3>Projeto Alfa</h3>
                      <img src={ThumbCards} alt="Avatar" className="img-fluid"/>
                    </div>

                    <div className={styles.flipCardBack}>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, eaque aspernatur aliquam ab eligendi asperiores et quibusdam, voluptates consequatur voluptatum saepe ipsa vitae accusamus quis nostrum ducimus quod. Quisquam, esse! </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cards">
                <div className={styles.flipCard}>
                  <div className={styles.flipCardInner}>
                    <div className={styles.flipCardFront}>
                      <h3>Projeto Alfa</h3>
                      <img src={ThumbCards} alt="Avatar" className="img-fluid"/>
                    </div>

                    <div className={styles.flipCardBack}>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, eaque aspernatur aliquam ab eligendi asperiores et quibusdam, voluptates consequatur voluptatum saepe ipsa vitae accusamus quis nostrum ducimus quod. Quisquam, esse! </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cards">
                <div className={styles.flipCard}>
                  <div className={styles.flipCardInner}>
                    <div className={styles.flipCardFront}>
                      <h3>Projeto Alfa</h3>
                      <img src={ThumbCards} alt="Avatar" className="img-fluid"/>
                    </div>

                    <div className={styles.flipCardBack}>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, eaque aspernatur aliquam ab eligendi asperiores et quibusdam, voluptates consequatur voluptatum saepe ipsa vitae accusamus quis nostrum ducimus quod. Quisquam, esse! </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cards">
                <div className={styles.flipCard}>
                  <div className={styles.flipCardInner}>
                    <div className={styles.flipCardFront}>
                      <h3>Projeto Alfa</h3>
                      <img src={ThumbCards} alt="Avatar" className="img-fluid"/>
                    </div>

                    <div className={styles.flipCardBack}>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, eaque aspernatur aliquam ab eligendi asperiores et quibusdam, voluptates consequatur voluptatum saepe ipsa vitae accusamus quis nostrum ducimus quod. Quisquam, esse! </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cards">
                <div className={styles.flipCard}>
                  <div className={styles.flipCardInner}>
                    <div className={styles.flipCardFront}>
                      <h3>Projeto Alfa</h3>
                      <img src={ThumbCards} alt="Avatar" className="img-fluid"/>
                    </div>

                    <div className={styles.flipCardBack}>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, eaque aspernatur aliquam ab eligendi asperiores et quibusdam, voluptates consequatur voluptatum saepe ipsa vitae accusamus quis nostrum ducimus quod. Quisquam, esse! </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cards">
                <div className={styles.flipCard}>
                  <div className={styles.flipCardInner}>
                    <div className={styles.flipCardFront}>
                      <h3>Projeto Alfa</h3>
                      <img src={ThumbCards} alt="Avatar" className="img-fluid"/>
                    </div>

                    <div className={styles.flipCardBack}>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, eaque aspernatur aliquam ab eligendi asperiores et quibusdam, voluptates consequatur voluptatum saepe ipsa vitae accusamus quis nostrum ducimus quod. Quisquam, esse! </p>
                    </div>
                  </div>
                </div>
              </div>
      </Slider>
    );
  }
}
export default SimpleSlider;

