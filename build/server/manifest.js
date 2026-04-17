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
		client: {start:"_app/immutable/entry/start.BegXhzO9.js",app:"_app/immutable/entry/app.21qKM7z9.js",imports:["_app/immutable/entry/start.BegXhzO9.js","_app/immutable/chunks/w33NaMN1.js","_app/immutable/chunks/Cu36jJJw.js","_app/immutable/chunks/J2o4EdQh.js","_app/immutable/entry/app.21qKM7z9.js","_app/immutable/chunks/Cu36jJJw.js","_app/immutable/chunks/D8lH8Vpo.js","_app/immutable/chunks/7q210hqz.js","_app/immutable/chunks/FL3hJHCL.js","_app/immutable/chunks/J2o4EdQh.js","_app/immutable/chunks/7r8TxmC0.js","_app/immutable/chunks/Dm61nVNf.js","_app/immutable/chunks/BFg_CinH.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-KLGR81rz.js')),
			__memo(() => import('./chunks/1-Cmri_Uub.js')),
			__memo(() => import('./chunks/2-gbTml79y.js')),
			__memo(() => import('./chunks/3-DH3-fKpJ.js')),
			__memo(() => import('./chunks/4-BKErC64s.js')),
			__memo(() => import('./chunks/5-B64EaFCn.js')),
			__memo(() => import('./chunks/6-Bd0lZrxb.js')),
			__memo(() => import('./chunks/7-akP6mkvQ.js')),
			__memo(() => import('./chunks/8-_6ifwUt7.js')),
			__memo(() => import('./chunks/9-lDSrQqKs.js'))
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
