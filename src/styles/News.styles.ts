import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  newsTile: {
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "white",
  },
  newsTileTop: {
    backgroundColor: "#555",
    padding: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  newsBorder: {
    marginVertical: 10,
    backgroundColor: "#ddd",
    height: 1,
  },
  newsInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  newsTileTitle: {
    fontWeight: "normal",
    fontSize: 18,
    color: "white",
  },
  newsTileDate: {
    marginVertical: 5,
    color: "#eee",
    fontSize: 14,
  },
  newsDetailsContainer: {
    backgroundColor: "white",
    padding: 10,
  },
});
