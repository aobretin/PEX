export const buildModuleAliases = (...args) => {
  const [MODULE_NAME, ...rest] = args;
  const others = {};

  rest.forEach(item => others[item] = `${MODULE_NAME}/${item}`)

  return {
    MODULE_NAME,
    ...others
  }
}
