export const FILES_BASE_URL = process.env.NEXT_PUBLIC_FILES_BASE_URL || 'https://files.rapidtechpro.com';

/**
 * Resolves an image path/URL to the full file hosting URL (https://files.rapidtechpro.com/uploads/...).
 * 
 * Handles:
 * - Empty / falsy paths -> returns fallback
 * - Legacy URLs (e.g. rapidtechpro.com/rapid_panel/uploads/...) -> converts to https://files.rapidtechpro.com/uploads/...
 * - Absolute URLs (https://files.rapidtechpro.com/..., https://...) -> preserved
 * - Relative paths starting with /uploads/ or uploads/ -> prefixed with https://files.rapidtechpro.com
 * - Local static paths starting with / (e.g. /images/..., /projects/...) -> preserved
 * - Raw filenames (e.g. 69aff332df4a4.png) -> converted to https://files.rapidtechpro.com/uploads/filename
 */
export function resolveImageUrl(path, fallback = null) {
    if (!path || typeof path !== 'string') return fallback;

    const trimmed = path.trim();
    if (!trimmed) return fallback;

    // Convert legacy rapid_panel paths
    if (trimmed.includes('rapidtechpro.com/rapid_panel/uploads/')) {
        return trimmed.replace(/https?:\/\/[^/]+\/rapid_panel\/uploads\//g, `${FILES_BASE_URL}/uploads/`);
    }

    // Full absolute URL
    if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
        return trimmed;
    }

    // Relative uploads path (/uploads/...)
    if (trimmed.startsWith('/uploads/')) {
        return `${FILES_BASE_URL}${trimmed}`;
    }

    // Relative uploads path without leading slash (uploads/...)
    if (trimmed.startsWith('uploads/')) {
        return `${FILES_BASE_URL}/${trimmed}`;
    }

    // Local static asset path (e.g. /images/hero.png, /projects/maker4u3.png)
    if (trimmed.startsWith('/')) {
        return trimmed;
    }

    // Plain image filename (e.g. 69a88dc6116bf.jpeg)
    return `${FILES_BASE_URL}/uploads/${trimmed}`;
}

export default resolveImageUrl;
