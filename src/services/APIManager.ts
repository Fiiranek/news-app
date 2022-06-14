import Config from "react-native-config";
export default class APIManager {
  static async fetchMessages(page: number = 0) {
    const token: string = await this.getAuthToken();
    return fetch(`${Config.API_URL}/Messages?page=${page}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  static async getAuthToken(): Promise<string> {
    const response = await fetch(`${Config.API_URL}/Auth`, {
      method: "POST",
      body: JSON.stringify({
        username: Config.TOKEN_AUTH_USERNAME,
        password: Config.TOKEN_AUTH_PASSWORD,
      }),
    });
    // if(response.status !== 200) Throw new Error("Invalid username or password");
    const json = await response.json();
    const token = json.token;
    return token;
  }
}
