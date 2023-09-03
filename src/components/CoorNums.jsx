import {Text} from "@react-three/drei";

const CoorNums = ({init_x}) => {
    const arr10 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    return arr10.map((e)=> 
        <Text position={[init_x + e + .8, -0.5 , 0]} scale={0.5}>{e}</Text>
    );
}

export default CoorNums;