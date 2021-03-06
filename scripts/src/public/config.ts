import { Config as BaseConfig, init as baseInit, getConfig as baseGetConfig, LimitConfig } from "../config";

export interface Config extends BaseConfig {
	assets_base: string;
	environment_name: string;
	ecosystem_service: string;
	internal_service: string;
	limits: LimitConfig;
}

export function getConfig(): Config {
	return baseGetConfig();
}

function init(): void {
	let path = "config/public.";
	/*if (process.argv.length === 3) {
		path += process.argv[2];
	} else {
		path += "default";
	}*/
	path += "default";

	baseInit(`${ path }.json`);
}

init();
