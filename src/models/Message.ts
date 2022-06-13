interface Message {
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
