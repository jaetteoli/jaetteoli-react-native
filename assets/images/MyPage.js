import React from "react";
import { SvgXml } from "react-native-svg";

const MyPage = (props) => {
  return (
    <SvgXml xml={`
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5 21C17.4706 21 21.5 16.9706 21.5 12C21.5 7.02944 17.4706 3 12.5 3C7.52944 3 3.5 7.02944 3.5 12C3.5 16.9706 7.52944 21 12.5 21ZM12.5 21C14.2608 21.0019 15.983 20.4843 17.451 19.512C17.335 18.5451 16.8691 17.6541 16.1412 17.0071C15.4133 16.3601 14.4739 16.0019 13.5 16H11.5C10.5261 16.0019 9.58665 16.3601 8.85879 17.0071C8.13092 17.6541 7.66502 18.5451 7.549 19.512C9.01698 20.4843 10.7392 21.0019 12.5 21ZM15.5 10C15.5 11.6569 14.1569 13 12.5 13C10.8431 13 9.5 11.6569 9.5 10C9.5 8.34315 10.8431 7 12.5 7C14.1569 7 15.5 8.34315 15.5 10Z" stroke="${props.stroke}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `} />
  )
};

export default MyPage;