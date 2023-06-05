
import Cookies from "js-cookie";

export const useLogout = () => {
  const logout = () => {
    Cookies.remove('currentUser');
    Cookies.remove('Token');
  };

  return { logout };
};