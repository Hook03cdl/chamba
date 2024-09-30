import React, { ForwardedRef } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";
import { Divider } from "@tremor/react";

export function cx(...args: (string | undefined | null | boolean)[]): string {
  return twMerge(clsx(...args));
}

export const focusInput: string[] = [
  // base
  "focus:ring-2",
  // ring color
  "focus:ring-blue-200 focus:dark:ring-blue-700/30",
  // border color
  "focus:border-blue-400 focus:dark:border-blue-700",
];

export const hasErrorInput: string[] = [
  // base
  "ring-2",
  // border color
  "border-red-500 dark:border-red-700",
  // ring color
  "ring-red-200 dark:ring-red-700/30",
];

const inputStyles = ({ hasError }: { hasError?: boolean }) => {
  return cx(
    "relative block w-full cursor-pointer appearance-none rounded-tremor-default border px-2.5 py-1.5 !text-tremor-default shadow-tremor-input outline-none dark:shadow-dark-tremor-input",
    "border-tremor-border dark:border-dark-tremor-border",
    "text-tremor-content-strong dark:text-dark-tremor-content-strong",
    "placeholder-tremor-content-subtle dark:placeholder-dark-tremor-content-subtle",
    "bg-tremor-background dark:bg-dark-tremor-background",
    "disabled:bg-tremor-background-subtle disabled:text-tremor-content-subtle",
    "disabled:dark:bg-dark-tremor-background-subtle disabled:dark:text-dark-tremor-content-subtle",
    // file input styles
    "file:-my-1.5 file:-ml-2.5 file:h-[36px] file:cursor-pointer file:rounded-l-tremor-small file:rounded-r-none file:border-0 file:px-3 file:py-1.5 file:text-tremor-default file:outline-none",
    "file:border-solid file:border-tremor-border file:bg-tremor-background-muted file:text-tremor-content hover:file:bg-tremor-background-subtle/80 file:dark:border-dark-tremor-border file:dark:bg-dark-tremor-background-muted hover:file:dark:bg-dark-tremor-background-subtle/30",
    "file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem]",
    "focus:outline-none disabled:pointer-events-none file:disabled:pointer-events-none file:disabled:bg-tremor-background-subtle file:disabled:text-tremor-content file:disabled:dark:border-gray-700 file:disabled:dark:bg-dark-tremor-background-subtle",
    ...focusInput,
    hasError ? hasErrorInput.join(" ") : ""
  );
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  hasError?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, hasError, type, ...props },
    forwardedRef: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className="relative">
        <input
          ref={forwardedRef}
          type={type}
          className={cx(inputStyles({ hasError }), className)}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export default function FileInput() {
  return (
    <div>
      <label
        htmlFor="file-1"
        className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
      >
        Sube tu imagen
        <span className="text-red-500">*</span>
      </label>
      <Input
        id="file-1"
        name="file-1"
        type="file"
        className="mt-2"
        accept=".jpeg, .jpg"
      />
      <p className="mt-2 text-tremor-label text-tremor-content dark:text-dark-tremor-content">
        Solo puedes subir archivos JPEG, JPG.
      </p>
    </div>
  );
}
