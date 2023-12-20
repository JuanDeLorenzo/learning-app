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
    return <div className="w-full h-[190px] px-4 py-[11px] bg-greyscale-400 rounded-2xl flex-col justify-center items-center gap-3.5 inline-flex">
        <div className="w-full flex justify-between text-label font-label ml-auto">
            <div className="flex items-center gap-2 align-left">
                <div className="text-answer-success">{right}</div>
                <div className="h-2.5 bg-answer-success rounded-[9px]" style={{ width: `${(24.5 * right)}px` }}></div>
            </div>
            <div className="flex items-center gap-2 align-right">
                <div className="h-2.5 bg-answer-error rounded-[9px]" style={{ width: `${(24.5 * wrong)}px` }}></div>
                <div className="text-answer-error">{wrong}</div>
            </div>
        </div>
        <div className="h-[138px] flex-col justify-center items-center gap-[30px] flex text-center text-typography-600">
            <div className="text-display font-display">Question {number}/{total}</div>
            <div className="w-full h-[71px] px-1/2 text-body font-body ">
                {question}
            </div>
        </div>
    </div>
}
export default Question