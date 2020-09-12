export default ({
  $axios,
  redirect
}) => {
  $axios.onRequest(config => {
    const auth = `Basic ${Buffer.from(`${process.env.basicAuthorizationLogin}:${process.env.baseAuthorizationPassword}`).toString('base64')}`;

    config.headers.common.Authorization = auth;

    config.headers.common['x-api-key'] = process.env.xApiKey;

    config.headers.origin = process.env.allowOrigin;

    return config;
  });

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status);
    if (code === 404) {
      redirect('/404');
    }
  });
};
