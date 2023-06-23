import Cookies from "js-cookie";

export default Cookies.get("token") ? "Bearer " + Cookies.get("token"): undefined;