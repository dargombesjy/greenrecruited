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
		client: {start:"_app/immutable/entry/start.7m4jc-or.js",app:"_app/immutable/entry/app.B43f7grf.js",imports:["_app/immutable/entry/start.7m4jc-or.js","_app/immutable/chunks/BC8aiuHu.js","_app/immutable/chunks/Bcac9-xV.js","_app/immutable/chunks/ZT1WMqlU.js","_app/immutable/entry/app.B43f7grf.js","_app/immutable/chunks/Bcac9-xV.js","_app/immutable/chunks/CABi7X04.js","_app/immutable/chunks/BxX26pLE.js","_app/immutable/chunks/BGoFMBqd.js","_app/immutable/chunks/ZT1WMqlU.js","_app/immutable/chunks/CnaKozXh.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-CLhRnvw9.js')),
			__memo(() => import('./chunks/1-C3QAu2II.js')),
			__memo(() => import('./chunks/2-CHQ7P40l.js')),
			__memo(() => import('./chunks/3-DPKMI5Vk.js')),
			__memo(() => import('./chunks/4-POTDYexN.js')),
			__memo(() => import('./chunks/5-DQYyBD6V.js')),
			__memo(() => import('./chunks/6-zj2ff9Lt.js')),
			__memo(() => import('./chunks/7-Cb2cYR5U.js')),
			__memo(() => import('./chunks/8-Dh8vPFjW.js')),
			__memo(() => import('./chunks/9-C65HvaGX.js'))
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
