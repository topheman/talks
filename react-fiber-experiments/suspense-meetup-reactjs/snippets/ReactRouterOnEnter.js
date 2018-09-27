<Route onEnter={(state, replace, cb) => {
  fetch(stuff).then(() => cb());
}} />