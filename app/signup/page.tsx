import type { Metadata } from "next";
import AuthForm from "@/components/AuthForm";

export const metadata: Metadata = { title: "Create your account | Fermor" };
export default function SignUp() { return <AuthForm mode="signup" />; }