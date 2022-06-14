import { View, Text, SafeAreaView, Dimensions } from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "../styles/News.styles";
import AutoHeightWebView from "react-native-autoheight-webview";
import Utils from "../Utils";
import CommentTile from "./CommentTile";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";

type Props = {
  route: RouteProp<{ params: {} }, "params">;
};

export default function NewsDetails() {
  const [height, setHeight] = useState<number>(0);
  const navigation = useNavigation();
  const route = useRoute();
  const message: Message = route.params.message;
  return (
    <SafeAreaView style={styles.newsDetails}>
      <Text style={styles.newsTileTitle}>{message.title}</Text>
      <View style={styles.newsInfo}>
        <Text style={styles.newsTileDate}>
          {Utils.formatDate(message.createDate)}
        </Text>
        <Text style={styles.newsTileDate}>{message.author.fullName}</Text>
      </View>

      <View style={styles.newsBorder}></View>
      <AutoHeightWebView
        style={{
          width: Dimensions.get("window").width,
          marginTop: 10,
          height: height,
        }}
        onSizeUpdated={(size) => setHeight(size.height)}
        source={{
          html: `
            <body style='font-size:${1}rem;padding:10'>
              ${message.content.toString()}
            </body>
            `,
        }}
        scalesPageToFit={false}
        viewportContent={"width=device-width, user-scalable=no"}
      />
      <CommentTile />
    </SafeAreaView>
  );
}
