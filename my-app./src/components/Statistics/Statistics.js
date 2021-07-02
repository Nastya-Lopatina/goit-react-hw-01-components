import React from 'react';
import style from './statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ title , stats }) => (
    <section className={style.statistics}>

  {title && <h2 className={style.title}>{title}</h2>}

  <ul className={style.stat_list}>
      {stats.map((stat) => (
        <li className={style.item} key={stat.id}>
          <span className={style.label}>{stat.label}</span>
          <span className={style.percentage}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.defaultProps = {
    title: ''
}
  
Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
}

export default Statistics;