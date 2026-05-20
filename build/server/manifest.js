const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["images/audi_r8.jpg","images/bmw_m3.jpg","images/citroen_c3.jpg","images/ian-van-landuyt-H7CzZwBVn7k-unsplash.jpg","images/logo.svg","images/peugeot_9x8.jpg","images/porsche_963.jpeg","images/renault_clio.jpg","images/toyota_yaris.jpg","robots.txt"]),
	mimeTypes: {".jpg":"image/jpeg",".svg":"image/svg+xml",".jpeg":"image/jpeg",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.CEjo0VrF.js",app:"_app/immutable/entry/app.Bc5IVhqF.js",imports:["_app/immutable/entry/start.CEjo0VrF.js","_app/immutable/chunks/C2txNd_0.js","_app/immutable/chunks/BT_o8xiV.js","_app/immutable/chunks/DC0QJGmJ.js","_app/immutable/entry/app.Bc5IVhqF.js","_app/immutable/chunks/BT_o8xiV.js","_app/immutable/chunks/0w9_Zw-g.js","_app/immutable/chunks/BM5OCKjh.js","_app/immutable/chunks/BIt9y0Ex.js","_app/immutable/chunks/DC0QJGmJ.js","_app/immutable/chunks/D22Cfpb0.js","_app/immutable/chunks/ByGV8oJP.js","_app/immutable/chunks/BP9GQzwF.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-DedxWKf5.js')),
			__memo(() => import('./chunks/1-Cic1E9K7.js')),
			__memo(() => import('./chunks/2-B8Z-AR7n.js')),
			__memo(() => import('./chunks/3-C5es54hk.js')),
			__memo(() => import('./chunks/4-ChvrmIFj.js')),
			__memo(() => import('./chunks/5-Dphg-E3T.js')),
			__memo(() => import('./chunks/6-BayA_-z9.js')),
			__memo(() => import('./chunks/7-CQHDfocU.js')),
			__memo(() => import('./chunks/8-DMaPBgQu.js')),
			__memo(() => import('./chunks/9-BmttF5DI.js')),
			__memo(() => import('./chunks/10-BShPhUOx.js'))
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
				id: "/simulations",
				pattern: /^\/simulations\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/simulations/[slug]",
				pattern: /^\/simulations\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
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
