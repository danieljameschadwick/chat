import { Theme } from "@chat/types/enum/Theme";
import { darkStyles } from "@chat/theme/styles/darkStyles";
import { lightStyles } from "@chat/theme/styles/lightStyles";
import { useAppSelector } from "@chat/state/hooks";
import { selectTheme } from "@chat/state/reducer/ThemeReducer";

export const getTheme = () => {
  const theme = useAppSelector(selectTheme);

  if (theme === Theme.DARK_MODE) {
    return darkStyles;
  }

  // default to LIGHT_MODE
  return lightStyles;
};
