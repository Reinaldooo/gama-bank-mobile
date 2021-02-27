import AsyncStorage from "@react-native-async-storage/async-storage";

export interface AuthDetails {
  token: string | null;
  login: string | null;
  userName: string | null;
}

export const isAuth = async (): Promise<AuthDetails | undefined> => {
  try {
    const token = await AsyncStorage.getItem("@tokenApp");
    const login = await AsyncStorage.getItem("@loginApp");
    const userName = await AsyncStorage.getItem("@userNameApp");
    if (token && login) {
      return {
        login,
        token,
        userName,
      };
    }
    return {
      login: null,
      token: null,
      userName: null,
    };
  } catch (e) {
    console.log(e);
  }
};
