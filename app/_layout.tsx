import { Slot, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import { useAuthStore } from "@/stores/useAuthStore";

export default function RootLayout() {
  const { isLoggedIn } = useAuthStore();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inLoginPage = segments[0] !== "(tabs)";

    if (!isLoggedIn && !inLoginPage) {
      router.replace("/login");
    }

    if (isLoggedIn && inLoginPage) {
      router.replace("/");
    }
  }, [isLoggedIn, segments]);

  return <Slot />;
}
