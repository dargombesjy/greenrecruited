import { P as PUBLIC_STRAPI_URL } from './public-CGSgOEA6.js';

async function load({ params }) {
  const res = await fetch(`${PUBLIC_STRAPI_URL}/api/resource?populate[0]=videos.thumbnail&populate[1]=news.thumbnail&populate[2]=articles.thumbnail`);
  const json = await res.json();
  return json;
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 9;
const universal_id = "src/routes/resources/news/[slug]/+page.js";
const imports = ["_app/immutable/nodes/9.DlMLApGM.js","_app/immutable/chunks/BI8TNJbN.js"];
const stylesheets = [];
const fonts = [];

export { fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=9-CowYTqWH.js.map
