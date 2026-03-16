const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["images/audi_r8.jpg","images/bmw_m3.jpg","images/citroen_c3.jpg","images/logo.svg","images/peugeot_9x8.jpg","images/porsche_963.jpeg","images/renault_clio.jpg","images/toyota_yaris.jpg","robots.txt","videos/sample01.mp4"]),
	mimeTypes: {".jpg":"image/jpeg",".svg":"image/svg+xml",".jpeg":"image/jpeg",".txt":"text/plain",".mp4":"video/mp4"},
	_: {
		client: {start:"_app/immutable/entry/start.BZb9Ag09.js",app:"_app/immutable/entry/app.XQyVkt3r.js",imports:["_app/immutable/entry/start.BZb9Ag09.js","_app/immutable/chunks/Bp55eB-b.js","_app/immutable/chunks/DHsLvcvx.js","_app/immutable/chunks/CgUjhiP9.js","_app/immutable/entry/app.XQyVkt3r.js","_app/immutable/chunks/DHsLvcvx.js","_app/immutable/chunks/L9yxSS5I.js","_app/immutable/chunks/DHkDe_Nv.js","_app/immutable/chunks/EEmVD4Is.js","_app/immutable/chunks/CgUjhiP9.js","_app/immutable/chunks/Dr0fZtQM.js","_app/immutable/chunks/UaVtsGCH.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-B7tTcGbX.js')),
			__memo(() => import('./chunks/1-kLl_jwbK.js')),
			__memo(() => import('./chunks/2-B2gnPlEJ.js')),
			__memo(() => import('./chunks/3-CQv3pt7Y.js')),
			__memo(() => import('./chunks/4-BHxHvDzR.js')),
			__memo(() => import('./chunks/5-BJgs7AUi.js')),
			__memo(() => import('./chunks/6-Cz7ptOjT.js')),
			__memo(() => import('./chunks/7-z7dL1GrU.js')),
			__memo(() => import('./chunks/8-CzcsZ-5V.js')),
			__memo(() => import('./chunks/9-KT2OQe5F.js'))
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
