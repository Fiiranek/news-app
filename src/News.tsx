import React, { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  ListRenderItem,
  ListRenderItemInfo,
  ActivityIndicator,
  View,
  Text,
} from "react-native";
import styles from "./News.styles";
import NewsTile from "./NewsTile";
import APIManager from "./services/APIManager";

const renderItem: ListRenderItem<Message> = ({ item }) => (
  <NewsTile message={item} />
);

export default function News() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [messagesList, setMessagesList] = useState<Array<Message>>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    (async function () {
      // let messages: Array<Message> = await APIManager.fetchMessages();
      // setMessagesList([...messages]);
      APIManager.fetchMessages()
        .then((res) => {
          if (!res.ok) {
            setIsError(true);
            setIsLoading(false);
            return;
          }
          return res.json();
        })
        .then((data) => {
          const messages: Array<Message> = data.messages;
          setMessagesList([...messages]);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsError(true);
          setIsLoading(false);
        });
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={"large"} color={"black"} />
      ) : isError ? (
        <View>{<Text>Error</Text>}</View>
      ) : (
        <FlatList data={messagesList} renderItem={renderItem}></FlatList>
      )}
    </SafeAreaView>
  );
}
