import Cookies from "js-cookie";

export function getAuthorizationHeader() {
  const currentUser = Cookies.get("currentUser");

  return {
    Authorization: currentUser ? `Bearer ${JSON.parse(currentUser || "")?.access_token || ""}` : '',
  };
}