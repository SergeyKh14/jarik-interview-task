export interface User {
  name: string;
  image?: string;
  credits?: number;
}

export interface Message {
  text: string;
  createdAt: string;
  user: User;
  isMe: boolean;
}

export interface GroupedMessage {
  user: User;
  isMe: boolean;
  timeAgo: string;
  messages: Partial<Message>[];
}
