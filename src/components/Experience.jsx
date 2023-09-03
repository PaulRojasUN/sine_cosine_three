import {Line} from "@react-three/drei";
import Curve from "./Curve";

import "../styles.css"


const Experience = () => {
    return <>
        <ambientLight intensity={0.5} />

        <Curve init_x={-8} f={Math.sin} f_name_raw={"Sine"}/>
        <Curve init_x={7} f={Math.cos} f_name_raw={"Cosine"}/>

        <Line
            points={[[-13, 0, 0], [-3, 0, 0]]}
            color="blue"
            lineWidth={5}                 
        />

<Line
            points={[[2, 0, 0], [12, 0, 0]]}
            color="red"
            lineWidth={5}                 
        />

        






    </>
}

export default Experience;