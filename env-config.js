/**
 * Created by xiping.wang on 2017/7/24.
 */
const prod = process.env.NODE_ENV === 'production'

module.exports = {
    'BACKEND_URL': prod ? 'https://api.example.com' : 'http://localhost:8888!!!',
    'CLIENT_SSS': prod ? 'http://hm.com': 'http://8888'
}