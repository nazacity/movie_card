import {
  BannerDto,
  TBannerOrder,
  TBannerPosition,
  TBannerStatus,
} from 'dto/banner.dto';
import authenticatedRequest from 'utils/authenticatedRequest';

export interface IGetBannersByPosition {
  position: TBannerPosition;
  status?: TBannerStatus;
  isDeleted?: boolean;
  order?: TBannerOrder;
}

export interface IGetBannersById {
  position: TBannerPosition;
  bannerId: string;
}

const bannerServices = {
  async getBannersByPosition({
    position,
    status,
    order,
  }: IGetBannersByPosition) {
    try {
      const res = await authenticatedRequest.get(`/banners`, {
        params: {
          type: position,
          ...(status && { status: status }),
          ...(order && { order: order }),
        },
      });

      if (res.status === 200) {
        return res.data.data;
      }
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  async getBannersById({ bannerId }: IGetBannersById) {
    try {
      const res = await authenticatedRequest.get(`/banners/${bannerId}`);

      if (res.status === 200) {
        return res.data.data;
      }
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  async uploadBannerImage(data: Blob) {
    const formData = new FormData();
    formData.append('images', data);

    try {
      const res = await authenticatedRequest.post(`banners/upload`, formData);
      if (res.status === 201) {
        return res.data.data;
      }
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  async addBannersByPosition(data: BannerDto) {
    try {
      const res = await authenticatedRequest.post(`/banners`, data);

      if (res.status === 200) {
        return res.data.data;
      }
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  async updateBannersById({ id, data }: { id: string; data: BannerDto }) {
    try {
      const res = await authenticatedRequest.put(`/banners/${id}`, data);

      if (res.status === 200) {
        return res.data.data;
      }
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  async deleteBannersByPositionAndId({
    position,
    id,
  }: {
    position: TBannerPosition;
    id: string;
  }) {
    try {
      const res = await authenticatedRequest.delete(
        `/banners/${id}/${position}`
      );

      if (res.status === 200) {
        return res.data.data;
      }
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
};

export default bannerServices;
