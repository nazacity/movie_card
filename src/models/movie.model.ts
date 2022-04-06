export interface IBanner {
  attributes: {
    order: number;
    resourceUrl: string;
    type: string;
    callBackUrl: string;
    expiryDate: string;
    description: string;
    hexColorCode: string;
  };
  id: string;
  type: string;
}
