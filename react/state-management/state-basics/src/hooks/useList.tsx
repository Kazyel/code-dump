import { useState } from "react";

export const useList = () => {
    const [list, setList] = useState<string[]>([]);

    const handleListChange = (list: string) => {
        setList((items) => [list, ...items]);
    };

    return { list, handleListChange };
};

export default useList;
