export const makeNameAbbv = name => name.split(' ').reduce((abbv, name) => (`${abbv}${name[0]}`), '');
