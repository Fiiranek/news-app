import React, { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  ListRenderItem,
  ActivityIndicator,
  View,
  Text,
} from "react-native";
import styles from "../styles/News.styles";
import NewsTile from "./NewsTile";
import APIManager from "../services/APIManager";

export default function News() {
  const renderItem: ListRenderItem<Message> = ({ item }) => (
    <NewsTile message={item} key={item.id} />
  );

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [messagesList, setMessagesList] = useState<Array<Message>>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isPaginationLoading, setIsPaginationLoading] = useState<boolean>(true);

  const refreshData = () => {
    APIManager.fetchMessages(currentPage)
      .then((res) => {
        if (!res.ok) {
          setIsError(true);
          setIsLoading(false);
          setIsPaginationLoading(false);
          return;
        }
        return res.json();
      })
      .then((data) => {
        const messages: Array<Message> = data.messages;
        setMessagesList([...messagesList, ...messages]);
        setIsLoading(false);
        setIsPaginationLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
        setIsLoading(false);
        setIsPaginationLoading(false);
      });
  };

  useEffect(() => {
    refreshData();
  }, []);

  useEffect(() => {
    refreshData();
  }, [currentPage]);

  // function responsible for pagination effect
  const onEndReached = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={"large"} color={"black"} />
      ) : isError ? (
        <View>{<Text>Error</Text>}</View>
      ) : (
        <View>
          <FlatList
            onEndReached={onEndReached}
            onEndReachedThreshold={0}
            data={messagesList}
            renderItem={renderItem}
          ></FlatList>
          {isPaginationLoading ? (
            <ActivityIndicator size={"small"} color={"black"} />
          ) : undefined}
        </View>
      )}
    </SafeAreaView>
  );
}
