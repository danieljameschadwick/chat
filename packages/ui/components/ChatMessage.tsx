import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { getTheme } from "@chat/theme/utils/theme";

export const ChatMessage: React.FC = ({ user, message }) => {
  const themeStyles = getTheme();

  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      <Text style={[styles.user, themeStyles.text]}>{`${user}:`}</Text>
      <Text style={[themeStyles.text]}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  user: {
    marginRight: 2,
  },
});
