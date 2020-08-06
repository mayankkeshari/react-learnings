import jsonPlaceHolder from "../apis/jsonPlaceHolder";
import _ from "lodash";

export const fetchPosts = () => async (dispatch) => {
  const res = await jsonPlaceHolder.get("/posts");
  dispatch({
    type: "FETCH_POSTS",
    payload: res.data,
  });
};

// This let the same api being called multiple times
// export const fetchUser = (id) => async (dispatch) => {
//     const res = await jsonPlaceHolder.get(`/users/${id}`);
//     dispatch(
//         {
//             type: "FETCH_USER",
//             payload: res.data
//           }
//     );
// };

// export const fetchUser = (id) => async (dispatch) => {
//     memoizedFetchUser(id, dispatch);
// };

// The memoization helps in not calling same api multiple times
const memoizedFetchUser = _.memoize(async (id, dispatch) => {
  const res = await jsonPlaceHolder.get(`/users/${id}`);
  dispatch({
    type: "FETCH_USER",
    payload: res.data,
  });
});

//
export const fetchUser = (id) => async (dispatch) => {
  const res = await jsonPlaceHolder.get(`/users/${id}`);
  dispatch({
    type: "FETCH_USER",
    payload: res.data,
  });
};

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  // const uniqueUserIds = _.uniq(_.map(getState().posts, 'userId'));
  // uniqueUserIds.forEach(id => {
  //     dispatch(fetchUser(id));
  // });

  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();
};
