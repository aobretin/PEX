export const GLOBAL_NAMES = {
  APP_NAME: 'PEX',

  DATES_FORMATS: {
    SHOW_FORMAT: 'dd/MM/yyyy',
    TIME_SHOW_FORMAT: 'HH:MM',
    ISO_FORMAT : 'YYYY-MM-DD',
    TIME_CONFIG: {
      start: '00:00',
      step : '00:30',
      end  : '24:00'
    },
    TIME_DEFAULT: '00:00'
  },

  PARTY_STATUSES: {
    '0': 'Awaiting Delivery',
    '2': 'Complete',
    '3': 'Cancelled'
  },

  MODULES_NAMES: {
    PARTIES_LIST: {
      name: 'Parties-list',
      components: {
        _PARTY_LIST: 'List'
      }
    },
    PARTY_FORM_DEMO: {
      name: 'Party-form-demo',
      components: {
        _ADDRESS_BOOK_USERS : 'Address-book-users',
        _PICKERS            : 'Pickers',
        _HOST_ADDRESS_FORM  : 'Host-address-form',
        _SHIPPING_ADDRESS   : 'Shipping-address',
        _PARTY_LOCATION     : 'Party-location'
      }
    },
    DASHBOARD_WRAPPER: {
      name: 'Dashboard-wrapper',
      components: {
        _HOST_DETAILS: 'Host-details',
        _PARTY_STATISTICS: 'Party-statistics',
        _TASKLIST: 'Tasklist'
      }
    }
  },

  PAGES_NAMES: {
    MY_PARTIES: 'My-parties',
    PARTY_FORM: 'Party-form',
    PARTY     : 'Party',
    DASHBOARD : 'Dashboard',
    GUESTLIST : 'Guestlist'
  },

  REUSABLES: {
    CIRCLE_LOADER_GENERATOR : 'Circle-loader-generator',
    DIALOG_GENERATOR        : 'Dialog-generator',
    COUNTER                 : 'Counter',
    CONTENT_PLACEHOLDER     : 'Content-placeholder',
    INPUT_GENERATOR         : 'Input-generator',
    SELECT_GENERATOR        : 'Select-generator',
    DATEPICKER_GENERATOR    : 'Datepicker-generator',
    AUTOCOMPLETE_GENERATOR  : 'Autocomplete-generator',
    TIMEPICKER_GENERATOR    : 'Timepicker-generator'
  }
}
