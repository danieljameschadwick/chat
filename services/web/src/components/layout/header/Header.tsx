import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native-web";
import { useRouter } from "next/router";
import Link from "next/link";
import IonIcon from "react-native-vector-icons/Ionicons";
import { Z_INDEXES } from "@chat/types/enum/zIndex";
import { useAppDispatch, useAppSelector } from "@chat/state/hooks";
import { Theme } from "@chat/types/enum/Theme";
import { selectTheme, setTheme } from "@chat/state/reducer/ThemeReducer";
import { getTheme } from "@chat/theme/utils/theme";

export const Header: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);
  const themeStyles = getTheme();
  const user = null;

  const dispatchTheme = (theme: Theme) => {
    dispatch(setTheme(theme));
  };

  const logout = () => {
    // @TODO: user state
    // dispatch(setTokens(null));
    // dispatch(setStoreUser(null));
    router.push("/");

    return;
  };

  return (
    <View style={[styles.container, themeStyles.lightContainer]}>
      <Link href={"/"}>
        <Text style={styles.logoText}>chat</Text>
      </Link>

      <View style={styles.themeContainer}>
        {theme === Theme.LIGHT_MODE && (
          <TouchableOpacity onPress={() => dispatchTheme(Theme.DARK_MODE)}>
            <IonIcon style={[themeStyles.text]} name={"sunny"} />
          </TouchableOpacity>
        )}
        {theme === Theme.DARK_MODE && (
          <TouchableOpacity onPress={() => dispatchTheme(Theme.LIGHT_MODE)}>
            <IonIcon style={[themeStyles.text]} name={"moon"} />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.linksContainer}>
        {user ? (
          <>
            <Text
              accessibilityRole="link"
              style={[styles.link, themeStyles.text]}
              onPress={() => logout()}
            >
              Logout
            </Text>
          </>
        ) : (
          <>
            <Text
              accessibilityRole="link"
              style={[styles.link, themeStyles.text]}
              onPress={() => router.push("/login")}
            >
              Login
            </Text>

            <Text
              accessibilityRole="link"
              style={[styles.link, themeStyles.text]}
              onPress={() => router.push("/register")}
            >
              Register
            </Text>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "fixed",
    zIndex: Z_INDEXES.OVERLAY,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: 50,
    padding: 12,
    borderBottomWidth: 1,
  },
  logoText: {
    alignSelf: "center",
    fontSize: 17,
    fontWeight: "bold",
    color: "rgb(255,113,0)",
  },
  themeContainer: {
    flexGrow: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    marginRight: 10,
  },
  linksContainer: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
  },
  link: {
    padding: 6,
  },
});
