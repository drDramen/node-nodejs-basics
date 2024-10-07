import {access} from "fs/promises";

export const targetExists = async (target) => {
    try {
        await access(target);
        return true;
    } catch {
        return false;
    }
};
