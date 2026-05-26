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
		client: {start:"_app/immutable/entry/start.BwpVhkDP.js",app:"_app/immutable/entry/app.CIV4MwJ3.js",imports:["_app/immutable/entry/start.BwpVhkDP.js","_app/immutable/chunks/CLSKzMyb.js","_app/immutable/chunks/DSgysGrR.js","_app/immutable/chunks/BWbZHrvH.js","_app/immutable/entry/app.CIV4MwJ3.js","_app/immutable/chunks/DSgysGrR.js","_app/immutable/chunks/Cb74WmcB.js","_app/immutable/chunks/DmfebJRY.js","_app/immutable/chunks/srK-mFOf.js","_app/immutable/chunks/BWbZHrvH.js","_app/immutable/chunks/BXlBkugS.js","_app/immutable/chunks/b9Xme7dr.js","_app/immutable/chunks/CVvZV2XN.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-DfZWYOtD.js')),
			__memo(() => import('./chunks/1-DFhhKiW6.js')),
			__memo(() => import('./chunks/2-kIfjmnmZ.js')),
			__memo(() => import('./chunks/3-CZCGYgoM.js')),
			__memo(() => import('./chunks/4-BA7Rl-4a.js')),
			__memo(() => import('./chunks/5-1JOAyjRa.js')),
			__memo(() => import('./chunks/6-DkVKez3A.js')),
			__memo(() => import('./chunks/7-DjRsrTfH.js')),
			__memo(() => import('./chunks/8-D_Ji5hFY.js')),
			__memo(() => import('./chunks/9-DCKqMGMu.js')),
			__memo(() => import('./chunks/10-BxaXCGxE.js')),
			__memo(() => import('./chunks/11-4BUBw_gR.js')),
			__memo(() => import('./chunks/12-leShYjfJ.js'))
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
				id: "/resources/news/[slug]",
				pattern: /^\/resources\/news\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/resources/videos/[slug]",
				pattern: /^\/resources\/videos\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/simulations",
				pattern: /^\/simulations\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/simulations/[slug]",
				pattern: /^\/simulations\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
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
