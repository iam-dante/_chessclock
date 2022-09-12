import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export function SettingsIcon(props) {
  return (
    <Svg
      {...props}
      width={33}
      height={33}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M13.639 3.375c.727-3 4.995-3 5.723 0a2.945 2.945 0 0 0 4.395 1.821c2.636-1.606 5.655 1.411 4.049 4.049a2.944 2.944 0 0 0 1.82 4.394c2.999.727 2.999 4.995 0 5.723a2.945 2.945 0 0 0-1.822 4.395c1.606 2.636-1.411 5.655-4.049 4.049a2.944 2.944 0 0 0-4.393 1.82c-.728 2.999-4.996 2.999-5.723 0a2.945 2.945 0 0 0-4.396-1.822c-2.636 1.606-5.655-1.411-4.049-4.049a2.945 2.945 0 0 0-1.82-4.393c-2.999-.728-2.999-4.996 0-5.723a2.945 2.945 0 0 0 1.822-4.396C3.59 6.607 6.607 3.588 9.245 5.194c1.701 1.039 3.922.12 4.394-1.82Z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.625 16.5a5.125 5.125 0 1 1-10.25 0 5.125 5.125 0 0 1 10.25 0v0Z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function PlayIcon(props) {
  return (
    <Svg
      {...props}
      width={26}
      height={31}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M23.805 18.044c1.88-1.175 1.88-3.913 0-5.088L5.132 1.286C3.134.035.542 1.472.542 3.828v23.342c0 2.356 2.592 3.792 4.59 2.544l18.673-11.671Z"
        fill="#fff"
      />
    </Svg>
  );
}

export function ResetIcon(props) {
  return (
    <Svg
      {...props}
      width={29}
      height={33}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M3.75 6.457v1.224l.857-.874a13.854 13.854 0 0 1 22.954 5.077l.005.013a1.55 1.55 0 1 1-2.922 1.033l-.002-.007-.003-.007A10.754 10.754 0 0 0 5.898 10.05l-.6.8h7.152a1.55 1.55 0 1 1 0 3.1H2.2a1.55 1.55 0 0 1-1.096-.454l-.352.352.352-.352A1.55 1.55 0 0 1 .65 12.4V2.15a1.55 1.55 0 0 1 3.1 0v4.307Zm1.571 20.415a13.854 13.854 0 0 1-3.882-5.756 1.55 1.55 0 0 1 .946-1.978 1.55 1.55 0 0 1 1.667.426l.372-.334-.372.334c.136.151.241.328.309.52a10.754 10.754 0 0 0 18.741 2.866l.6-.8H16.55a1.55 1.55 0 1 1 0-3.1H26.8a1.55 1.55 0 0 1 1.55 1.55v10.25a1.55 1.55 0 1 1-3.1 0V25.319l-.857.874a13.855 13.855 0 0 1-19.072.679Z"
        fill="#fff"
        stroke="#000"
      />
    </Svg>
  );
}

export function BackIcon(props) {
  return (
    <Svg
      {...props}
      width={11}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M9.75 18.75 1 10l8.75-8.75"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export const ColorWatch = props => (
  <Svg
    {...props}
    width={26}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M6.75 19.25h.013m-.013 5a5 5 0 0 1-5-5v-15a2.5 2.5 0 0 1 2.5-2.5h5a2.5 2.5 0 0 1 2.5 2.5v15a5 5 0 0 1-5 5v0Zm0 0h15a2.5 2.5 0 0 0 2.5-2.5v-5a2.5 2.5 0 0 0-2.5-2.5h-2.929l-12.071 10Zm5-17.071 2.071-2.072a2.5 2.5 0 0 1 3.535 0l3.536 3.537a2.5 2.5 0 0 1 0 3.535L10.285 22.785 11.75 7.179Z"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const ClockIcon = props => (
  <Svg
    {...props}
    width={24}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M10 6v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const AddIcon = props => (
  <Svg
    {...props}
    width={56}
    height={56}
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M28 19.25V28v-8.75ZM28 28v8.75V28Zm0 0h8.75H28Zm0 0h-8.75H28Zm26.25 0a26.25 26.25 0 1 1-52.5 0 26.25 26.25 0 0 1 52.5 0Z"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export function CancelIcon(props: any) {
  return (
    <Svg
      width={30}
      height={30}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="m7.5 7.5 15 15m-15 0 15-15-15 15Z"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function QueeenIcon(props: any) {
  return (
    <Svg
      width={18}
      height={30}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M15.37 25.207h-.368c-3.07-5.075-3.125-5.43-2.452-11.336a1.363 1.363 0 0 0 1.06-1.327v-1.42c0-.75-.611-1.36-1.361-1.36h-.428l.859-2.148a.592.592 0 0 0-.55-.811h-1.775V5.473h1.183a.592.592 0 0 0 .592-.591V2.515a.592.592 0 0 0-.592-.592h-1.183V.592A.592.592 0 0 0 9.763 0H7.396a.592.592 0 0 0-.591.592v1.331H5.62a.592.592 0 0 0-.592.592v2.367c0 .326.265.591.592.591h1.184v1.332H5.029a.592.592 0 0 0-.549.811l.859 2.147h-.428c-.75 0-1.36.61-1.36 1.361v1.42c0 .647.453 1.19 1.06 1.327.672 5.905.616 6.26-2.453 11.336H1.79c-.987 0-1.79.803-1.79 1.79v.858c0 .987.803 1.79 1.79 1.79h13.58c.987 0 1.79-.803 1.79-1.79v-.858c0-.987-.803-1.79-1.79-1.79ZM6.213 4.29V3.107h1.183a.592.592 0 0 0 .592-.592V1.183h1.184v1.332c0 .327.265.592.591.592h1.184V4.29H9.763a.592.592 0 0 0-.591.592v1.923H7.988V4.882a.592.592 0 0 0-.592-.592H6.213Zm5.043 3.698-.71 1.775H6.614l-.71-1.775h5.352Zm-6.345 4.734a.178.178 0 0 1-.177-.178v-1.42c0-.098.08-.177.177-.177h7.338c.097 0 .177.08.177.177v1.42c0 .098-.08.178-.178.178H4.912Zm1.18 4.053h2.223a.592.592 0 1 0 0-1.183H5.988a127.76 127.76 0 0 0-.183-1.687h5.55c-.476 4.19-.583 5.729.559 8.196H8.55a.592.592 0 1 0 0 1.183h3.964c.31.571.677 1.202 1.108 1.923H3.538c2.308-3.862 2.786-5.155 2.553-8.432Zm9.885 11.08a.607.607 0 0 1-.606.607H1.79a.607.607 0 0 1-.607-.607v-.858c0-.334.273-.607.607-.607h13.58c.334 0 .606.273.606.607v.858Z"
        fill="#fff"
      />
    </Svg>
  );
}
