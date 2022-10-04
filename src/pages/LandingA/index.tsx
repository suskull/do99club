/* eslint-disable no-param-reassign */
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from 'components/atoms/Button';
import { useAppSelector } from 'store';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useViewport from 'hooks/common/useViewport';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './styles.module.scss';

export default function LandingA() {
  const { t } = useTranslation();
  const { width }: { width: number } = useViewport();
  const isMobile: boolean = width < 576;

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  const startTime = '2022/10/13 10:00:00';
  // prefix 14/10/2022

  const images = [
    'assets/images/m-1.webp',
    'assets/images/m-2.webp',
    'assets/images/m-3.webp',
    'assets/images/m-4.webp',
    'assets/images/m-5.webp',
    'assets/images/m-6.webp',
    'assets/images/m-7.webp',
    'assets/images/m-8.webp',
    'assets/images/m-9.webp',
    'assets/images/m-10.webp',
    'assets/images/m-11.webp',
    'assets/images/m-12.webp',
    'assets/images/m-13.webp',
    'assets/images/m-14.webp'
  ];

  return (
    <div className={styles.landingContainer}>
      {
        isMobile
          ? (
            <div className="d-flex">
              <Col xs={12} className={styles.contentContainer}>
                <img src='assets/images/icon.webp' className={styles.logo} />
                <div className={'d-flex flex-column align-items-center gap-2'}>
                  <img src='assets/images/start_date.webp' className={styles.date} />
                  <img src='assets/images/end_date.webp' className={styles.date} />
                </div>
                <div className={styles.countDownContainer}>
                  <FlipClockCountdown
                    to={new Date(startTime).getTime() + 24 * 3600 * 1000}
                    // className='flip-clock'
                    labels={['Ngày', 'Giờ', 'Phút', 'Giây']}
                    duration={1}
                  />
                </div>
                <img src='assets/images/downloadgame.webp' className={styles.btnDownload} />
                <div className={styles.form}>
                  <form id="form-submit" onSubmit={(e: any) => e.preventDefault()} >
                    <input
                      style={{
                        fontFamily: 'Arial, FontAwesome'
                      }}
                      className={styles.input}
                      type="text" placeholder="&#xf007; Tên tài khoản"
                      required
                    />

                    <input className={styles.input} type="text" placeholder="&#xf023; Mật khẩu"
                      required />

                    <input className={styles.input} type="text" placeholder="&#xf023; Nhập lại mật khẩu"
                      required />
                    <input id="submit-input" type="submit" value="ĐĂNG KÝ" className={styles.btnSubmit} />
                  </form>
                </div>
                <div className={styles.social}>
                  <img src='assets/images/facebook.webp' className={styles.socialIcon} />
                  <img src='assets/images/telegram.webp' className={styles.socialIcon} />
                </div>
              </Col>
            </div>
          )
          : (
            <div className="d-flex">
              <Col md={4} className={styles.registerContainer}>
                <div className={styles.form}>
                  <form id="form-submit" onSubmit={(e: any) => e.preventDefault()} >
                    <input
                      style={{
                        fontFamily: 'Arial, FontAwesome'
                      }}
                      className={styles.input}
                      type="text" placeholder="&#xf007; Tên tài khoản"
                      required
                    />

                    <input className={styles.input} type="text" placeholder="&#xf023; Mật khẩu"
                      required />

                    <input className={styles.input} type="text" placeholder="&#xf023; Nhập lại mật khẩu"
                      required />
                    <input id="submit-input" type="submit" value="ĐĂNG KÝ" className={styles.btnSubmit} />
                  </form>
                </div>
              </Col>
              <Col md={4} className={styles.contentContainer}>
                <img src='assets/images/icon.webp' className={styles.logo} />
                <div className={'d-flex flex-column align-items-center gap-2'}>
                  <img src='assets/images/start_date.webp' className={styles.date} />
                  <img src='assets/images/end_date.webp' className={styles.date} />
                </div>
                <div className={styles.countDownContainer}>
                  <FlipClockCountdown
                    to={new Date(startTime).getTime() + 24 * 3600 * 1000 + 5000}
                    // className='flip-clock'
                    labels={['Ngày', 'Giờ', 'Phút', 'Giây']}
                    duration={1}
                  />
                </div>
                <div className={styles.slide}>
                  <div className={styles.slideContainer}>

                    <Swiper
                      loop={true}
                      loopFillGroupWithBlank={true}
                      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                      navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                      }}
                      onBeforeInit={(swiper: any) => {
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                      }}
                      autoplay={{
                        delay: 3000
                      }}
                      slidesPerView={1}
                    >
                      {
                        images.map((image, index) => <SwiperSlide key={index}>
                          <div className="d-flex align-items-center justify-content-center">
                            <div className={styles.colItem}>
                              <img src={image} />
                            </div>
                          </div>
                        </SwiperSlide>)
                      }



                      <div ref={navigationPrevRef} className={styles.btnPrev}>
                        <img src="assets/images/arrow-left.webp" />
                      </div>
                      <div ref={navigationNextRef} className={styles.btnNext}>
                        <img src="assets/images/arrow-right.webp" />
                      </div>

                    </Swiper>
                  </div>
                  <img src='assets/images/downloadgame.webp' className={styles.btnDownload} />
                </div>
              </Col>
              <Col md={4} className={styles.socialContainer}>
                <div className={styles.social}>
                  <img src='assets/images/facebook-mobile.webp' className={styles.socialIcon} />
                  <img src='assets/images/telegram-mobile.webp' className={styles.socialIcon} />
                </div>
              </Col>

            </div>
          )
      }

    </div>
  );
}
