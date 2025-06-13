// app/api/board/route.ts
import {
  collection,
  addDoc,
  getDocs,
  orderBy,
  query,
  Timestamp,
  limit,
} from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";
import { store } from "@/remote/firebase";

const collectionRef = collection(store, "comments");

const COMMENTS_PER_PAGE = 10;

export async function GET(req: NextRequest) {
  const page = parseInt(req.nextUrl.searchParams.get("page") || "1", 10);
  const commentsRef = collection(store, "comments");

  const q = query(
    commentsRef,
    orderBy("createdAt", "desc"),
    limit(COMMENTS_PER_PAGE * page),
  );

  const snapshot = await getDocs(q);

  const comments = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as { name: string; text: string }),
  }));

  return NextResponse.json(comments);
}

export async function POST(req: NextRequest) {
  const { name, text } = await req.json();

  if (!name || !text) {
    return NextResponse.json(
      { error: "이름과 내용을 입력하세요" },
      { status: 400 },
    );
  }

  const docRef = await addDoc(collectionRef, {
    name,
    text,
    createdAt: Timestamp.now(),
  });

  return NextResponse.json({ success: true, id: docRef.id });
}
