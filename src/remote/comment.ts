import {
  collection,
  query,
  orderBy,
  limit,
  getDocs,
  addDoc,
  serverTimestamp,
  QueryDocumentSnapshot,
  startAfter,
} from "firebase/firestore";
import { Comment } from "@/types/comment";
import { store } from "./firebase";

const COMMENTS_PER_PAGE = 5;

export async function fetchComments(
  lastVisible?: QueryDocumentSnapshot | null,
) {
  const commentsRef = collection(store, "comments");

  const q = lastVisible
    ? query(
        commentsRef,
        orderBy("createdAt", "desc"),
        startAfter(lastVisible),
        limit(COMMENTS_PER_PAGE),
      )
    : query(
        commentsRef,
        orderBy("createdAt", "desc"),
        limit(COMMENTS_PER_PAGE),
      );

  const snapshot = await getDocs(q);

  const comments = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Comment, "id">),
  }));

  return {
    comments,
    lastVisible: snapshot.docs[snapshot.docs.length - 1] ?? null,
  };
}

export async function postComment({
  name,
  text,
}: {
  name: string;
  text: string;
}) {
  const docRef = await addDoc(collection(store, "comments"), {
    name,
    text,
    createdAt: serverTimestamp(),
  });

  return {
    id: docRef.id,
    name,
    text,
  };
}
