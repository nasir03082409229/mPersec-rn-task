import Axios from 'axios';
import AppAction from '../Actions/AppAction';
import Apis from '../Apis';


class AppMiddleware {

  static getUsers = () => {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          const { data } = await Axios.get(
            Apis.getUsers
          );
          console.log(data)
          return;
          dispatch(AppAction.getUsers(data.data));
        } catch (error) {
          reject(error);
          alert('Network Error');

          console.log(error);
        }
      });
    };
  };

}

export default AppMiddleware;