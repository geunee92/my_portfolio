import { Timestamp } from "firebase/firestore";

export interface Comment {
  id: string;
  name: string;
  text: string;
  createdAt: Timestamp;
}
