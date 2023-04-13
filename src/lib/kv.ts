type KVToken = string

export interface KVSystem {
	save : (auth : string, token : KVToken, expiration : number) => Promise<void>
	get : (auth : string) => Promise<KVToken | null>
	remove : (auth : string) => Promise<void>
}

export async function save(
	auth : string,
	token : KVToken,
	expiration : number,
) : Promise<void> {
	return KVCACHE.put(auth, token, {
		expiration: Math.floor(expiration),
	})
}

export async function get(auth : string) : Promise<KVToken | null> {
	return KVCACHE.get(auth, 'text')
}

export async function remove(auth : string) : Promise<void> {
	return KVCACHE.delete(auth)
}

const system : KVSystem = {
	save,
	get,
	remove,
}
export default system