//const LOCAL = true
const LOCAL = false

const CLIENT_ID = '857226598019-j4m10mgk8i5c3lvg2cb6r06ncrn165ou.apps.googleusercontent.com'
const CLIENT_SECRET = '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'

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