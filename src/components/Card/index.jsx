import { useRouter } from "next/router";
import React from "react";
import Skeleton from "react-loading-skeleton";

export default function Card({
  skeletonFlag = true,
  id = 0,
  image = null,
  name = "",
  status = "",
  type = "",
  locationName = "",
}) {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    if (router.pathname !== `/detailpage/${id}`) {
      router.push(`/detailpage/${id}`);
    }
  };

  return (
    <>
      {skeletonFlag ? (
        <div key={id} className="card" style={{ width: "18rem" }}>
          <Skeleton height={180} className="card-img-top" />
          <div className="card-body">
            <Skeleton width={100} height={20} />
            <Skeleton width={100} height={20} />
            <Skeleton width={100} height={20} />
            <Skeleton width={100} height={20} />
            <Skeleton width={100} height={20} />
          </div>
        </div>
      ) : (
        <div
          key={id}
          className="card"
          style={{ width: "18rem" }}
          onClick={handleClick}
        >
          <img
            src={image}
            width={180}
            height={180}
            className="card-img-top"
            alt={name}
          />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{name}</h5>
            <p className="card-text font-weight-bold">Status Type:</p>
            <p className="card-text">
              {status} {type ? ` - ${type}` : ""}
            </p>
            <p className="card-text font-weight-bold">Location:</p>
            <p className="card-text">{locationName}</p>
          </div>
        </div>
      )}
    </>
  );
}
