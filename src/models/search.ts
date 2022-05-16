import { HTTP } from '@utils/http';
import config from '@utils/config';

interface ResType {
  data?: any;
  err?: any;
  status: number;
}

class SearchModel extends HTTP {
  searchAction(keyword: string, cityId: string) {
    return new Promise((resolve: (value: ResType) => void, reject) => {
      this.axiosPost({
        url: config.API.SEARCH_ACTION,
        data: {
          keyword,
          cityId
        },
        success(data) {
          resolve({
            data,
            status: 0
          });
        },
        error(err) {
          resolve({
            err,
            status: -1
          })
        }
      });
    });
  }
}

export default new SearchModel();
