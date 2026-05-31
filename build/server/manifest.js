const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["images/audi_r8.jpg","images/bmw_m3.jpg","images/citroen_c3.jpg","images/ian-van-landuyt-H7CzZwBVn7k-unsplash.jpg","images/logo.jpg","images/logo.svg","images/peugeot_9x8.jpg","images/porsche_963.jpeg","images/renault_clio.jpg","images/toyota_yaris.jpg","robots.txt"]),
	mimeTypes: {".jpg":"image/jpeg",".svg":"image/svg+xml",".jpeg":"image/jpeg",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.DPyGlLKt.js",app:"_app/immutable/entry/app.DcCmqcvu.js",imports:["_app/immutable/entry/start.DPyGlLKt.js","_app/immutable/chunks/DeCQer-G.js","_app/immutable/chunks/CfgV3S4p.js","_app/immutable/chunks/BIoQu4rm.js","_app/immutable/chunks/BBF5p-pt.js","_app/immutable/entry/app.DcCmqcvu.js","_app/immutable/chunks/CfgV3S4p.js","_app/immutable/chunks/CzkQBGAB.js","_app/immutable/chunks/CtEmhWD4.js","_app/immutable/chunks/CckL8wVe.js","_app/immutable/chunks/BBF5p-pt.js","_app/immutable/chunks/B6NqALj5.js","_app/immutable/chunks/Bt_XbMcU.js","_app/immutable/chunks/4BHDp97i.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-BL2Hl3HF.js')),
			__memo(() => import('./chunks/1-DPbaW0L6.js')),
			__memo(() => import('./chunks/2-Bt_SqW3Y.js')),
			__memo(() => import('./chunks/3-iQEHrovW.js')),
			__memo(() => import('./chunks/4-DkI8EjD2.js')),
			__memo(() => import('./chunks/5-CbzaX4IP.js')),
			__memo(() => import('./chunks/6-Cd4-erZp.js')),
			__memo(() => import('./chunks/7-CRWmEV7O.js')),
			__memo(() => import('./chunks/8-DawkdCEG.js')),
			__memo(() => import('./chunks/9-Bs67tdcF.js')),
			__memo(() => import('./chunks/10-C1aHLq8L.js')),
			__memo(() => import('./chunks/11-BR_PNA7E.js')),
			__memo(() => import('./chunks/12-CerNmiAz.js')),
			__memo(() => import('./chunks/13-CWXJZY6w.js')),
			__memo(() => import('./chunks/14-N9V5iBWp.js'))
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
				id: "/about/guide",
				pattern: /^\/about\/guide\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/about/howto",
				pattern: /^\/about\/howto\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/modules",
				pattern: /^\/modules\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/modules/[slug]",
				pattern: /^\/modules\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/reflection",
				pattern: /^\/reflection\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/resources",
				pattern: /^\/resources\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/resources/news/[slug]",
				pattern: /^\/resources\/news\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/resources/videos/[slug]",
				pattern: /^\/resources\/videos\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/simulations",
				pattern: /^\/simulations\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/simulations/[slug]",
				pattern: /^\/simulations\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
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
