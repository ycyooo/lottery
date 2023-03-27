// const BASE_URL = 'https://api.example.com'

// function request(url, method = 'GET', data = {}, baseURL = BASE_URL) {
//   return new Promise((resolve, reject) => {
//     uni.request({
//       url: baseURL + url,
//       method,
//       data,
//       success: (res) => {
//         if (res.statusCode === 200) {
//           resolve(res.data);
//         } else {
//           reject(new Error(`请求失败，状态码：${res.statusCode}`));
//         }
//       },
//       fail: (err) => {
//         reject(err);
//       },
//     });
//   });
// }
// // 封装 GET 请求函数
// function get(url, data = {}, baseURL = BASE_URL) {
//   return request(url, 'GET', data, baseURL);
// }
// // 封装 POST 请求函数
// function post(url, data = {}, baseURL = BASE_URL) {
//   return request(url, 'POST', data, baseURL);
// }
// // 暴露出去
// export default {
//   request,
//   get,
//   post,
// };