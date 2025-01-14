import { useMemo, useState } from "react";

export const useCalc = () => {
    const buttons = useMemo(() => {
        return ["AC", "DEL", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "3", "2", "1", "+", "0", ".", "√", "="];
    }, []);

    const [operation, setOperation] = useState("2 + 2 =");
    const [result, setResult] = useState("4");

    const handleButton = (btn: string) => {
        setResult("");

        if (btn === "AC") {
            setOperation("");
        }
        if (btn === "DEL") {
            setOperation(operation.substring(0, operation.length - 1));
        }
        if (btn === ".") {
            let newOp = operation.substring(0, operation.length - 2);

            if (newOp[-1] !== ".") {
                newOp += ".";
                setOperation(newOp);
            }
        }
    };

    return {
        buttons,
        operation,
        result,
        handleButton,
    };
};
