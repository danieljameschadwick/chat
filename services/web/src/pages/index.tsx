import React from "react";
import { View } from "react-native-web";
import StyleSheet from "react-native-media-query";
import { SharedComponentExample } from "@chat/ui/components/SharedComponentExample";
import { Header } from "@src/components/layout/header/Header";
import { FluidPageContent } from "@src/components/layout/FluidPageContent";

const Index: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />

      <FluidPageContent style={containerStyles}>
        <View
          style={[styles.pageContainer]}
          dataSet={{ media: ids.pageContainer }}
        >
          <SharedComponentExample />
        </View>
      </FluidPageContent>
    </View>
  );
};

const { ids, styles } = StyleSheet.create({
  container: {
    minHeight: "100%",
  },
  pageContainer: {
    marginTop: 15,
    marginHorizontal: "auto",
    width: "100%",
    "@media (min-width: 667px)": {
      width: 660,
    },
  },
  heading: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 15,
  },
});

const { styles: containerStyles } = StyleSheet.create({
  container: {
    height: "100%",
    marginTop: 50,
    paddingBottom: 50,
  },
});

export default Index;
