import { useAppDispatch } from "state/store";
import { useIsDarkMode } from "state/user/hooks";
import { updateUserDarkMode } from "state/user/slice";

export default function Home() {
  const dispatch = useAppDispatch();
  const darkMode = useIsDarkMode();

  dispatch(updateUserDarkMode({ userDarkMode: !darkMode }));

  return (
    <>
      <h1>Home</h1>
    </>
  );
}
