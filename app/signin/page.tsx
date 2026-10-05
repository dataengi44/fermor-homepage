import type { Metadata } from "next";
import AuthForm from "@/components/AuthForm";

export const metadata: Metadata = { title: "Sign in | Fermor" };
export default function SignIn() { return <AuthForm mode="signin" />; }