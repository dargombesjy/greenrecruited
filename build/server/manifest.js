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
		client: {start:"_app/immutable/entry/start.CBzzP9CZ.js",app:"_app/immutable/entry/app.Cy8dzptI.js",imports:["_app/immutable/entry/start.CBzzP9CZ.js","_app/immutable/chunks/DqetSkR_.js","_app/immutable/chunks/D6oMQsUx.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/BMhKgujm.js","_app/immutable/entry/app.Cy8dzptI.js","_app/immutable/chunks/D6oMQsUx.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/CjJUhez7.js","_app/immutable/chunks/CD0mYr-T.js","_app/immutable/chunks/DkQLDreQ.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BMhKgujm.js","_app/immutable/chunks/BqSY7oT0.js","_app/immutable/chunks/DEV7WA6v.js","_app/immutable/chunks/BH7ceYq1.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-B1HUcDIu.js')),
			__memo(() => import('./chunks/1-CQx1hzad.js')),
			__memo(() => import('./chunks/2-BhrYXSEZ.js')),
			__memo(() => import('./chunks/3-dBPE7czr.js')),
			__memo(() => import('./chunks/4-BZT86nci.js')),
			__memo(() => import('./chunks/5-CU437BpL.js')),
			__memo(() => import('./chunks/6-BL2l5r1W.js')),
			__memo(() => import('./chunks/7-x2nwRyAY.js')),
			__memo(() => import('./chunks/8-CSrMVs_H.js')),
			__memo(() => import('./chunks/9-Cic7Rm1X.js')),
			__memo(() => import('./chunks/10-THi4lcHU.js')),
			__memo(() => import('./chunks/11-Cd1VQVfb.js')),
			__memo(() => import('./chunks/12-Je1keUVW.js'))
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
