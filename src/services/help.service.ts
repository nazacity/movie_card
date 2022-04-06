import request from 'utils/request';
import authenticatedRequest from 'utils/authenticatedRequest';

const helpService = {
  async getSubjectList(memberType: string) {
    try {
      const res = await authenticatedRequest.get(
        `/question-types?userType=${memberType}`
      );

      if (res.status === 200) {
        return res.data.data;
      }
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  async getSubjectById(subjectID: string) {
    try {
      const res = await authenticatedRequest.get(
        `/question-types/${subjectID}`
      );

      if (res.status === 200) {
        return res.data.data;
      }
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  async addSubject(data: FormData) {
    try {
      const res = await authenticatedRequest.post('/question-types', data);

      if (res.status === 200) {
        return res.data.data;
      }
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  async editSubject({
    subjectID,
    data,
  }: {
    subjectID: string;
    data: FormData;
  }) {
    try {
      const res = await authenticatedRequest.put(
        `/question-types/${subjectID}`,
        data
      );

      if (res.status === 200) {
        return res.data.data;
      }
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  async deleteSubject(subjectID: string) {
    try {
      const res = await authenticatedRequest.delete(
        `/question-types/${subjectID}`
      );

      if (res.status === 200) {
        return res.data.data;
      }
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  async uploadSubjectIcon(data: Blob) {
    const formData = new FormData();
    formData.append('image', data);

    try {
      const res = await authenticatedRequest.post(`/question-types/image`, formData);
      if (res.status === 201) {
        return res.data.data;
      }
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  async getFaqListByMemberType(memberType: string) {
    try {
      const res = await authenticatedRequest.get(
        `/help-questions?userType=${memberType}`
      );

      if (res.status === 200) {
        return res.data.data;
      }
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  async getFaqListBySubjectId(subjectId: string) {
    try {
      const res = await authenticatedRequest.get(
        `/question-types/${subjectId}/help-questions`
      );

      if (res.status === 200) {
        return res.data.data;
      }
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  async uploadFaqCover(data: Blob) {
    const formData = new FormData();
    formData.append('image', data);

    try {
      const res = await authenticatedRequest.post(`/help-questions/image`, formData);
      if (res.status === 201) {
        return res.data.data;
      }
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  async addFaq(data: FormData) {
    try {
      const res = await authenticatedRequest.post('/help-questions', data);

      if (res.status === 200) {
        return res.data.data;
      }
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  async editFaq({
    faqID,
    data,
  }: {
    faqID: string;
    data: FormData;
  }) {
    try {
      const res = await authenticatedRequest.put(
        `/help-questions/${faqID}`,
        data
      );

      if (res.status === 200) {
        return res.data.data;
      }
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  async getFaqById(faqID: string) {
    try {
      const res = await authenticatedRequest.get(
        `/help-questions/${faqID}`
      );

      if (res.status === 200) {
        return res.data.data;
      }
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  async deleteFaq(faqID: string) {
    try {
      const res = await authenticatedRequest.delete(
        `/help-questions/${faqID}`
      );

      if (res.status === 200) {
        return res.data.data;
      }
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
};

export default helpService;
