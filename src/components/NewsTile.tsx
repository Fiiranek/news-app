import { useNavigation } from "@react-navigation/native";
// import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  Text,
  View,
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

type Nav = {
  navigate: (value: string, {}) => void;
};

export default function NewsTile({ message }: Props) {
  // export default function NewsTile({ message}) {
  const navigation = useNavigation<Nav>();
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
        </ScrollView>
      </View>
    </TouchableOpacity>
  );
}
