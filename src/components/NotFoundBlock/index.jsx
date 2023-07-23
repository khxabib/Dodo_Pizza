import React from 'react';

import styles from './NotFoundBlock.module.scss';
const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span> :( </span>
        <br />
        Нечего не найдено
      </h1>
      <p className={styles.description}>
        К соженений данная страница отсутсвует в нашем интернет-магазине
      </p>
    </div>
  );
};

export default NotFoundBlock;
