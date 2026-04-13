const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["images/audi_r8.jpg","images/bmw_m3.jpg","images/citroen_c3.jpg","images/logo.svg","images/peugeot_9x8.jpg","images/porsche_963.jpeg","images/renault_clio.jpg","images/toyota_yaris.jpg","robots.txt"]),
	mimeTypes: {".jpg":"image/jpeg",".svg":"image/svg+xml",".jpeg":"image/jpeg",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.DV-X1hK0.js",app:"_app/immutable/entry/app.CFjnLrAm.js",imports:["_app/immutable/entry/start.DV-X1hK0.js","_app/immutable/chunks/-A4-oSDJ.js","_app/immutable/chunks/BFzjU7f7.js","_app/immutable/chunks/BbnjhPao.js","_app/immutable/entry/app.CFjnLrAm.js","_app/immutable/chunks/BFzjU7f7.js","_app/immutable/chunks/CE7DHFnv.js","_app/immutable/chunks/D2beRi_s.js","_app/immutable/chunks/DaTaY8cw.js","_app/immutable/chunks/BbnjhPao.js","_app/immutable/chunks/9oZPzsQy.js","_app/immutable/chunks/CCBI57TB.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-DuK963YV.js')),
			__memo(() => import('./chunks/1-soSO_eLY.js')),
			__memo(() => import('./chunks/2-CnaYOO6f.js')),
			__memo(() => import('./chunks/3-cg2Ob0_H.js')),
			__memo(() => import('./chunks/4-B5UFFFrQ.js')),
			__memo(() => import('./chunks/5-CvnzoxlZ.js')),
			__memo(() => import('./chunks/6-DN8kK1lf.js')),
			__memo(() => import('./chunks/7-sg4KaEJg.js')),
			__memo(() => import('./chunks/8-C4221Tg5.js')),
			__memo(() => import('./chunks/9-B-Strfap.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/modules",
				pattern: /^\/modules\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/modules/[slug]",
				pattern: /^\/modules\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/reflection",
				pattern: /^\/reflection\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/resources",
				pattern: /^\/resources\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/simulation",
				pattern: /^\/simulation\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
