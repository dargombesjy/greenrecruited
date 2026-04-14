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
		client: {start:"_app/immutable/entry/start.Clw-h7Zf.js",app:"_app/immutable/entry/app.CcUk0Ctb.js",imports:["_app/immutable/entry/start.Clw-h7Zf.js","_app/immutable/chunks/JSRjBsIX.js","_app/immutable/chunks/mmATy0Io.js","_app/immutable/chunks/Dbb0mMqx.js","_app/immutable/entry/app.CcUk0Ctb.js","_app/immutable/chunks/mmATy0Io.js","_app/immutable/chunks/CmDUFp9y.js","_app/immutable/chunks/B_MYLyA9.js","_app/immutable/chunks/BpK1DifN.js","_app/immutable/chunks/Dbb0mMqx.js","_app/immutable/chunks/DtTMvK_0.js","_app/immutable/chunks/BSixK7HJ.js","_app/immutable/chunks/CebTReGp.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-BHKSnKba.js')),
			__memo(() => import('./chunks/1-wzquNmzC.js')),
			__memo(() => import('./chunks/2-Cb95gJK5.js')),
			__memo(() => import('./chunks/3-BCSSV6Vs.js')),
			__memo(() => import('./chunks/4-CGce9B0u.js')),
			__memo(() => import('./chunks/5-CTig-Wm8.js')),
			__memo(() => import('./chunks/6-D1v3IF3F.js')),
			__memo(() => import('./chunks/7-C3DuoQrD.js')),
			__memo(() => import('./chunks/8-DUXpjm5q.js')),
			__memo(() => import('./chunks/9-Dw0eSM50.js'))
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
