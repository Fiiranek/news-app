import { API_URL, TOKEN_AUTH_USERNAME, TOKEN_AUTH_PASSWORD } from "../config";
export default class APIManager {
  static async fetchMessages(page: number = 0): Promise<any> {
    /**
     * @param {number} page - page number of messages request, default 0
     */
    const token: string | boolean = await this.getAuthToken();
    if (!token) return false;
    return fetch(`${API_URL}/Messages?page=${page}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  static async getAuthToken(): Promise<string | boolean> {
    /**
     * @returns {string} - auth token or false if failed
     */
    try {
      const response = await fetch(`${API_URL}/Auth`, {
        method: "POST",
        body: JSON.stringify({
          username: TOKEN_AUTH_USERNAME,
          password: TOKEN_AUTH_PASSWORD,
        }),
      });
      const json = await response.json();
      const token = json.token;
      return token;
    } catch (err) {
      return false;
    }
  }
}
