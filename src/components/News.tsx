import React, { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  ListRenderItem,
  ActivityIndicator,
  View,
  RefreshControl,
} from "react-native";
import styles from "../styles/News.styles";
import NewsTile from "./NewsTile";
import APIManager from "../services/APIManager";
import Error from "../components/Error";
export default function News() {
  const renderItem: ListRenderItem<Message> = ({ item }) => (
    <NewsTile message={item} key={item.id} />
  );

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [messagesList, setMessagesList] = useState<Array<Message>>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isPaginationLoading, setIsPaginationLoading] = useState<boolean>(true);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const refreshData = (refresh: boolean = false) => {
    if (refresh) setIsRefreshing(true);
    APIManager.fetchMessages(currentPage)
      .then((res) => {
        if (!res.ok) {
          setIsError(true);
          setIsLoading(false);
          setIsPaginationLoading(false);
          setIsRefreshing(false);
          return;
        }
        return res.json();
      })
      .then((data) => {
        const messages: Array<Message> = data.messages;
        setMessagesList(
          currentPage === 0 ? [...messages] : [...messagesList, ...messages]
        );
        setIsLoading(false);
        setIsPaginationLoading(false);
        setIsRefreshing(false);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
        setIsLoading(false);
        setIsPaginationLoading(false);
        setIsRefreshing(false);
      });
  };

  useEffect(() => {
    refreshData();
  }, []);

  useEffect(() => {
    if (currentPage === 0) {
      refreshData(true);
    } else refreshData();
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
        <Error />
      ) : (
        <View>
          <FlatList
            refreshControl={
              <RefreshControl
                refreshing={isRefreshing}
                onRefresh={() => setCurrentPage(0)}
              />
            }
            onEndReached={onEndReached}
            onEndReachedThreshold={0}
            data={messagesList}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          ></FlatList>
          {isPaginationLoading ? (
            <ActivityIndicator size={"small"} color={"black"} />
          ) : undefined}
        </View>
      )}
    </SafeAreaView>
  );
}
