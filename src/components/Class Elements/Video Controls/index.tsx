import {cva, VariantProps} from "class-variance-authority";
import React, {ButtonHTMLAttributes, ReactNode} from "react";
import Button from "../../Button/Text Button";

export interface ControllerProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children?: ReactNode;
    selected?: 'notes'|'attachments'|'summary';
}

const Controller = ({selected = 'notes', ...rest}:ControllerProps) => {
    return <div className="w-[339px] h-[30.29px] p-0.5 bg-pink-button rounded-[9px] shadow justify-center items-center gap-0.5 inline-flex">
        {selected === 'notes' ?
            <Button variant={'video'} disabled>Notes</Button>
            :
            <Button variant={'video'}>Notes</Button>
        }
        <div className="w-px h-3 opacity-30 bg-neutral-400 rounded-[0.50px]"></div>
        {selected === 'attachments' ?
            <Button variant={'video'} disabled>Attachments</Button>
            :
            <Button variant={'video'} >Attachments</Button>
        }
        <div className="w-px h-3 opacity-30 bg-neutral-400 rounded-[0.50px]"></div>
        {selected === 'summary' ?
            <Button variant={'video'} disabled>Summary</Button>
            :
            <Button variant={'video'} >Summary</Button>
        }
    </div>
}
export default Controller