import { ComponentProps, forwardRef, useImperativeHandle, useRef } from "react";
import type { ThemeColor } from "pentatrion-design/types";
import clsx from "clsx";
import { useRipple } from "pentatrion-design/hooks";

export interface ColorProps extends ComponentProps<"button"> {
  withRipple?: boolean;

  value?: string;
  color?: ThemeColor;
  label?: string;
  showValue?: boolean;
  className?: string;
}

export const Color = forwardRef<HTMLButtonElement, ColorProps>(
  (
    {
      value,
      withRipple = true,
      color = "yellow",
      label,
      showValue = false,
      className,
      ...rest
    },
    ref
  ) => {
    const valueToShow = label ?? (showValue ? value : null);

    const buttonRef = useRef<HTMLButtonElement>(null!);

    useImperativeHandle<HTMLButtonElement | null, HTMLButtonElement | null>(
      ref,
      () => buttonRef.current
    );

    const ripples = useRipple(buttonRef);

    return (
      <button
        ref={buttonRef}
        data-color={color}
        className="p8n-input-text relative flex h-8 overflow-clip rounded-2xl p-1 outline-offset-[-1px]"
        {...rest}
      >
        {withRipple && ripples}
        <span
          className={clsx(
            "flex items-center justify-center rounded-2xl px-2 h-full",
            valueToShow === null && "min-w-12",
            className
          )}
          style={{ backgroundColor: value }}
        >
          {valueToShow}
        </span>
      </button>
    );
  }
);
