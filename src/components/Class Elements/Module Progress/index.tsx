import React, {ReactNode} from "react";
import Class from "../../Module/Class";
import Progress from "../../Progress Bar/Progress Bar";
import Module from "../../Module/Module";
import Button from "../../Button/Icon Button";

export interface ProgressProps{
    children?: ReactNode;
    moduleList?: React.ReactNode[];
}

const Menu = ({moduleList=[<Module></Module>,<Module></Module>,<Module></Module>],...rest}:ProgressProps) => {
    const [position, setPosition] = React.useState(0);
    const forward = () => {
        if (position !== (moduleList?.length-1)){
            setPosition(position + 1);
        }
    }
    const backward = () => {
        if (position !== 0){
            setPosition(position - 1);
        }
    }

    return <div className="justify-center items-start inline-flex">
        <div className="justify-center items-center flex">
            <Button onClick={backward}></Button>
        </div>
        <div className="w-[408px] h-[340px] relative">
            <div className={"absolute left-[69.15px] top-[20px] absolute rotate-[8deg] disabled"}>
                {moduleList[position+2]}
            </div>
            <div className={"absolute left-[36.49px] top-[15px] rotate-[4deg] disabled"}>
                {moduleList[position+1]}
            </div>
            <div className={"absolute"}>
                {moduleList[position]}
            </div>
        </div>
        <div className="-rotate-180 -ml-16 items-center flex">
            <Button onClick={forward}></Button>
        </div>
    </div>
}
export default Menu