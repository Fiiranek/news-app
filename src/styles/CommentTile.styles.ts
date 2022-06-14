import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    alignItems: "flex-start",
    width: "100%",
    marginVertical: 10,
    borderTopColor: "#ddd",
    borderTopWidth: 1,
    paddingTop: 10,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  authorData: {
    marginLeft: 5,
  },
  author: {
    fontSize: 16,
  },
  date: {
    marginVertical: 5,
    color: "#aaa",
    fontSize: 14,
  },
  content: {
    marginTop: 5,
    marginLeft: 10,
  },
  contentText: {
    fontSize: 17,
  },
  bottom: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    width: "100%",
    borderRadius: 10,
    marginTop: 5,
    marginHorizontal: 10,
  },
  likeCount: {
    marginLeft: 10,
  },
});
