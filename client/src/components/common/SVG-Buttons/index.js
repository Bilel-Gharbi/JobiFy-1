import React from "react";

export const DeleteButton = ({ onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      className="kt-svg-icon"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <rect x={0} y={0} width={24} height={24} />
        <circle fill="#000000" opacity="0.3" cx={12} cy={12} r={10} />
        <rect fill="#000000" x={6} y={11} width={12} height={2} rx={1} />
      </g>
    </svg>
  );
};

export const AddButton = ({ onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      className="kt-svg-icon"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <rect x={0} y={0} width={24} height={24} />
        <circle fill="#000000" opacity="0.3" cx={12} cy={12} r={10} />
        <path
          d="M11,11 L11,7 C11,6.44771525 11.4477153,6 12,6 C12.5522847,6 13,6.44771525 13,7 L13,11 L17,11 C17.5522847,11 18,11.4477153 18,12 C18,12.5522847 17.5522847,13 17,13 L13,13 L13,17 C13,17.5522847 12.5522847,18 12,18 C11.4477153,18 11,17.5522847 11,17 L11,13 L7,13 C6.44771525,13 6,12.5522847 6,12 C6,11.4477153 6.44771525,11 7,11 L11,11 Z"
          fill="#000000"
        />
      </g>
    </svg>
  );
};

export const UpdateButton = ({ onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      className="kt-svg-icon"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <rect x={0} y={0} width={24} height={24} />
        <path
          d="M8.43296491,7.17429118 L9.40782327,7.85689436 C9.49616631,7.91875282 9.56214077,8.00751728 9.5959027,8.10994332 C9.68235021,8.37220548 9.53982427,8.65489052 9.27756211,8.74133803 L5.89079566,9.85769242 C5.84469033,9.87288977 5.79661753,9.8812917 5.74809064,9.88263369 C5.4720538,9.8902674 5.24209339,9.67268366 5.23445968,9.39664682 L5.13610134,5.83998177 C5.13313425,5.73269078 5.16477113,5.62729274 5.22633424,5.53937151 C5.384723,5.31316892 5.69649589,5.25819495 5.92269848,5.4165837 L6.72910242,5.98123382 C8.16546398,4.72182424 10.0239806,4 12,4 C16.418278,4 20,7.581722 20,12 C20,16.418278 16.418278,20 12,20 C7.581722,20 4,16.418278 4,12 L6,12 C6,15.3137085 8.6862915,18 12,18 C15.3137085,18 18,15.3137085 18,12 C18,8.6862915 15.3137085,6 12,6 C10.6885336,6 9.44767246,6.42282109 8.43296491,7.17429118 Z"
          fill="#000000"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};

export const CheckButton = ({ onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      className="kt-svg-icon"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <polygon points="0 0 24 0 24 24 0 24" />
        <path
          d="M6.26193932,17.6476484 C5.90425297,18.0684559 5.27315905,18.1196257 4.85235158,17.7619393 C4.43154411,17.404253 4.38037434,16.773159 4.73806068,16.3523516 L13.2380607,6.35235158 C13.6013618,5.92493855 14.2451015,5.87991302 14.6643638,6.25259068 L19.1643638,10.2525907 C19.5771466,10.6195087 19.6143273,11.2515811 19.2474093,11.6643638 C18.8804913,12.0771466 18.2484189,12.1143273 17.8356362,11.7474093 L14.0997854,8.42665306 L6.26193932,17.6476484 Z"
          fill="#000000"
          fillRule="nonzero"
          transform="translate(11.999995, 12.000002) rotate(-180.000000) translate(-11.999995, -12.000002) "
        />
      </g>
    </svg>
  );
};

export const XButton = ({ onClick, disabled }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      className="kt-svg-icon"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <g
          transform="translate(12.000000, 12.000000) rotate(-45.000000) translate(-12.000000, -12.000000) translate(4.000000, 4.000000)"
          fill="#000000"
        >
          <rect x={0} y={7} width={16} height={2} rx={1} />
          <rect
            opacity="0.3"
            transform="translate(8.000000, 8.000000) rotate(-270.000000) translate(-8.000000, -8.000000) "
            x={0}
            y={7}
            width={16}
            height={2}
            rx={1}
          />
        </g>
      </g>
    </svg>
  );
};

export const DoneButton = ({ onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      className="kt-svg-icon"
      style={{ width: "100%", height: "100px" }}
      onClick={onClick}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <rect x={0} y={0} width={24} height={24} />
        <circle fill="#000000" opacity="0.3" cx={12} cy={12} r={10} />
        <path
          d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z"
          fill="#000000"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};
export const WarningButton = ({ onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      className="kt-svg-icon"
      style={{ width: "100%", height: "100px" }}
      onClick={onClick}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <rect x={0} y={0} width={24} height={24} />
        <circle fill="#000000" opacity="0.3" cx={12} cy={12} r={10} />
        <rect fill="#000000" x={11} y={7} width={2} height={8} rx={1} />
        <rect fill="#000000" x={11} y={16} width={2} height={2} rx={1} />
      </g>
    </svg>
  );
};
export const DetailsButton = ({ onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      className="kt-svg-icon"
      style={{ cursor: "pointer" }}
      onClick={onClick}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <polygon points="0 0 24 0 24 24 0 24" />
        <path
          d="M5.85714286,2 L13.7364114,2 C14.0910962,2 14.4343066,2.12568431 14.7051108,2.35473959 L19.4686994,6.3839416 C19.8056532,6.66894833 20,7.08787823 20,7.52920201 L20,20.0833333 C20,21.8738751 19.9795521,22 18.1428571,22 L5.85714286,22 C4.02044787,22 4,21.8738751 4,20.0833333 L4,3.91666667 C4,2.12612489 4.02044787,2 5.85714286,2 Z"
          fill="#000000"
          fillRule="nonzero"
          opacity="0.3"
        />
        <rect fill="#000000" x={6} y={11} width={9} height={2} rx={1} />
        <rect fill="#000000" x={6} y={15} width={5} height={2} rx={1} />
      </g>
    </svg>
  );
};
