import { View, Text, SafeAreaView, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import styles from "../styles/News.styles";
import AutoHeightWebView from "react-native-autoheight-webview";
import Utils from "../Utils";
import CommentTile from "./CommentTile";
import { ScrollView } from "native-base";

type ParamList = {
  details: {
    message: Message;
  };
};
export default function NewsDetails() {
  const [height, setHeight] = useState<number>(0);
  const route = useRoute<RouteProp<ParamList, "details">>();
  const navigation = useNavigation();
  const message: Message = route.params.message;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: message.title,
    });
  }, []);

  return (
    <SafeAreaView style={styles.newsDetailsContainer}>
      <ScrollView>
        <View style={styles.newsTileTop}>
          <Text style={styles.newsTileTitle}>{message.title}</Text>
          <View style={styles.newsInfo}>
            <Text style={styles.newsTileDate}>
              {Utils.formatDate(message.createDate)}
            </Text>
            <Text style={styles.newsTileDate}>{message.author.fullName}</Text>
          </View>
        </View>

        <AutoHeightWebView
          style={{
            width: Dimensions.get("window").width,
            marginVertical: 10,
            height: height,
          }}
          onSizeUpdated={(size) => {
            setHeight(size.height);
          }}
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
        {message.comments.map((comment) => (
          <CommentTile comment={comment} key={comment.id} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
