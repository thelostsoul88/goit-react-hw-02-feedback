import css from '../app/Feedback.module.css';
import PropTypes from 'prop-types';

const Statistics = ({
  state: { good, neutral, bad },
  total,
  positivePercentage,
}) => {
  return (
    <ul className={css.statList}>
      <li className={css.statItem}>
        <p className={css.statP}>Good: {good}</p>
      </li>
      <li className={css.statItem}>
        <p className={css.statP}>Neutral: {neutral}</p>
      </li>
      <li className={css.statItem}>
        <p className={css.statP}>Bad: {bad}</p>
      </li>
      <li className={css.statItem}>
        <p className={css.statP}>Total: {total}</p>
      </li>
      <li className={css.statItem}>
        <p className={css.statP}>Positive feedback: {positivePercentage}</p>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
