"use client";

import {
  ComponentPropsWithRef,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import clsx from "clsx";
import { type ThemeColor } from "pentatrion-design";
import { useRipple } from "pentatrion-design/hooks";
import { buttonVariants } from "pentatrion-design/components/button";

export interface LinkButtonProps extends ComponentPropsWithRef<"a"> {
  href: string;

  withRipple?: boolean;

  variant?: "contained" | "light" | "outlined" | "text" | "ghost";

  size?: "small" | "medium" | "large" | "custom";

  color?: ThemeColor;

  children?: React.ReactNode;

  fullWidth?: boolean;

  focusable?: boolean;

  /**
   * For a selected item inside a group.
   */
  selected?: boolean;

  icon?: boolean;
}

export default forwardRef<HTMLAnchorElement, LinkButtonProps>(function Button(
  {
    withRipple = true,
    variant = "contained",
    color = "yellow",
    size = "medium",
    focusable = true,
    fullWidth,
    className,
    children,
    selected = false,
    icon = false,
    href,
    ...props
  },
  ref
) {
  const anchorRef = useRef<HTMLAnchorElement>(null);

  useImperativeHandle<HTMLAnchorElement | null, HTMLAnchorElement | null>(
    ref,
    () => anchorRef.current
  );

  const ripples = useRipple(anchorRef);

  // check if overflow-clip-margin: 1px; is needed ?
  return (
    <a
      tabIndex={focusable ? 0 : -1}
      role="button"
      href={href}
      ref={anchorRef}
      className={clsx(
        "relative inline-flex cursor-pointer items-center overflow-clip border-0 text-center leading-5 no-underline duration-300 focus-visible:outline focus-visible:outline-2 motion-safe:transition-color-shadow",
        icon ? "rounded-full" : "rounded-2xl",
        className,
        buttonVariants.size(icon, size),
        buttonVariants.variant[variant](color),
        icon && "justify-center [&_:last-child:not(i,img)]:pr-4",
        fullWidth && "w-full",
        selected && "active"
      )}
      data-variant={variant}
      {...props}
    >
      {withRipple && ripples}
      {children}
    </a>
  );
});
