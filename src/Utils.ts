export default class Utils {
  static shortenText = (text: string, charsNum: number = 60) => {
    return text.substring(0, charsNum) + "...";
  };
}
