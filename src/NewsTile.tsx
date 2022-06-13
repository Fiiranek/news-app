import moment from "moment";
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
import styles from "./News.styles";
import Utils from "./Utils";
type Props = {
  message: Message;
};

export default function NewsTile({ message }: Props) {
  const MONTHS = [
    "Styczeń",
    "Luty",
    "Marzec",
    "Kwiecień",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "Sierpień",
    "Wrzesień",
    "Październik",
    "Listopad",
    "Grudzień",
  ];

  const formatDate = (date: Date): string => {
    let dateStr: string = moment(message.createDate)
      .format("DD MM YYYY")
      .toString();
    let monthNumber: number = parseInt(dateStr.split(" ")[1]);
    let month: string = MONTHS[monthNumber - 1];
    return dateStr.split(" ")[0] + " " + month + " " + dateStr.split(" ")[2];
  };

  useEffect(() => {
    console.log(message);
  }, []);
  const [height, setHeight] = useState<number>(0);
  return (
    <TouchableOpacity onPress={}>
      <View style={styles.newsTile}>
        <ScrollView>
          <Text style={styles.newsTileTitle}>{message.title}</Text>
          <View style={styles.newsInfo}>
            <Text style={styles.newsTileDate}>
              {formatDate(new Date(message.createDate))}
            </Text>
            <Text style={styles.newsTileDate}>{message.author.fullName}</Text>
          </View>

          <View style={styles.newsBorder}></View>
          {/* <WebView
          // nestedScrollEnabled
          originWhitelist={["*"]}
          source={{
            html: `
        <body style='font-size:${3}rem'>
          ${Utils.shortenText(message.content.toString(), 300)}
        </body>
        `,
          }}
          style={{
            width: "100%",
            height: 200,
          }}
          scalesPageToFit
        /> */}

          <AutoHeightWebView
            style={{
              width: Dimensions.get("window").width,
              marginTop: 10,
              height: height,
            }}
            // customScript={`document.body.style.background = 'lightyellow';`}
            onSizeUpdated={(size) => {
              console.log(size.height);
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
