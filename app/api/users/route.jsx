import { NextResponse } from "next/server";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/configs/FireBaseConfig";

export async function POST(req) {
  const { userName, userEmail } = await req.json();
  console.log(userName, userEmail);

  try {
    // If user is already registered
    const docRef = doc(db, "users", userEmail);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("user already exists");
      return NextResponse.json(docSnap.data());
    } else {
      const data = {
        userName: userName,
        userEmail: userEmail,
      };
      await setDoc(doc(db, "users", userEmail), data);
      return NextResponse.json(data);
    }
  } catch (error) {
    return NextResponse.error(error);
  }
}
