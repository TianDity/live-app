import { HTTP } from '@utils/http';
import config from '@utils/config'

type ResType = {
  data?: any;
  err?: any;
  status: number;
};

class DetailModel extends HTTP {
  getDetail (field: string, id: string) {
    return new Promise((resolve: (value: ResType) => void, reject) => {
      this.axiosPost({
        url: config.API.GET_DETAIL,
        data: {
          field,
          id
        },
        success (data) {
          resolve({
            data,
            status: 0
          })
        },
        error (err) {
          resolve({
            err,
            status: -1
          })
        }
      })
    })
  }
}

export default new DetailModel();
