import css from '../app/Feedback.module.css';
import PropTypes from 'prop-types';
import variant from 'components/_util';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <ul className={css.btnList}>
      <li className={css.btnItem}>
        <button type="button" onClick={() => onLeaveFeedback(variant.good)}>
          Good
        </button>
      </li>
      <li className={css.btnItem}>
        <button type="button" onClick={() => onLeaveFeedback(variant.neutral)}>
          Nutral
        </button>
      </li>
      <li className={css.btnItem}>
        <button type="button" onClick={() => onLeaveFeedback(variant.bad)}>
          Bad
        </button>
      </li>
    </ul>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
