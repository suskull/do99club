import React from 'react';
import useViewport from 'hooks/common/useViewport';

import styles from './styles.module.scss';

const LandingC = () => {

  const { width }: { width: number } = useViewport();
  const isMobile: boolean = width < 576;

  return (
    <div className={styles.landingCContainer}>
      <div className={'d-flex flex-column align-items-center gap-3'}>
        <div className={styles.top}>
          <div className={styles.groupLeft}>
            <img src="assets/images/icon-tele.webp" alt="" width={32} height={24} />
            <div className={styles.breadCrumb} />
            <span>TELE</span>
          </div>

          <div className={styles.group}>
            <img src="assets/images/icon.webp" alt="" />
          </div>

          <div className={styles.groupRight}>
            <span>GROUP</span>
            <div className={styles.breadCrumb} />
            <img src="assets/images/icon-group.webp" alt="" width={36} height={24} />
          </div>
        </div>
        <div className={styles.text}>
          <img src="assets/images/text_landing_c.webp" alt="" />
        </div>
        <div className={styles.btnContainer}>
          <div className={styles.btn}>
            <img src="assets/images/download-android.webp" alt="" />
          </div>
          <div className={styles.btn}>
            <img src="assets/images/download-ios.webp" alt="" />
          </div>
          <div className={styles.btn}>
            <img src="assets/images/playnow.webp" alt="" />
          </div>
        </div>
        <div className={styles.content}>
          <img src="assets/images/content_landing_c.webp" alt="" />
        </div>

      </div>

    </div>
  );
};

export default LandingC;
