import { SignInDto } from 'dto/auth.dto';
import request from 'utils/request';
import { parseCookies, destroyCookie, setCookie } from 'nookies';
import authenticatedRequest from 'utils/authenticatedRequest';

const authServices = {
  async signin({ username, password }: SignInDto) {
    const cookies = parseCookies();
    let device_id = 'b48bc95e-a3b1-4282-a818-8342a0a55088';
    if (cookies.device_id) {
      device_id = cookies.device_id;
    } else {
      device_id = 'b48bc95e-a3b1-4282-a818-8342a0a55088';
    }
    setCookie(null, 'device_id', device_id);
    try {
      const body = {
        username,
        password,
        deviceId: device_id,
      };
      const res = await request.post('auth/admin/login', body);

      if (res.status === 201) {
        return res.data;
      }
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  async revokeToken(refresh_token: string) {
    try {
      const res = await authenticatedRequest.get(
        `auth/refresh-token/${refresh_token}`
      );
      if (res.status === 200) {
        return res.data;
      }
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  async getAdminInfo() {
    try {
      const res = await authenticatedRequest.get(`admins/info`);

      if (res.status === 200) {
        return res.data;
      }
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  async signout() {
    try {
      const res = await authenticatedRequest.post(`auth/admin/logout`);

      if (res.status === 201) {
        destroyCookie(null, 'access_token');
        destroyCookie(null, 'refresh_token');
        return true;
      }
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
};

export default authServices;
