import {Text} from "@react-three/drei";
import { useRef} from 'react';
import { useFrame } from "@react-three/fiber"
//import CoorNums from "./CoorNums";

const curve_f = (f, ref, min_x, max_x, delta) => {
    if (ref.current.position.x >= max_x) {
        ref.current.position.x = min_x - 5;
        ref.current.position.y = 0;
    } else {
        ref.current.position.x += delta;
        ref.current.position.y = f(ref.current.position.x );
    }
}

const Curve = ({init_x, f, f_name_raw}) => {

    const curve = useRef();

    useFrame((state, delta) => {
        curve_f(f, curve  , init_x, init_x + 5, delta);
    });



    return  <>
            <gridHelper
                args={[10]}
                rotation={[Math.PI*0.5, 0, 0]}
                position={[init_x, 0, 0]}
            />

            <mesh ref={curve} position={[init_x - 5, 0, 0]}>
                <boxGeometry args={[0.5, 0.5, 0.5]} />
                <meshNormalMaterial color={'blue '} />
            </mesh>

            <Text position={[init_x, 6, 0]}>{f_name_raw}</Text>
            {/*<CoorNums init_x={init_x - 5}/>*/}
        </>

};

export default Curve;