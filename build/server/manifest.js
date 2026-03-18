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
		client: {start:"_app/immutable/entry/start.BaLqLF7o.js",app:"_app/immutable/entry/app.6pk4lUZ_.js",imports:["_app/immutable/entry/start.BaLqLF7o.js","_app/immutable/chunks/CbaqSsbR.js","_app/immutable/chunks/DFf5R0V2.js","_app/immutable/chunks/OP-6AXKm.js","_app/immutable/entry/app.6pk4lUZ_.js","_app/immutable/chunks/DFf5R0V2.js","_app/immutable/chunks/BqLZ-sie.js","_app/immutable/chunks/DyyMfu7_.js","_app/immutable/chunks/DhWUWA4W.js","_app/immutable/chunks/OP-6AXKm.js","_app/immutable/chunks/CaEhA_bq.js","_app/immutable/chunks/CdYBaxeA.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-CyiARqAu.js')),
			__memo(() => import('./chunks/1-C2znhGOI.js')),
			__memo(() => import('./chunks/2-DeQ63jQ6.js')),
			__memo(() => import('./chunks/3-Biwf833j.js')),
			__memo(() => import('./chunks/4-BOoLPaL5.js')),
			__memo(() => import('./chunks/5-DBuC7GO4.js')),
			__memo(() => import('./chunks/6-CqVJm_Ar.js')),
			__memo(() => import('./chunks/7-BBo5UrLE.js')),
			__memo(() => import('./chunks/8-Dbm0jSJA.js')),
			__memo(() => import('./chunks/9-DKgmQiEE.js'))
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
