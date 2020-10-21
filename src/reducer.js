export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //REMOVE AFTER FINISHED DEVELOPING
  // token:
  //   "BQDq1MqeK0JdujjMnpvWXtK3jmPnDdhmtFfVt31H1t2QPNmXjE…kirosBFprbS4XvMXGIHnByBfitJng7xSL6TduSGYYbvQQJ7eQ",
};

const reducer = (state, action) => {
  console.log(action);

  //Action -> type, [payload]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

      case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly
      };
    default:
      return state;
  }
};
export default reducer;
