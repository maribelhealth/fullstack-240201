"use client";

import React from "react";
import styles from "./ShortenUrlForm.module.css";

type ShortenUrlFormProps = {};

// POST endpoint to shorten a URL
const apiPath = "/api/shorten";

/**
 * A component that allows a user to submit a URL to be shortened. It should
 * show the resulting shortened URL after the API call has succeeded
 */
export const ShortenUrlForm: React.FC<ShortenUrlFormProps> = ({}) => {
  return <div className={styles.example}>TODO</div>;
};
