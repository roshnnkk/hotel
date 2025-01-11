export const SAVE_USER_DATA = "SAVE_USER_DATA";
export const saveUserData = (data) => ({
  type: SAVE_USER_DATA,
  payload: data,
});
