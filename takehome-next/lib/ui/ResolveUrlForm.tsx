"use client";

import React from "react";
import styles from "./ResolveUrlForm.module.css";

type ResolveUrlForm = {};

// POST endpoint to shorten a URL
const apiPath = "/api/resolve";

/**
 * allows a user to submit a shortened URL to be resolved back to the original
 * URL that it was generated from.
 *
 * After retrieving the generate URL, the user should be redirected
 */
export const ResolveUrlForm: React.FC<ResolveUrlForm> = ({}) => {
  return <div className={styles.example}>TODO</div>;
};
