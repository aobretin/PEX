import moment from 'moment';

export const checkIfDateBefore = (v = moment()) => {
  const date = moment(v),
        currentDate = moment();

  return date.isSameOrBefore(currentDate);
}
