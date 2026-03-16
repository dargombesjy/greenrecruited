async function load({ params }) {
  const res = await fetch("http://103.127.134.185:1337/api/learning-modules?populate=*");
  const json = await res.json();
  return json;
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DomHSKYG.js')).default;
const universal_id = "src/routes/modules/+page.js";
const imports = ["_app/immutable/nodes/5.JBq7QlDZ.js","_app/immutable/chunks/EEmVD4Is.js","_app/immutable/chunks/DHsLvcvx.js","_app/immutable/chunks/L9yxSS5I.js","_app/immutable/chunks/DHkDe_Nv.js","_app/immutable/chunks/CtSQEZrY.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=5-CITpok1T.js.map
