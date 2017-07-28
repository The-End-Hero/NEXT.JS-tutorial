/**
 * Created by xiping.wang on 2017/7/24.
 */
const prod = process.env.NODE_ENV === 'production'

module.exports = {
    'BACKEND_URL': prod ? 'https://api.example.com' : 'http://localhost:8888!!!',
    'CLIENT_SSS': prod ? 'http://hm.com': 'http://8888',
    // 'MOCK_API_123': prod ? 'http://123.206.206.21:8888/123': 'http://127.0.0.1:8888/123',
    // 'MOCK_API_ARTICLEDETAIL':prod ? 'http://123.206.206.21:8888/articledetail': 'http://127.0.0.1:8888/articledetail'
}