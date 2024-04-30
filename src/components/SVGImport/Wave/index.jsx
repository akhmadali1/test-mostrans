import React from "react";

export default function Wave({
  className = "",
  style = {},
}) {
  return (
    <div className={className} style={style}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#5AAD80"
          fillOpacity="1"
          d="M0,64L0,256L68.6,256L68.6,96L137.1,96L137.1,32L205.7,32L205.7,224L274.3,224L274.3,64L342.9,64L342.9,256L411.4,256L411.4,224L480,224L480,32L548.6,32L548.6,224L617.1,224L617.1,192L685.7,192L685.7,96L754.3,96L754.3,224L822.9,224L822.9,160L891.4,160L891.4,256L960,256L960,96L1028.6,96L1028.6,192L1097.1,192L1097.1,96L1165.7,96L1165.7,128L1234.3,128L1234.3,128L1302.9,128L1302.9,0L1371.4,0L1371.4,224L1440,224L1440,320L1371.4,320L1371.4,320L1302.9,320L1302.9,320L1234.3,320L1234.3,320L1165.7,320L1165.7,320L1097.1,320L1097.1,320L1028.6,320L1028.6,320L960,320L960,320L891.4,320L891.4,320L822.9,320L822.9,320L754.3,320L754.3,320L685.7,320L685.7,320L617.1,320L617.1,320L548.6,320L548.6,320L480,320L480,320L411.4,320L411.4,320L342.9,320L342.9,320L274.3,320L274.3,320L205.7,320L205.7,320L137.1,320L137.1,320L68.6,320L68.6,320L0,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
