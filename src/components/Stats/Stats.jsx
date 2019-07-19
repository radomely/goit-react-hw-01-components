import React from 'react';
import styles from './Stats.module.css';

const Stats = ({ title, stats }) => (
  <section className={styles.stats - section}>
    <h2 className={styles.title}>Upload stats</h2>

    <ul className={styles.stat - list}>
      <li className={styles.item}>
        <span className={styles.label}>.docx</span>
        <span className={styles.percentage}>4%</span>
      </li>
      <li className={styles.item}>
        <span className={styles.label}>.mp3</span>
        <span className={styles.percentage}>14%</span>
      </li>
      <li className={styles.item}>
        <span className={styles.label}>.pdf</span>
        <span className={styles.percentage}>41%</span>
      </li>
      <li className={styles.item}>
        <span className={styles.label}>.mp4</span>
        <span className={styles.percentage}>12%</span>
      </li>
    </ul>
  </section>
);

export default Stats;
