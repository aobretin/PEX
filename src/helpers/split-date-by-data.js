import moment from 'moment';

export const splitDateByData = (date = moment()) => {
  return [
    date.days(),
    date.hours(),
    date.minutes()
  ]
}
