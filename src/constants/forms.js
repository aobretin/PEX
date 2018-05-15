import moment from 'moment';
import {GLOBAL_NAMES} from 'CONSTANTS';
import {
  required,
  sameAs,
  minLength
} from 'vuelidate/lib/validators';

const {
  DATES_FORMATS: {
    ISO_FORMAT
  }
} = GLOBAL_NAMES;

export const FORMS = {
  PARTY_FORM: {
    values: {
      auto: '',
      time: '00:00',
      time1: '00:00',
      date: moment().format(ISO_FORMAT),
      date1: moment().format(ISO_FORMAT),
      data0: '',
      data1: '',
      data2: '',
      data3: false,
      radioVal: 'dog',
      radios: [
        {
          label: 'Dog',
          value: 'dog'
        },
        {
          label: 'Cat',
          value: 'cat'
        }
      ]
    },
    validations: {
      data0: {
        required
      },
      data1: {
        required
      },
      data2: {
        required
      }
    }
  }
}
