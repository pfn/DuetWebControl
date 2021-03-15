'use strict'

import { registerRoute } from '../../routes';
import JumpShip from './JumpShip.vue';

registerRoute(JumpShip, {
	Control: {
		JumpShip: {
			icon: 'mdi-printer-3d',
			caption: 'Change Printer',
			path: '/JumpShip',
		},
	},
});
