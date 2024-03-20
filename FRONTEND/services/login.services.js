const URL_API = "http://localhost:7000";

const loginServices = {
  apiGetComment: () => {
    return new Promise((resolve, reject) => {
      fetch(`${URL_API}/login`,)
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            resolve(data.user);
          } else {
            reject(data.error);
          }
        })
        .catch(error => {
          reject('Erro na requisição AJAX:', error);
        });
    });
  },
};

export {loginServices}