import React from "react";

const JobCartMatching = ({ rate }) => {
  return (
    <>
      <div className="kt-widget__progress" style={{ flex: "1" }}>
        <div
          style={{
            width: "100%",
            display: "grid",
            gridGap: "5px",
          }}
        >
          <span className="kt-widget__text">
            Matching rate: <b> {rate}%</b>
          </span>

          <span className="kt-widget12__progress" style={{ width: "95%" }}>
            <div className="progress progress-sm">
              <div
                className="progress-bar kt-bg-brand kt-bg-success"
                role="progressbar"
                style={{ width: `${rate}%` }}
                aria-valuenow={50}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </span>
        </div>
      </div>
    </>
  );
};

export default JobCartMatching;
