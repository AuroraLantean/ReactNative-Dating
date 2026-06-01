const _isProd = process.env.EAS_BUILD_PROFILE === "prod";

/*const config: Config = {
	icon: isProd ? "./assets/images/icon-prod.png" : "./assets/images/icon-dev.png",
  ios: {
		bundleIdentifier: `com.jonsamp.singleorigintwo${isProd?"":"-dev"}`,
		entitlements: {
			"com.apple.security.application-groups": [
				`group.com.jonsamp.singleorigintwo${isProd?"":"-dev"}`,
			]
		}
	},
	android: {
		package: `com.jonsamp.singleorigintwo${isProd?"":"-dev"}`,
	}
}*/
