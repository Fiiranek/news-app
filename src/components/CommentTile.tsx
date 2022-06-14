import { View, Text } from "react-native";
import React from "react";
import styles from "../styles/CommentTile.styles";
import { Icon } from "react-native-elements";
import Utils from "../Utils";

type Props = {
  comment: MessageComment;
};

export default function CommentTile({ comment }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Icon
          name="person"
          raised={true}
          color={"#555"}
          reverseColor={"white"}
          size={20}
          reverse={true}
        />
        <View style={styles.authorData}>
          <Text style={styles.author}>{comment.author.fullName}</Text>
          <Text style={styles.date}>
            {Utils.formatDate(comment.createDate)}
          </Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>{comment.content}</Text>
      </View>
      <View style={styles.bottom}>
        <Icon
          name="thumb-up"
          size={15}
          color={comment.isLiked ? "blue" : "black"}
        />
        <Text style={styles.likeCount}>
          {comment.numberOfLikes.toString()} Likes
        </Text>
      </View>
    </View>
  );
}
