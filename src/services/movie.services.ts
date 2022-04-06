import axios from 'axios';

const movieServices = {
  async getMovies() {
    try {
      const res = await axios.get(
        'https://d8507f31-e019-405e-b459-8b395e90efb4.mock.pstmn.io/movies'
      );

      if (res.status === 200) {
        return res.data.movies;
      }
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
};

export default movieServices;
