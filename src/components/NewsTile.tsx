import { useNavigation } from "@react-navigation/native";
// import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  ListRenderItemInfo,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import AutoHeightWebView from "react-native-autoheight-webview";
import { WebView } from "react-native-webview";
import styles from "../styles/News.styles";
import Utils from "../Utils";
type Props = {
  message: Message;
};

export default function NewsTile({ message }: Props) {
  // export default function NewsTile({ message}) {
  const navigation = useNavigation();
  const [height, setHeight] = useState<number>(0);
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("NewsDetails", {
          message: message,
        });
      }}
    >
      <View style={styles.newsTile}>
        <ScrollView>
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
            // customScript={`document.body.style.background = 'lightyellow';`}
            onSizeUpdated={(size) => {
              setHeight(size.height);
            }}
            source={{
              html: `
            <body style='font-size:${1}rem'>
              ${message.content.toString()}
            </body>
            `,
            }}
            scalesPageToFit={false}
            viewportContent={"width=device-width, user-scalable=no"}
            /*ł
    other react-native-webview props
    */
          />
        </ScrollView>
      </View>
    </TouchableOpacity>
  );
}
