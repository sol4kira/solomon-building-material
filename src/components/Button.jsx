import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable Button component
 * Can render as a router Link, standard anchor tag, or button element.
 */
export default function Button({
  children,
  to,
  href,
  onClick,
  variant = "primary", // primary, secondary, outline, whatsapp
  size = "md",         // sm, md, lg
  fullWidth = false,
  icon: Icon,
  iconPosition = "left",
  className = "",
  type = "button",
  target,
  rel,
  ...props
}) {
  const classes = [
    "btn",
    `btn-${variant}`,
    size !== "md" ? `btn-${size}` : "",
    fullWidth ? "btn-full" : "",
    className
  ].filter(Boolean).join(" ");

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon size={18} aria-hidden="true" />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon size={18} aria-hidden="true" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a 
        href={href} 
        className={classes} 
        target={target} 
        rel={target === "_blank" ? (rel || "noopener noreferrer") : rel} 
        onClick={onClick}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      {content}
    </button>
  );
}
