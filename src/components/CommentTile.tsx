import { View, Text } from "react-native";
import React from "react";
import styles from "../styles/News.styles";
type Props = {
  comment: MessageComment;
  // navigation:NativeStackScreenProps["navigation"];
};

// export default function CommentTile({ comment }: Props) {
export default function CommentTile() {
  const comment = {
    id: 6651,
    content: "Ja też nigdzie się nie wybieram ",
    author: {
      id: 10003,
      fullName: "Jadwiga Marcinkowska",
    },
    createDate: "2022-06-13T12:55:59.7602697Z",
    numberOfLikes: 10,
    isLiked: false,
  };

  return (
    <View style={styles.comment}>
      <Text>{comment.content}</Text>
    </View>
  );
}
