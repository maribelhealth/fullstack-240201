"use client";
import React, { PropsWithChildren, useState } from "react";
import styles from "./Button.module.css";
export type AsyncButtonProps = {
  onClick: () => Promise<any>;
  "data-testid"?: string;
} & PropsWithChildren;

export const AsyncButton: React.FC<AsyncButtonProps> = ({
  onClick,
  "data-testid": dataTestId,
  children,
}) => {
  const [status, setStatus] = useState<
    "ready" | "loading" | "error" | "complete"
  >("ready");
  const [errorMessage, setErrorMessage] = useState<string>();
  return (
    <div>
      <button
        data-testid={dataTestId}
        className={styles.cta}
        disabled={status === "loading"}
        onClick={async () => {
          try {
            setStatus("loading");
            setErrorMessage("");
            await onClick();
            setStatus("complete");
          } catch (e) {
            setStatus("error");
            setErrorMessage((e as Error).message ?? "an error occurred");
          }
        }}
      >
        {children}
      </button>
      {errorMessage ? (
        <span data-testid={`${dataTestId}-err`}>{errorMessage}</span>
      ) : null}
    </div>
  );
};
