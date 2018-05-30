import moment from 'moment';
import {
  required,
  email,
  numeric
} from 'vuelidate/lib/validators';

export const FORMS = {
  PARTY_FORM: {
    values: {
      name: '',
      type: '',
      startDate: '',
      startTime: '',
      host: {
        firstName: '',
        lastName: '',
        mail: '',
        phone: '',
        social: '',
        address: ''
      },
      shipping: '',
      location: '',
      hashtag: '#'
    },
    validations: {
      name: {
        required
      },
      type: {
        required
      },
      startDate: {
        required
      },
      startTime: {
        required
      },
      host: {
        firstName: {
          required
        },
        lastName: {
          required
        },
        mail: {
          email
        },
        phone: {
          numeric
        }
      },
      shipping: {
        required
      }
    },
    radios: {
      host: {
        value: 'choose',
        inputs: [
          {
            name: 'choose',
            text: 'Choose Party Host',
            value: 'choose'
          },
          {
            name: 'self',
            text: 'I will host this Party',
            value: 'self'
          }
        ]
      },
      shipping: {
        value: 'host',
        inputs: [
          {
            name: 'host',
            text: 'Host Address',
            value: 'host'
          },
          {
            name: 'consultant',
            text: 'Consultant Address',
            value: 'consultant'
          },
          {
            name: 'other',
            text: 'Other Address',
            value: 'other'
          }
        ]
      },
      location: {
        value: 'host',
        inputs: [
          {
            name: 'hostLocation',
            text: 'Host Location',
            value: 'host'
          },
          {
            name: 'otherLocation',
            text: 'Other Location',
            value: 'other'
          }
        ]
      }
    },
    typeOptions: [
      {
        value: '',
        text: 'Select...'
      },
      {
        value: 'find',
        text: 'Find your Signature'
      },
      {
        value: 'classic',
        text: 'Classic Party'
      },
      {
        value: 'collected',
        text: 'Collected Party'
      },
      {
        value: 'virtual',
        text: 'Facebook / Virtual'
      }
    ]
  }
}
