import {mapGetters, mapActions} from 'vuex';

import {
  buildModuleAliases
} from 'helpers';

import Service from './service';
import store from './store';

import AddressBookUsers from './components/Address-book-users';
import Pickers from './components/Pickers';
import HostAddressForm from './components/Host-address-form';
import ShippingAddress from './components/Shipping-address';
import PartyLocation from './components/Party-location';

import {
  GLOBAL_NAMES,
  FORMS,
  ADDRESS_BOOK_USERS_MOCK
} from 'CONSTANTS';

const {
  MODULES_NAMES: {
    PARTY_FORM_DEMO
  }
} = GLOBAL_NAMES;

const {
  PARTY_FORM
} = FORMS;

const {
  GET_USERS
} = ADDRESS_BOOK_USERS_MOCK;

const {
  MODULE_NAME,
  addressBookUsers,
  modifyAddressBookUsers
} = buildModuleAliases(
  PARTY_FORM_DEMO.name,
  'addressBookUsers',
  'modifyAddressBookUsers'
)

export default {
  name: MODULE_NAME,
  data() {
    return {
      addressBookIsOpened: false,
      partyDemoData: {...PARTY_FORM.values},
      typeOptions: [...PARTY_FORM.typeOptions],
      hostRadios: {...PARTY_FORM.radios.host},
      shippingRadios: {...PARTY_FORM.radios.shipping},
      locationRadios: {...PARTY_FORM.radios.location},
      addressOptions: []
    }
  },
  computed: {
    ...mapGetters({
      addressBookUsers
    })
  },
  validations: {
    partyDemoData: {...PARTY_FORM.validations}
  },
  methods: {
    selectUser({
      firstName,
      lastName,
      email: mail,
      address: unprocessedAddress,
      phone,
      social
    }) {

      let address = null;
      this.addressOptions.length = 0;
      this.hostRadios.value = this.hostRadios.inputs[0].value;

      if (this._.isArray(unprocessedAddress)) {
        address = unprocessedAddress[0];
        this.addressOptions = [...unprocessedAddress];
      } else {
        address = unprocessedAddress;
      }

      this.partyDemoData = {
        ...this.partyDemoData,
        host: {
          firstName,
          lastName,
          mail,
          phone,
          social,
          address
        }
      }

      this.syncAddressWithShipping(address).then(() => {
        this.toggleWhichShippingAddress(this.shippingRadios.value);
      });

      this.syncAddressWithLocation(address).then(() => {
        this.toggleWhichLocationAddress(this.locationRadios.value);
      });

      this.toggleAdressBook();
    },
    getAddressBookUsers() {
      const loading = this.loading.service({
        lock: true
      })

      this.service.req(GET_USERS).then(users => {
        this.$store.dispatch(modifyAddressBookUsers, users);
        this.toggleAdressBook();
        loading.close();
      });
    },
    toggleAdressBook() {
      this.addressBookIsOpened = !this.addressBookIsOpened;
    },
    ensureIsHashtag() {
      setTimeout(() => {
        this.partyDemoData.hashtag = `#${this.partyDemoData.hashtag.replace(/#/g, '')}`;
      });
    },
    async syncAddressWithShipping(v) {
      if (this.shippingRadios.value === 'host') {
          this.partyDemoData.shipping = await v.value ? v.value : v;
      }
    },
    async syncAddressWithLocation(v) {
      if (this.locationRadios.value === 'host') {
          this.partyDemoData.location = await v.value ? v.value : v;
      }
    },
    toggleWhichShippingAddress(v) {
      let address = '';

      switch (v) {
        case 'host':
          address = this.partyDemoData.host.address;
          break;
        case 'consultant':
          // get real consultant address form global store
          address = 'Some cool address';
          break;
        case 'other':
          address = this.partyDemoData.host.address ? this.partyDemoData.host.address : this.addressOptions[0];
          break;
      }

      this.partyDemoData.shipping = address;
    },
    toggleWhichLocationAddress(v) {
      let address = '';

      switch (v) {
        case 'host':
          address = this.partyDemoData.host.address;
          break;
        case 'other':
          address = this.partyDemoData.host.address ? this.partyDemoData.host.address : this.addressOptions[0];
          break;
      }

      this.partyDemoData.location = address;
    },
    toggleIfConsultantIsHost(v) {
      let dataToMerge = {};
      this.addressOptions.length = 0;

      if (v === 'self') {
        dataToMerge = {
          // we will require actual consultant data stored in a Root store
          host: {
            firstName: 'Alex',
            lastName: 'Obre',
            mail: 'aobretin@optaros.com',
            phone: '034334134141',
            social: 'FB',
            address: 'Some cool address'
          }
        }
      } else {
        dataToMerge = {
          host: {...PARTY_FORM.values.host}
        };
      }

      this.syncAddressWithShipping(dataToMerge.host.address).then(() => {
        this.toggleWhichShippingAddress(this.shippingRadios.value);
      });

      this.syncAddressWithLocation(dataToMerge.host.address).then(() => {
        this.toggleWhichLocationAddress(this.locationRadios.value);
      });

      this.partyDemoData = {
        ...this.partyDemoData,
        ...dataToMerge
      }
    },
    ...mapActions({
      modifyAddressBookUsers
    })
  },
  created() {
    this.service = new Service();

    if (!this.$store.state[MODULE_NAME]) {
      this.$store.registerModule(MODULE_NAME, store);
    }
  },
  props: {
    partyId: {
      type: [
        Number,
        String
      ]
    },
    duplicate: {
      type: Boolean,
      default: false
    }
  },
  components: {
    AddressBookUsers,
    Pickers,
    HostAddressForm,
    ShippingAddress,
    PartyLocation
  }
}
