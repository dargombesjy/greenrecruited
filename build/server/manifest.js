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
		client: {start:"_app/immutable/entry/start.AMPP3Iru.js",app:"_app/immutable/entry/app.CbrFthNa.js",imports:["_app/immutable/entry/start.AMPP3Iru.js","_app/immutable/chunks/CEAD515h.js","_app/immutable/chunks/DN3skXJJ.js","_app/immutable/chunks/CeHzahlI.js","_app/immutable/entry/app.CbrFthNa.js","_app/immutable/chunks/DN3skXJJ.js","_app/immutable/chunks/b4JhZdMj.js","_app/immutable/chunks/Emk6CvTy.js","_app/immutable/chunks/DyblKahl.js","_app/immutable/chunks/CeHzahlI.js","_app/immutable/chunks/Dn7OlLi4.js","_app/immutable/chunks/Mts2ibs5.js","_app/immutable/chunks/Cv8IcgIF.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-DIl6RQeB.js')),
			__memo(() => import('./chunks/1-BwPsN8b0.js')),
			__memo(() => import('./chunks/2-Bz6R05CL.js')),
			__memo(() => import('./chunks/3-C5DbUOt4.js')),
			__memo(() => import('./chunks/4-jO4PP5PC.js')),
			__memo(() => import('./chunks/5-IbgelvX-.js')),
			__memo(() => import('./chunks/6-C360n5YR.js')),
			__memo(() => import('./chunks/7-aG1VuyYv.js')),
			__memo(() => import('./chunks/8-Bz_LVSbg.js')),
			__memo(() => import('./chunks/9-CowYTqWH.js')),
			__memo(() => import('./chunks/10-DlvBBDE2.js')),
			__memo(() => import('./chunks/11-DJ0PBzd6.js')),
			__memo(() => import('./chunks/12-DEgr7Qjn.js'))
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
