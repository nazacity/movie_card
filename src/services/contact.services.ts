import request from 'utils/request';
import authenticatedRequest from 'utils/authenticatedRequest';

const contactService = {
  async getContactList({
    memberType,
    subjectID,
  }: {
    memberType: string;
    subjectID: string;
  }) {
    try {
      const subjectquery =
        subjectID != 'all' ? `&questionTypeId=${subjectID}` : '';
      const res = await authenticatedRequest.get(
        `/contact?userType=${memberType}${subjectquery}`
      );

      if (res.status === 200) {
        return res.data.data;
      }
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
};

export default contactService;
