'use client';
import React, { useState, useEffect, useRef } from 'react';

export default function FooterReveal({ children, footer }) {
    const [footerHeight, setFooterHeight] = useState(0);
    const footerRef = useRef(null);

    useEffect(() => {
        if (!footerRef.current) return;

        const updateHeight = () => {
            if (footerRef.current) {
                setFooterHeight(footerRef.current.offsetHeight);
            }
        };

        const resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                updateHeight();
            }
        });

        resizeObserver.observe(footerRef.current);
        updateHeight();

        // Initial check and a small delay to handle dynamic content loading
        const timer = setTimeout(updateHeight, 500);

        return () => {
            resizeObserver.disconnect();
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className="footer-reveal-container">
            <main
                className="main-content-wrapper shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
                style={{ marginBottom: footerHeight }}
            >
                {children}
            </main>
            <div ref={footerRef} className="sticky-footer-wrapper">
                {footer}
            </div>
        </div>
    );
}
