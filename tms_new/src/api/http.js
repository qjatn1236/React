import interceptor from './interceptor';

export function getApi(url) {
	return interceptor.get(url);
}

export function postApi(url, payload) {
	return interceptor.post(url, payload);
}

export function putApi(url, payload) {
	return interceptor.put(url, payload);
}

export function deleteApi(url) {
	return interceptor.delete(url);
}
