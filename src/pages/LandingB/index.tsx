/* eslint-disable no-param-reassign */
import React from 'react';

import classNames from 'classnames';
import useViewport from 'hooks/common/useViewport';
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';


import styles from './styles.module.scss';

export default function LandingB() {

  const { width }: { width: number } = useViewport();
  const isMobile: boolean = width < 576;

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <div className={styles.landingBContainer}>
      <div className={styles.logo}>
        <img src='assets/images/icon.webp' className={styles.date} />
      </div>
      <div className={styles.text}>
        <img src='assets/images/text_center_1.webp' className={styles.text1} />
        <img src='assets/images/text_center_2.webp' className={styles.text2} />

      </div>
      <div className={styles.btn}>
        <img src='assets/images/btn_giftcode.webp' />
      </div>
      <div className={styles.slides}>
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
          <SwiperSlide>
            <div className={styles.slideCol}>
              <div className={styles.colItem}>
                <img src={'assets/images/group1/tai-xiu.webp'} />
                <img src={'assets/images/group1/ba-cay.webp'} />
              </div>
              <div className={styles.colItem}>
                <img src={'assets/images/group1/baucua.webp'} />
                <img src={'assets/images/group1/magic.webp'} />
              </div>
              <div className={classNames(styles.colItem, styles.special)}>
                <img src={'assets/images/group1/banca.webp'} />
              </div>
              <div className={styles.colItem}>
                <img src={'assets/images/group1/lo-de.webp'} />
                <img src={'assets/images/group1/mini-poker.webp'} />
              </div>
              <div className={styles.colItem}>
                <img src={'assets/images/group1/thien-dia.webp'} />
                <img src={'assets/images/group1/avenger.webp'} />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.slideCol}>
              <div className={styles.colItem}>
                <img src={'assets/images/group2/co-mo.webp'} />
              </div>
              <div className={styles.colItem}>
                <img src={'assets/images/group2/xa-thu.webp'} />
              </div>
              <div className={styles.colItem}>
                <img src={'assets/images/group2/lien-minh.webp'} />
              </div>
              <div className={styles.colItem}>
                <img src={'assets/images/group2/tam-quoc.webp'} />
              </div>
              <div className={styles.colItem}>
                <img src={'assets/images/group2/yu-gi.webp'} />
              </div>
            </div>
          </SwiperSlide>

          {
            !isMobile &&
            <>
              <div ref={navigationPrevRef} className={styles.btnPrev}>
                <img src="assets/images/arrow-left.webp" />
              </div>
              <div ref={navigationNextRef} className={styles.btnNext}>
                <img src="assets/images/arrow-right.webp" />
              </div>
            </>
          }


        </Swiper>
      </div>

    </div>
  );
}
