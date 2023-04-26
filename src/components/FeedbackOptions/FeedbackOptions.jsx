// import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';
import { STATUSES } from 'components/helpers/const';

export default function FeedbackOptions(props) {
  const { callback } = props;
  return (
    <div>
      {STATUSES.map(status => (
        <button key={status} onClick={() => callback(status)}>
          {status}
        </button>
      ))}
    </div>
  );
}
FeedbackOptions.propTypes = {
  callback: PropTypes.func,
};
