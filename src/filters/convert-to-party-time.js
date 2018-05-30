import moment from 'moment';

export const convertToPartyTime = (v = moment()) => {
  const date = moment(v);
  return `${date.format('dddd')} ${date.format('D')} ${date.format('MMMM')} ${date.format('YYYY')}`;
}
