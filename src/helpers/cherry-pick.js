import {search} from 'jmespath';

export const cherryPick = (data, query) => search(data, query);
