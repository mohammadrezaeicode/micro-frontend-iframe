// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production

import { browser } from '$app/environment';

import {
	checkOriginForChild,
	childToParent,
	customEventChildToParent,
	setCustomEvent,
	setEvent
} from '../massagechannle';

if (browser) {
	setEvent((event) => {
		if (typeof event == 'object' && event && 'data' in event) {
			console.log('in svelte ', event.data);
		}
	});
	childToParent('from svelte');
	// if (checkOriginForChild()) {
	// 	setCustomEvent((event) => {
	// 		if (typeof event == 'object' && event && 'data' in event) {
	// 			console.log('in svelte - custom', event.data);
	// 		}
	// 	});
	// 	customEventChildToParent('from svelte custom');
	// }
}
export const prerender = true;
