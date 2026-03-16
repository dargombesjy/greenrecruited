async function load({ params }) {
  const res = await fetch(`http://103.127.134.185:1337/api/learning-modules/${params.slug}?populate=*`);
  const json = await res.json();
  return json;
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CudgxebF.js')).default;
const universal_id = "src/routes/modules/[slug]/+page.js";
const imports = ["_app/immutable/nodes/6.H8wCt3d5.js","_app/immutable/chunks/EEmVD4Is.js","_app/immutable/chunks/DHsLvcvx.js","_app/immutable/chunks/L9yxSS5I.js","_app/immutable/chunks/DHkDe_Nv.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=6-C5gJz3ms.js.map
