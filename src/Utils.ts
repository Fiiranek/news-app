import moment from "moment";
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
export default class Utils {
  static shortenText = (text: string, charsNum: number = 60) => {
    return text.substring(0, charsNum) + "...";
  };

  static formatDate = (date: string): string => {
    let dateStr: string = moment(new Date(date))
      .format("DD MM YYYY")
      .toString();
    let monthNumber: number = parseInt(dateStr.split(" ")[1]);
    let month: string = MONTHS[monthNumber - 1];
    return dateStr.split(" ")[0] + " " + month + " " + dateStr.split(" ")[2];
  };
}
