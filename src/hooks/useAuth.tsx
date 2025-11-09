import { useLocalStorage } from "./useLocalStorage";

export const useAuth = (): boolean => {
    const [token] = useLocalStorage<string>("token");
    const isAuthenticated = !!token;
    return isAuthenticated;
}