/* Config Sample
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "localhost", // Address to listen on, can be:
	// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	// - another specific IPv4/6 to listen on a specific interface
	// - "0.0.0.0", "::" to listen on any interface
	// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", // The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
	// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	// or add a specific IPv4 of 192.168.1.5 :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, // Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", // HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", // HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 12,
	units: "imperial",
	modules: [
		{
			module: "alert"
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left",
			config: {
				timeFormat: 12,
				timezone: "America/New_York",
				displaySeconds: false,
				showPeriodUpper: true
			}
		},
		{
			module: "MMM-Todoist",
			position: "top_left",
			header: "Todo",
			config: {
				hideWhenEmpty: false,
				accessToken: "a27b456c40049b64dcd0ee956a825b690a3136e0",
				maximumEntries: 60,
				updateInterval: 5 * 60 * 1000,
				displayAvatar: true,
				showProject: false,
				displayTasksWithinDays: 0,
				maxTitleLength: 40,
				wrapEvents: true,
				fade: false,
				projects: ["6cQfqG8Ww3wQC7FJ"]
			}
		},
		// {
		// 	module: "calendar",
		// 	header: "US Holidays",
		// 	position: "top_left",
		// 	config: {
		// 		broadcastPastEvents: true,
		// 		calendars: [
		// 			{
		// 				fetchInterval: 7 * 24 * 60 * 60 * 1000,
		// 				symbol: "calendar-check",
		// 				url: "https://ics.calendarlabs.com/76/mm3137/US_Holidays.ics",
		// 				color: "red",
		// 				name: "us_holiday"
		// 			}
		// 		]
		// 	}
		// },
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openmeteo",
				type: "current",
				lat: 42.460597,
				lon: -83.651491
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openmeteo",
				type: "forecast",
				lat: 42.460597,
				lon: -83.651491
			}
		},
		{
			module: "MMM-Wallpaper",
			position: "fullscreen_below",
			config: {
				updateInterval: 0,
				unsplashAPIKey: "t-MSdzuBbn3d-CGBLzPbrYVSBMkNX41cIq8hmQnHSVk",
				query: false,
				collectionIDs: false,
				userName: false,
				photoID: false,
				autoDim: true,
				brightImageOpacity: 0.85,
				imageOrientation: "landscape",
				imageWidth: "auto",
				imageHeight: "auto",
				imageOptions: "fit=fill&fill=blur"
			}
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
	module.exports = config;
}
