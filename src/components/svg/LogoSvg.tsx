import type { ComponentPropsWithoutRef } from "react";

export type LogoSvgProps = ComponentPropsWithoutRef<"svg"> & { size?: number };

export const LogoSvg = ({ size = 32, ...props }: LogoSvgProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 327 267"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="163.53"
        y="266.061"
        width="230"
        height="145"
        rx="72.5"
        transform="rotate(-135 163.53 266.061)"
        fill="#EBFF00"
      />
      <rect
        x="163.53"
        y="266.061"
        width="145"
        height="230"
        rx="72.5"
        transform="rotate(-135 163.53 266.061)"
        fill="#EBFF00"
      />
    </svg>
  );
};
