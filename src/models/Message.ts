interface Message {
  /**
   * @param {string} id - id of message
   * @param {string} content - content of message
   * @param {Author} author - author of message
   * @param {string} createDate - date of message creation
   * @param {MessageComment[]} comments - comments of message
   * @param {number} numberOfLikes - number of likes of message
   * @param {boolean} isLiked - is message liked
   * @param {boolean} isLikedByUser - is message liked by user
   */
  id: string;
  content: string;
  title: string;
  comments: Array<MessageComment>;
  author: Author;
  numberOfLikes: number;
  createDate: string;
  isLiked: boolean;
  type: string;
}
