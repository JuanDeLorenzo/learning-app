import {cva, VariantProps} from "class-variance-authority";
import React, {ButtonHTMLAttributes, ReactNode} from "react";
import {number} from "prop-types";

export interface QuestionProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children?: ReactNode;
    number?: number;
    total?: number;
    right?: number;
    wrong?: number;
    question?: string;
}

const Question = ({number=0,total=0,right=0,wrong=0,question="Question?",...rest}:QuestionProps) => {
    return <div className="w-[380px] h-[190px] px-4 py-[11px] bg-zinc-300 rounded-2xl flex-col justify-center items-center gap-3.5 inline-flex font-['Kumbh Sans']">
        <div className="w-full flex justify-between text-base ml-auto">
            <div className="flex items-center gap-2 align-left">
                <div className="text-green-400">{right}</div>
                <div className="h-2.5 bg-green-400 rounded-[9px]" style={{ width: `${(24.5 * right)}px` }}></div>
            </div>
            <div className="flex items-center gap-2 align-right">
                <div className="h-2.5 bg-rose-400 rounded-[9px]" style={{ width: `${(24.5 * wrong)}px` }}></div>
                <div className="text-rose-400">{wrong}</div>
            </div>
        </div>
        <div className="h-[138px] flex-col justify-center items-center gap-[30px] flex text-center text-black ">
            <div className="text-3xl font-bold">Question {number}/{total}</div>
            <div className="w-[348px] h-[71px] text-xl font-normal ">
                {question}
            </div>
        </div>
    </div>
}
export default Question