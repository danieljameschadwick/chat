import { useAppSelector } from "@chat/state/hooks";
import { selectTheme } from "@chat/state/reducer/ThemeReducer";
import { Theme } from "@chat/types/enum/Theme";
import { primaryText as darkPrimaryText, primaryContainer as darkPrimaryContainer } from "../variables/darkPalette";
import { primaryText, primaryContainer } from "../variables/lightPalette";

/**
 * // @TODO: refactor to map
 * 
 * need some sort of solution to not have this
 * repeated pattern for all vars, maybe a mapper
 */
export const getPrimaryText = (): string => {
  const theme = useAppSelector(selectTheme);

  if (theme === Theme.DARK_MODE) {
    return darkPrimaryText;
  }

  return primaryText;
};

export const getPrimaryContainer = (): string => {
  const theme = useAppSelector(selectTheme);

  if (theme === Theme.DARK_MODE) {
    return darkPrimaryContainer;
  }

  return primaryContainer;
};
