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
    borderRadius: 5,
    backgroundColor: "white",
    padding: 10,
  },
  newsBorder: {
    marginVertical: 10,
    backgroundColor: "#ddd",
    height: 2,
  },
  newsInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  newsTileTitle: {
    color: "darkblue",
    fontWeight: "normal",
    fontSize: 18,
  },
  newsTileDate: {
    marginVertical: 5,
    color: "black",

    fontSize: 14,
  },

  newsDetails: {
    backgroundColor: "white",
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },

  comment: {},
});
