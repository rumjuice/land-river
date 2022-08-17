import { ReactElement, SVGProps } from "react";

const LoadingIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
): ReactElement => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 330 330"
    enableBackground="new 0 0 330 330"
    xmlSpace="preserve"
    {...props}
  >
    <path d="M165 232.5c-8.284 0-15 6.716-15 15v60c0 8.284 6.716 15 15 15s15-6.716 15-15v-60c0-8.284-6.716-15-15-15zM165 7.5c-8.284 0-15 6.716-15 15v30c0 8.284 6.716 15 15 15s15-6.716 15-15v-30c0-8.284-6.716-15-15-15zM90 157.5c0-8.284-6.716-15-15-15H15c-8.284 0-15 6.716-15 15s6.716 15 15 15h60c8.284 0 15-6.716 15-15zM315 142.5h-60c-8.284 0-15 6.716-15 15s6.716 15 15 15h60c8.284 0 15-6.716 15-15s-6.716-15-15-15zM90.752 210.533 48.327 252.96c-5.857 5.858-5.857 15.355 0 21.213 2.929 2.929 6.768 4.393 10.607 4.393s7.678-1.464 10.607-4.393l42.426-42.427c5.857-5.858 5.857-15.355-.001-21.213-5.858-5.858-15.355-5.858-21.214 0zM228.639 108.86c3.839 0 7.678-1.464 10.606-4.394l42.426-42.427c5.858-5.858 5.858-15.355 0-21.213-5.857-5.857-15.355-5.858-21.213 0l-42.426 42.427c-5.858 5.858-5.858 15.355 0 21.213a14.95 14.95 0 0 0 10.607 4.394zM239.245 210.533c-5.856-5.857-15.355-5.858-21.213-.001-5.858 5.858-5.858 15.355 0 21.213l42.426 42.427a14.953 14.953 0 0 0 10.607 4.393c3.838 0 7.678-1.465 10.606-4.393 5.858-5.858 5.858-15.355 0-21.213l-42.426-42.426z" />
  </svg>
);

export default LoadingIcon;
