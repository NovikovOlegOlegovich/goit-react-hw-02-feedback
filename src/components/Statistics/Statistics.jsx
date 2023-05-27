import PropTypes from 'prop-types';
import { StatList, StatItem, StatDescrip } from './Statistics.styled';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <>
      <StatList>
        <StatItem>
          <StatDescrip>Good : {good}</StatDescrip>
        </StatItem>

        <StatItem>
          <StatDescrip>Neutral : {neutral}</StatDescrip>
        </StatItem>

        <StatItem>
          <StatDescrip>Bad : {bad}</StatDescrip>
        </StatItem>

        <StatItem>
          <StatDescrip>Total : {total}</StatDescrip>
        </StatItem>

        <StatItem>
          <StatDescrip>Positiv feetback : {positivePercentage}%</StatDescrip>
        </StatItem>
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
