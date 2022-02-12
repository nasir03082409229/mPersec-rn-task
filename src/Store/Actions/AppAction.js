import { GET_COMMENTS, GET_POSTS, GET_USERS } from '../Types/actions_type';

class AuthAction {
    static getUsers = payload => {
        return {
            type: GET_USERS,
            payload: payload,
        };
    };
    static getPosts = payload => {
        return {
            type: GET_POSTS,
            payload: payload,
        };
    };
    static getComments = payload => {
        return {
            type: GET_COMMENTS,
            payload: payload,
        };
    };

}

export default AuthAction;