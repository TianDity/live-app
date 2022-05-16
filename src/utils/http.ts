import axios from "axios";
import qs from "qs";

interface HttpConfig {
  url: string;
  data: any;
  success: (data: any) => void;
  error: (err: any) => void;
}

class HTTP {
  axiosPost(options: HttpConfig) {
    axios({
      url: options.url,
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(options.data),
    }).then(res => {
      options.success(res.data);
    }).catch(err => {
      options.error(err);
    })
  }
}

export {
  HTTP
}
