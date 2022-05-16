import { HTTP } from '@utils/http';
import config from '@utils/config';

interface ResType {
  data?: any;
  err?: any;
  status: number;
}

class ListModel extends HTTP {
  getListData (cityId: string, field: string) {
    return new Promise((resolve: (value: ResType) => void, reject) => {
      this.axiosPost({
        url: config.API.GET_LIST_DATA,
        data: {
          cityId,
          field
        },
        success(data) {
          resolve({
            data,
            status: 0
          })
        },
        error(err) {
          resolve({
            err,
            status: -1
          })
        }
      })
    })
  }
}

export default new ListModel();
