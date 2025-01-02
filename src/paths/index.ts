const httpConfig = Object.freeze({
  baseUrl: 'https://requestly.tech/api/mockv2/test/api',
});

const USER = Object.freeze({
  name: 'user',
  id: '26614',
});

export const Paths = Object.freeze({
  Currency: `${httpConfig.baseUrl}/currency?username=${USER.name}${USER.id}`,
  Market: `${httpConfig.baseUrl}/market?username=${USER.name}${USER.id}`,
});
