"use client";

import React from "react";
import "./PageNavigation.scss";

interface PageDetails {
  selected: number;
  length: number;
  skip: number;
  total: number;
  limit: number;
  onPageClick(page: number): void;
}

export function PageNavigation({
  selected,
  length,
  skip,
  total,
  limit,
  onPageClick,
}: PageDetails) {
  const rows = [];
  rows.push(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill="none"
      onClick={() => onPageClick(selected - 1)}
      key={-1}
    >
      <path
        d="M20.512 26.676L10.048 17.236C9.60003 16.852 9.60003 16.148 10.048 15.764L20.512 6.32403C21.184 5.71603 22.272 6.16403 22.272 7.06003L22.272 25.94C22.272 26.836 21.184 27.284 20.512 26.676Z"
        fill="#A098AE"
      />
    </svg>
  );
  const limitItems = 3;
  const pos =
    selected + Math.ceil(limitItems / 2) > length
      ? Math.max(length - limitItems, 0)
      : Math.max(selected - Math.floor(limitItems / 2), 0);
  for (let i = pos; i < pos + 3; i++) {
    if (i >= length) break;
    if (i === selected) {
      rows.push(
        <div
          className="page-navigate-item"
          key={i + 1}
          style={{ background: "#4D44B5", borderColor: "#4D44B5" }}
        >
          <div className="page-navigate-number" style={{ color: "#fff" }}>
            {i + 1}
          </div>
        </div>
      );
    } else {
      rows.push(
        <button
          className="page-navigate-item"
          key={i + 1}
          onClick={() => onPageClick(i)}
        >
          <div className="page-navigate-number">{i + 1}</div>
        </button>
      );
    }
  }

  if (selected !== length - 1)
    rows.push(
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="33"
        viewBox="0 0 32 33"
        fill="none"
        onClick={() => onPageClick(selected + 1)}
        key={-2}
      >
        <path
          d="M11.488 6.32397L21.952 15.764C22.4 16.148 22.4 16.852 21.952 17.236L11.488 26.676C10.816 27.284 9.72803 26.836 9.72803 25.94L9.72803 7.05997C9.72803 6.16397 10.816 5.71597 11.488 6.32397Z"
          fill="#A098AE"
        />
      </svg>
    );

  return (
    <>
      <div id="page-navigation-footer">
        <div className="display-total-students">
          Showing{" "}
          <span className="number">
            {skip + 1}-{skip + limit}
          </span>{" "}
          from <span className="number">{total}</span> data
        </div>
        <div className="page-navigation">{rows}</div>
      </div>
    </>
  );
}
