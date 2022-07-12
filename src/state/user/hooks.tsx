import { useAppSelector } from "state/store";

export function useIsDarkMode(): boolean {
  const { userDarkMode } = useAppSelector((state) => state.user);

  return userDarkMode;
}
