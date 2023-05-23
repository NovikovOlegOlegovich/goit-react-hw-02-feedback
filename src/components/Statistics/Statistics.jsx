import PropTypes from 'prop-types';
import { StatList, StatItem, StatDescrip } from './Statistics.styled';
import Notification from '../Notification';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <>
      {total === 0 && <Notification message="There is no feedback" />}
      <StatList>
        {good > 0 && (
          <StatItem>
            <StatDescrip>Good : {good}</StatDescrip>
          </StatItem>
        )}
        {neutral > 0 && (
          <StatItem>
            <StatDescrip>Neutral : {neutral}</StatDescrip>
          </StatItem>
        )}
        {bad > 0 && (
          <StatItem>
            <StatDescrip>Bad : {bad}</StatDescrip>
          </StatItem>
        )}

        {total > 0 && (
          <StatItem>
            <StatDescrip>Total : {total}</StatDescrip>
          </StatItem>
        )}

        {positivePercentage > 0 && (
          <StatItem>
            <StatDescrip>Positiv feetback : {positivePercentage}%</StatDescrip>
          </StatItem>
        )}
      </StatList>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
