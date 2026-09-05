import React from 'react';

/**
 * Curtain / reveal footer.
 *
 * The footer sits at the end of the document and is pinned with
 * `position: sticky; bottom: 0`, while the opaque content wrapper scrolls
 * over it. Sticky keeps both boxes in the same scrolling layer, so the
 * footer can never be painted a frame ahead of the content (which is what
 * caused it to flash into view mid-scroll with `position: fixed`).
 *
 * No JS measurement is needed: the footer stays in normal flow, so it
 * reserves exactly its own height of scroll room.
 */
export default function FooterReveal({ children, footer }) {
    return (
        <div className="footer-reveal-container">
            <main className="main-content-wrapper shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
                {children}
            </main>
            <div className="sticky-footer-wrapper">
                {footer}
            </div>
        </div>
    );
}
