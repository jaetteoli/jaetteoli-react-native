import { SvgXml } from "react-native-svg"

const ArrowLineRight = (props) => {
    return(
        <SvgXml xml={`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
  <path d="M6 11.4998H18M18 11.4998L14 7.70898M18 11.4998L14 15.2907" stroke=${props.stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        `}/>
    )
}

export default ArrowLineRight