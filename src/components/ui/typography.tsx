import React, { PropsWithChildren } from "react";

const sizes = {
  xxs: "text-xs",
  xs: "text-sm",
  sm: "text-base",
  md: "text-lg",
  lg: "text-xl",
  "2xl": "text-2xl",
  "4xl": "text-[32px] leading-10",
};

const weights = {
  thin: "font-thin",
  normal: "font-normal",
  bold: "font-bold",
};

interface Props extends PropsWithChildren {
  className?: string;
  size?: keyof typeof sizes;
  weight?: keyof typeof weights;
}

const H1: React.FC<Props> = ({
  className,
  children,
  size = "sm",
  weight = "normal",
}) => {
  return (
    <h1
      className={`scroll-m-20 ${sizes[size]} ${weights[weight]} ${className}`}
    >
      {children}
    </h1>
  );
};

const H2: React.FC<Props> = ({
  className,
  children,
  size = "sm",
  weight = "normal",
}) => {
  return (
    <h2
      className={`scroll-m-20 border-b ${sizes[size]} ${weights[weight]} ${className}`}
    >
      {children}
    </h2>
  );
};

const H3: React.FC<Props> = ({
  className,
  children,
  size = "sm",
  weight = "normal",
}) => {
  return (
    <h3
      className={`scroll-m-20 ${sizes[size]} ${weights[weight]}  ${className}`}
    >
      {children}
    </h3>
  );
};

const H4: React.FC<Props> = ({
  className,
  children,
  size = "sm",
  weight = "normal",
}) => {
  return (
    <h4
      className={`scroll-m-20 ${sizes[size]} ${weights[weight]}  ${className}`}
    >
      {children}
    </h4>
  );
};

const P: React.FC<Props> = ({
  className,
  children,
  size = "sm",
  weight = "normal",
}) => {
  return (
    <p className={`leading-7 ${sizes[size]} ${weights[weight]} ${className}`}>
      {children}
    </p>
  );
};

const Span: React.FC<Props> = ({
  className,
  children,
  size = "sm",
  weight = "normal",
}) => {
  return (
    <span className={`${sizes[size]} ${weights[weight]} ${className}`}>
      {children}
    </span>
  );
};

const Blockquote: React.FC<Props> = ({
  className,
  children,
  size = "sm",
  weight = "normal",
}) => {
  return (
    <blockquote
      className={`mt-6 border-l-2 italic ${sizes[size]} ${weights[weight]} ${className}`}
    >
      {children}
    </blockquote>
  );
};

const InlineCode: React.FC<Props> = ({
  className,
  children,
  size = "sm",
  weight = "normal",
}) => {
  return (
    <code
      className={`relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono ${sizes[size]} ${weights[weight]} ${className}`}
    >
      {children}
    </code>
  );
};

const Lead: React.FC<Props> = ({
  className,
  children,
  size = "sm",
  weight = "normal",
}) => {
  return (
    <p
      className={`text-muted-foreground ${sizes[size]} ${weights[weight]} ${className}`}
    >
      {children}
    </p>
  );
};

const Muted: React.FC<Props> = ({
  className,
  children,
  size = "sm",
  weight = "normal",
}) => {
  return (
    <p
      className={`text-muted-foreground ${sizes[size]} ${weights[weight]} ${className}`}
    >
      {children}.
    </p>
  );
};

export { H1, H2, H3, H4, P, Span, Lead, Muted, Blockquote, InlineCode };
