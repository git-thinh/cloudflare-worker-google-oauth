let LOCAL, CLIENT_ID, CLIENT_SECRET;

LOCAL = true; // dev
//LOCAL = false; // prod

if (LOCAL) {
	CLIENT_ID = '857226598019-6vrp8cceu88la7kjsqdosl2kul9noknb.apps.googleusercontent.com';
	CLIENT_SECRET = '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';
} else {
	CLIENT_ID = '857226598019-j4m10mgk8i5c3lvg2cb6r06ncrn165ou.apps.googleusercontent.com';
	CLIENT_SECRET = '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';
}

export interface EnvSystem {
	isLocal : boolean
	clientID : string
	clientSecret : string
	now : () => number
}

const system : EnvSystem = {
	isLocal: LOCAL,
	clientID: CLIENT_ID,
	clientSecret: CLIENT_SECRET,
	now: () => Date.now(),
}

export default system