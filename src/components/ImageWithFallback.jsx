import React, { useState } from 'react';
import { Layers } from 'lucide-react';

/**
 * ImageWithFallback
 * Displays an image with a reliable fallback placeholder if the image fails to load.
 */
export default function ImageWithFallback({
  src,
  alt = "",
  className = "",
  fallbackText = "Solomon Building Materials",
  aspectRatio,
  loading = "lazy",
  style = {},
  ...props
}) {
  const [prevSrc, setPrevSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  // Reset error state when src changes
  if (prevSrc !== src) {
    setPrevSrc(src);
    setHasError(false);
  }

  if (!src || hasError) {
    return (
      <div 
        className={`image-fallback ${className}`}
        style={{
          ...(aspectRatio ? { aspectRatio } : {}),
          ...style
        }}
        role="img"
        aria-label={alt || fallbackText}
      >
        <Layers className="image-fallback-icon" />
        <span className="image-fallback-text">{fallbackText}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
      onError={() => setHasError(true)}
      style={{
        ...(aspectRatio ? { aspectRatio } : {}),
        ...style
      }}
      {...props}
    />
  );
}
