import {GLOBAL_NAMES} from 'CONSTANTS';

const {
  PARTY_STATUSES
} = GLOBAL_NAMES;

export const getPartyStatus = status => PARTY_STATUSES[status];
