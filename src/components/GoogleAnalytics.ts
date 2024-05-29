"use client";

import initializeGA from "@/utils/google-analytics";
import { useEffect } from "react";

export default function GA4_Initiator() {
    useEffect(() => {
        if (!window.GA_INITIALIZED) {
            initializeGA();
            window.GA_INITIALIZED = true;
        }
    }, []);

    return null;
}
