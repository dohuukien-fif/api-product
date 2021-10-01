import axiosClient from './axiosClient';

const categoriesApi = {
  getAll(params) {
    const url = '/categories';
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/categories/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/categories`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/categories/${data}`;
    return axiosClient.get(url, data);
  },
  detele(id) {
    const url = `/categories/${id}`;
    return axiosClient.get(url);
  },
};
export default categoriesApi;
