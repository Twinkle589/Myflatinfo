import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const Createvisitors = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={41}
    height={41}
    fill="none"
    {...props}
  >
    <Circle cx={20.5} cy={20.5} r={20.417} fill="#283E71" />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M12.333 20.5h16.334M20.5 12.334v16.333"
    />
  </Svg>
)
export default Createvisitors
