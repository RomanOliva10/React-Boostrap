import React from "react";

export default function Footer({ p }) {
  return (
    <footer className="bg-light py-5">
      <div className="container px-4 px-lg-5">
        <div className="small text-center text-muted">{p}</div>
      </div>
    </footer>
  );
}
