import React from 'react';
import PropTypes from 'prop-types';
import styles from './PricingItem.module.css';

const PricingItem = ({ label, icon, capacity, price, description }) => (
  <div className={styles.pricingItem}>
    <i
      className={styles.icon}
      style={{ background: `bottom no-repeat url(${icon})` }}
    />
    <h2 className={[styles[label], styles.label].join(' ')}>{label}</h2>
    <p className={styles.capacity}>{capacity} Storage</p>
    <p className={styles.description}>{description}</p>
    <p className={styles.price}>${price}/MO</p>
    <button className={styles[`${label}Button`]}>Get Started</button>
  </div>
);

PricingItem.defaultProps = {
  price: 0,
};

PricingItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  capacity: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default PricingItem;
