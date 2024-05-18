import React from "react";
import styles from "./SearchResult.module.css";
import { BusinessRating } from "../../../BusinessRating/BusinessRating";

export function SearchResult(props) {
  const b = props.business;
  console.log(b);
  if (!b) {
    return <div />;
  }

  const tags = b.categories.map((category) => (
    <span
      className={`tag ${styles["business-tag"]}`}
      key={b.id + category.title}
    >
      {category}
    </span>
  ));

  return (
    <div className={styles["search-result"]}>
      <img
        src={b.image_url}
        alt="business"
        className={styles["business-image"]}
      />
      <div className={styles["business-info"]}>
        <h1 className="subtitle">{b.name}</h1>
        <div className={styles["business-rating"]}>
          <BusinessRating
            reviewCount={b.review_count}
            rating={b.rating}
            className="rating-element"
          />
        </div>
        <p>
          {b.price} {tags}
        </p>
      </div>
      <div className={styles["contact-info"]}>
        <p>{b.phone}</p>
        {b.addressLine}
      </div>
    </div>
  );
}
