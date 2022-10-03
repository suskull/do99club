import useViewport from 'hooks/common/useViewport';
import React from 'react';
import styles from './styles.module.scss';

const Download = () => {
  const { width }: { width: number } = useViewport();
  const isMobile: boolean = width < 576;

  const steps = [
    {
      id: 1,
      label: 'Step 1',
      value: 'Tải game và đăng ký tài khoản'
    },
    {
      id: 2,
      label: 'Step 2',
      value: 'Cài đặt Tele otp'
    },
    {
      id: 3,
      label: 'Step 3',
      value: 'Liên hệ với CSKH trong game để nhận code'
    },
    {
      id: 4,
      label: 'Hướng dẫn cài đặt file IPA',
      value: 'Nhận code thoe hướng dẫn trên Telegram CSKH VIP của game.'
    },
  ];

  const noteText = 'Với hệ thống telegram CSKH siêu VIP có 1 không 2 trên thị trường, ngoài được hỗ trợ trực tiếp siêu tốc bạn sẽ nhận được nhiều ưu đãi trực tiếp từ NPH.';

  return (
    <div className={styles.downloadContainer}>
      <div className={styles.title}>
        <img src="assets/images/giftcode_title.webp" alt="" />
      </div>
      <div className={styles.items}>
        {
          steps.map(step => (
            <div className={styles.item} key={step.id}>
              <div className={styles.label}>{step.label}</div>
              <div className={styles.value}>
                <span>- {step.value}</span>
              </div>
            </div>
          ))
        }
      </div>
      <span className={styles.note}>{noteText}</span>
    </div>
  );
};

export default Download;
