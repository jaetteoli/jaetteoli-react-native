import { SvgXml } from "react-native-svg";

const Close = () => {
  return (
    <SvgXml
      xml={`
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M4.5 4.5L9 9M9 9L13.5 13.5M9 9L13.5 4.5M9 9L4.5 13.5" stroke="#555555" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        `}
    />
  );
};

export default Close;
