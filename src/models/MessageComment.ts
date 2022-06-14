interface MessageComment {
  /**
   * @param {string} id - id of comment
   * @param {string} content - content of comment
   * @param {Author} author - author of comment
   * @param {string} createDate - date of comment creation
   * @param {MessageComment[]} comments - comments of comment
   * @param {number} numberOfLikes - number of likes of comment
   * @param {boolean} isLiked - is comment liked
   */
  id: string;
  content: string;
  author: Author;
  createDate: string;
  numberOfLikes: 2;
  isLiked: boolean;
}
