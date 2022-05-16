import { HTTP } from '@utils/http';
import config from '@utils/config'

type ResType = {
  data?: any;
  err?: any;
  status: number;
};

class IndexModel extends HTTP {
  getHomeData(cityId: string) {
    return new Promise((resolve: (value: ResType) => void, reject) => {
      this.axiosPost({
        url: config.API.GET_HOME_DATA,
        data: {
          cityId
        },
        success (data) {
          resolve({
            data,
            status: 0
          });
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

export default new IndexModel();
