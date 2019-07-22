import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stats.module.css';

const Stats = ({ title, stats }) => (
  <section className={styles.statsSection}>
    {title && <h2 className={styles.title}>{title}</h2>}

    <ul className={styles.statList}>
      {stats.map(stat => (
        <li
          key={stat.id}
          className={styles.item}
          style={{
            backgroundColor: `rgb(${(Math.random() * 200) <<
              0},${(Math.random() * 200) << 0},${(Math.random() * 200) << 0})`,
          }}
        >
          <span className={styles.label}> {stat.label} </span>
          <span className={styles.percentage}> {stat.percentage}% </span>
        </li>
      ))}
    </ul>
  </section>
);
Stats.defaultProps = {
  title: null,
};

Stats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Stats;
