import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import SharedGroupPreferences from "react-native-shared-group-preferences";
import store, { persistor } from "@chat/state/store";
import { Navigator } from "./src/navigation/Navigator";

const appGroupIdentifier = "com.group.chat";

const widgetData = {
  exampleData: "Test Text",
};

// @TODO: setupWidgets example
const setupWidgets = () => {
  try {
    SharedGroupPreferences.setItem(
      "chatWidget", // this is a key to pull from later in Swift
      widgetData,
      appGroupIdentifier
    );
  } catch (error) {
    console.log(error);
  }
};

const App: React.FC = () => {
  setupWidgets();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

  return (
    <SafeAreaProvider style={styles.container}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar />

          <Navigator />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
