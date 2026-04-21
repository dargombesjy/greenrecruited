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
		client: {start:"_app/immutable/entry/start.BLu5kbgF.js",app:"_app/immutable/entry/app.CR09F53k.js",imports:["_app/immutable/entry/start.BLu5kbgF.js","_app/immutable/chunks/CNEbXpnP.js","_app/immutable/chunks/BqEozBxR.js","_app/immutable/chunks/BeYIQxCt.js","_app/immutable/entry/app.CR09F53k.js","_app/immutable/chunks/BqEozBxR.js","_app/immutable/chunks/OnCvNs-_.js","_app/immutable/chunks/4PD2n0KE.js","_app/immutable/chunks/CZHfX3Sd.js","_app/immutable/chunks/BeYIQxCt.js","_app/immutable/chunks/DeVGZwmz.js","_app/immutable/chunks/BflWvBoa.js","_app/immutable/chunks/CYK0e6Q3.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-BQwUotXS.js')),
			__memo(() => import('./chunks/1-DggdoApn.js')),
			__memo(() => import('./chunks/2-DOCgSGyr.js')),
			__memo(() => import('./chunks/3-Bb_bN8cW.js')),
			__memo(() => import('./chunks/4-rYpyD-ZE.js')),
			__memo(() => import('./chunks/5-ZjAWhjnW.js')),
			__memo(() => import('./chunks/6-DtDlkW2P.js')),
			__memo(() => import('./chunks/7-DBRmsWcC.js')),
			__memo(() => import('./chunks/8-BrLsao_C.js')),
			__memo(() => import('./chunks/9-CvG7o_JL.js')),
			__memo(() => import('./chunks/10-Bwm7O3na.js'))
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
