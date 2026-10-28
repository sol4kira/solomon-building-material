import React from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
  className = ""
}) {
  return (
    <div className={`section-header ${center ? "center" : ""} ${className}`}>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
