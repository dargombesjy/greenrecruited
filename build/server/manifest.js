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
		client: {start:"_app/immutable/entry/start.Cq__m2Q-.js",app:"_app/immutable/entry/app.BJNHh7E4.js",imports:["_app/immutable/entry/start.Cq__m2Q-.js","_app/immutable/chunks/izS0NcGz.js","_app/immutable/chunks/C80bJ0Pg.js","_app/immutable/chunks/BqcxvOjV.js","_app/immutable/entry/app.BJNHh7E4.js","_app/immutable/chunks/C80bJ0Pg.js","_app/immutable/chunks/BpZzuMAa.js","_app/immutable/chunks/satT1F6r.js","_app/immutable/chunks/lhidEhsI.js","_app/immutable/chunks/BqcxvOjV.js","_app/immutable/chunks/rkgIW1_P.js","_app/immutable/chunks/Cj-RsIct.js","_app/immutable/chunks/CsOvJ5uS.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-B_jY74MU.js')),
			__memo(() => import('./chunks/1-CBirAeSX.js')),
			__memo(() => import('./chunks/2-DV_uueoc.js')),
			__memo(() => import('./chunks/3-BIKttQDl.js')),
			__memo(() => import('./chunks/4-CxI8gWq8.js')),
			__memo(() => import('./chunks/5-BmnXUybl.js')),
			__memo(() => import('./chunks/6-DAFWcoId.js')),
			__memo(() => import('./chunks/7-BYCXr3JS.js')),
			__memo(() => import('./chunks/8-BMQ3nbkB.js')),
			__memo(() => import('./chunks/9-DlPCy-FA.js')),
			__memo(() => import('./chunks/10-TowZCMgy.js'))
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
