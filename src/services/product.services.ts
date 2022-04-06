import product_lists_config from 'constants/productlist';
import authenticatedRequest from 'utils/authenticatedRequest';
import request from 'utils/request';

const productServices = {
  async getProductCategories() {
    try {
      const res = await authenticatedRequest.get('product-categories');

      if (res.status === 200) {
        return res.data.data;
      }
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  async getProductSubCategories(id: string) {
    try {
      const res = await authenticatedRequest.get(
        `product-categories/${id}/product-sub-categories`
      );

      if (res.status === 200) {
        return res.data.data;
      }
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  async getProductLists({
    skip,
    take,
    name,
    subCategoryId,
    categoryId,
    status,
  }: {
    skip: number;
    take: number;
    name: string;
    subCategoryId: string;
    categoryId: string;
    status: string;
  }) {
    try {
      const res = await authenticatedRequest.get(`/admins/product-lists`, {
        params: {
          skip: skip || 0,
          take: take || product_lists_config.itemPerPage,
          ...(name && { name: name }),
          ...(subCategoryId && { subCategoryId: subCategoryId }),
          ...(categoryId && { categoryId: categoryId }),
          ...(status && { status: status }),
        },
      });

      if (res.status === 200) {
        return res.data;
      }
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  async getProductDetail({
    category,
    productId,
  }: {
    productId: string;
    category: string;
  }) {
    try {
      const res = await request.get(`/${category}-products/${productId}`);

      if (res.status === 200) {
        return res.data.data;
      }
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  async getFinanceProductOptions({ productId }: { productId: string }) {
    try {
      const res = await request.get(
        `/finance-products/${productId}/finance-product-price-options`
      );

      if (res.status === 200) {
        return res.data.data;
      }
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  async getProductInstallmentOptions({
    downOptionId,
  }: {
    downOptionId: string;
  }) {
    try {
      const res = await request.get(
        `/finance-product-down-options/${downOptionId}/finance-product-installment-options`
      );

      if (res.status === 200) {
        return _.sortBy(res.data.data, 'value');
      }
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  async getProductInstallmentPrice({
    financeProductId,
    priceOptionId,
    colorOptionId,
    downOptionId,
    installmentOptionId,
  }: {
    financeProductId: string;
    priceOptionId: string;
    colorOptionId: string;
    downOptionId: string;
    installmentOptionId: string;
  }) {
    try {
      const res = await request.get(
        `/finance-products/${financeProductId}/price-option/${priceOptionId}/color-option/${colorOptionId}/down-option/${downOptionId}/installment-option/${installmentOptionId}/installment-price`
      );

      if (res.status === 200) {
        return res.data.data;
      }
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  async getProductSpecialCampaignInstallmentPrice({
    financeProductId,
    priceOptionId,
    colorOptionId,
    specialCampaignOptionId,
  }: {
    financeProductId: string;
    priceOptionId: string;
    colorOptionId: string;
    specialCampaignOptionId: string;
  }) {
    try {
      const res = await request.get(
        `/finance-products/${financeProductId}/price-option/${priceOptionId}/color-option/${colorOptionId}/special-campaign-option/${specialCampaignOptionId}/installment-price`
      );

      if (res.status === 200) {
        return res.data.data;
      }
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  async getNewcarProductOptions({ productId }: { productId: string }) {
    try {
      const res = await request.get(
        `/newcar-products/${productId}/newcar-product-price-options`
      );

      if (res.status === 200) {
        return res.data.data;
      }
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  async getNewcarInstallmentOptions({
    downOptionId,
  }: {
    downOptionId: string;
  }) {
    try {
      const res = await request.get(
        `/newcar-product-down-options/${downOptionId}/newcar-product-installment-options`
      );

      if (res.status === 200) {
        return _.sortBy(res.data.data, 'value');
      }
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  async getNewcarInstallmentPrice({
    financeProductId,
    priceOptionId,
    colorOptionId,
    downOptionId,
    installmentOptionId,
  }: {
    financeProductId: string;
    priceOptionId: string;
    colorOptionId: string;
    downOptionId: string;
    installmentOptionId: string;
  }) {
    try {
      const res = await request.get(
        `/newcar-products/${financeProductId}/price-option/${priceOptionId}/color-option/${colorOptionId}/down-option/${downOptionId}/installment-option/${installmentOptionId}/installment-price`
      );

      if (res.status === 200) {
        return res.data.data;
      }
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  async getNewcarSpecialCampaignInstallmentPrice({
    financeProductId,
    priceOptionId,
    colorOptionId,
    specialCampaignOptionId,
  }: {
    financeProductId: string;
    priceOptionId: string;
    colorOptionId: string;
    specialCampaignOptionId: string;
  }) {
    try {
      const res = await request.get(
        `/newcar-products/${financeProductId}/price-option/${priceOptionId}/color-option/${colorOptionId}/special-campaign-option/${specialCampaignOptionId}/installment-price`
      );

      if (res.status === 200) {
        return res.data.data;
      }
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  async getFinanceProductModel() {
    try {
      const res = await request.get(`/finance-product-models`);

      if (res.status === 200) {
        return res.data.data;
      }
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  async updateFinanceProductStatus({
    productId,
    status,
    remark,
  }: {
    productId: string;
    status: string;
    remark: string;
  }) {
    try {
      const res = await authenticatedRequest.patch(
        `/finance-products/${productId}/status`,
        {
          status,
          remark,
        }
      );

      if (res.status === 200) {
        return res.data.data;
      }
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  async updateNewCarProductStatus({
    productId,
    status,
    remark,
  }: {
    productId: string;
    status: string;
    remark: string;
  }) {
    try {
      const res = await authenticatedRequest.patch(
        `/newcar-products/${productId}/status`,
        {
          status,
          remark,
        }
      );

      if (res.status === 200) {
        return res.data.data;
      }
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  async updateKintoProductStatus({
    productId,
    status,
    remark,
  }: {
    productId: string;
    status: string;
    remark: string;
  }) {
    try {
      const res = await authenticatedRequest.patch(
        `/kinto-products/${productId}/status`,
        {
          status,
          remark,
        }
      );

      if (res.status === 200) {
        return res.data.data;
      }
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
};

export default productServices;
