import axios from 'axios';

const api = axios.create();

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function ({ response: error }) {
    const errorObject = structuredClone(EMPTY_ERROR);
    errorObject.status = error.data.status;

    switch (error.status) {
      case 401:
        location.href = '/login';
        return;
      case 400:
        if (error.data.errors) {
          errorObject.fields = error.data.errors.reduce((collection: unknown[], current: Error) => {
            return { ...collection, [current.field]: current.message };
          }, {});
          break;
        }

        errorObject.general = error.data.message;
        break;
      default:
        errorObject.general = error.data.message;
    }

    return Promise.reject(errorObject);
  }
);

type Error = { field: string; message: string };

const EMPTY_ERROR = { general: null, fields: {}, status: null };

export default api;
