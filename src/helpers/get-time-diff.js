import moment from 'moment';

export const getTimeDiff = (then = moment().add('days', 1), now = moment()) => {
  const nowDate = moment(now);
  const thenDate = moment(then);
  const diff = thenDate.diff(nowDate);

  return [
    thenDate.diff(nowDate, 'days'),
    moment.duration(diff).hours(),
    moment.duration(diff).minutes()
  ]
}
