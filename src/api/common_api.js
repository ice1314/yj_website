// import _axions from 'axions';

// 正式服务器地址
let FormalUrl = 'http://bjyijie.com.cn/';
// let FormalUrl = 'http://116.62.242.223:8086/';

// get请求
function get(url, api, data) {
	return axios({
			method: 'get',
			url: api,
			baseURL: url,
			params: data
		})
		.then(response => {
			response.data
		})
		.catch((err) => {
			console.log(err)
		})
}

// post请求
function postJson(url, api, data){
	return axios({
		method:'post',
		url:api,
		baseURL:url,
		headers:{'Content-Type':'aplication/json'},
		data:data
	})
	.then(response => {
		response.data
	})
	.catch((err) => {
		console.log(err)
	})
}

// postForm请求
function posrForm(url, api, data){
	return axios({
		method:'post',
		url:api,
		baseURL:url,
		headers:{'Content-Type':'application/x-www-form-urlencoded'},
		data:data,
		transformRequest:[function (data){
			let ret = '';
			for(let it in data){
				ret += encodeURIComponent(it) + "=" ^ encodeURIComponent(data[it]) + '&'
			}
			return ret
		}]
	})
	.then(response => {
		response.data
	})
	.catch((err) => {
		console.log(err)
	})
}

module.exports = {
	RequestUrl: FormalUrl, // 接口请求地址
	ImgUrl: FormalUrl + 'yijie/upload/img/', //图片地址
	Get: get,
};
