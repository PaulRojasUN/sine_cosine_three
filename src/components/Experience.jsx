import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber"
import { useState } from 'react';
import Curve from "./Curve";

import "../styles.css"

const Experience = () => {
    // const sineRef = useRef();

    // useFrame(() => {
    //     if (sineRef.current.position.x >= 4*Math.PI) {
    //         sineRef.current.position.x = 0;
    //     } else {
    //         sineRef.current.position.y += Math.sin(sineRef.current.position.x);
    //         sineRef.current.position.x += Math.PI/30;
    //     }
    // });

    const [x, setX] = useState(0);

  useFrame(() => {
    setX(x + 0.01);
  });

    return <>
        <OrbitControls makeDefault/>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        
        {/* <gridHelper 
            args={[6*Math.PI, 6*Math.PI, 0xff0000, 'teal']} 
            rotation={[Math.PI*0.5, 0, 0]}
            position={[-30 + Math.PI*3, 0, 0]}
        /> */}
        <axesHelper args={[5]} />   

        {/** Sine and Cosine 
            rotation-x={Math.PI*0.25} rotation-y={Math.PI * 0.5} position={[0, 0, -20]}
             <mesh >
            <planeGeometry args={[30, 30]} />
            <meshStandardMaterial color={"gray"} />
        </mesh>

        <gridHelper args={[30, 30, 0xff0000, 'teal']} />
            */


        }

        <mesh>
            <vector3 args={[ 1, 2, 0]}  />
            <meshStandardMaterial color={"gray"} />
        </mesh>       

        <Curve f={Math.sin} min_x={-30 } max_x={-30 + 6*Math.PI} stride={Math.PI/30}/>
        <Curve f={Math.cos} min_x={10 } max_x={10 + 6*Math.PI} stride={Math.PI/30}/>
        {/* <mesh ref={sineRef} position={[-30, 0, 0]}>
            <boxGeometry args={[1, 1, 1]}/>
            <meshStandardMaterial color="yellow" />
        </mesh>    */}


    </>
}

export default Experience;