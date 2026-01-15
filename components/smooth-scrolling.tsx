"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

function ScrollManager() {
    const pathname = usePathname();
    const lenis = useLenis();

    useEffect(() => {
        // Force scroll to top on page navigation
        // immediate: true ensures it happens instantly without animation
        lenis?.scrollTo(0, { immediate: true });
    }, [pathname, lenis]);

    return null;
}

export default function SmoothScrolling({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
            <ScrollManager />
            {children}
        </ReactLenis>
    );
}
