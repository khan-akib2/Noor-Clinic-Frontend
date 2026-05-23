"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";

const variants = {
  primary:
    "bg-gradient-to-r from-secondary to-secondary-dark text-white shadow-lg shadow-secondary/25 hover:shadow-xl hover:shadow-secondary/30 hover:scale-105 active:scale-95",
  secondary:
    "bg-gradient-to-r from-primary to-primary-light text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 active:scale-95",
  outline:
    "bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary active:scale-95",
  "outline-dark":
    "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white active:scale-95",
  ghost:
    "bg-transparent text-text-dark hover:bg-surface active:scale-95",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const Button = forwardRef(function Button(
  {
    children,
    variant = "primary",
    size = "md",
    href,
    loading = false,
    disabled = false,
    icon: Icon,
    className = "",
    ...props
  },
  ref
) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none focus-visible:outline-2 focus-visible:outline-secondary";

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : Icon ? (
        <Icon className="w-4 h-4" />
      ) : null}
      {children}
    </>
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={classes} ref={ref} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      ref={ref}
      {...props}
    >
      {content}
    </button>
  );
});

export default Button;
