import Cookies from "js-cookie";

const token = Cookies.get("token") ? "Bearer " + Cookies.get("token"): undefined;
export default token;

export const authConfig = {
    headers: {
        credentials: 'include',
        Authorization: token
    }
}
