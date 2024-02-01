import * as React from "react";
const NotSolvedIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#EB5B5C"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-user-x"
        {...props}
    >
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx={8.5} cy={7} r={4} />
        <line x1={18} y1={8} x2={23} y2={13} />
        <line x1={23} y1={8} x2={18} y2={13} />
    </svg>
);
export default NotSolvedIcon;
