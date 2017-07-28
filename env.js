const envConfig =  {
    production: {
        GRAPHQL_ENDPOINT: "http://123.206.206.21:8888/123",
        MOCK_API_ARTICLEDETAIL:'http://127.0.0.1:8888/articledetail',
        SIMPLE:'http://123.206.206.21:8888/simple'
    },
    qa: {
        GRAPHQL_ENDPOINT: "https://qa-host/graphql"
    },
    development: {
        GRAPHQL_ENDPOINT: "http://127.0.0.1:8888/123",
        MOCK_API_ARTICLEDETAIL:'http://127.0.0.1:8888/articledetail',
        SIMPLE:'http://127.0.0.1:8888/simple'
    }
};

const currentEnv = (process.browser ? window.ENV : process.env.NODE_ENV) || 'dev';

export default envConfig[currentEnv];