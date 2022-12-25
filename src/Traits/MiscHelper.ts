import {GeneralErrorMsg, UniqueKeyErrorMsg} from "../Constants/ErrorMsg";
import {Logger} from "@nestjs/common";

export const DbErrorWrapper = async <T,>(func:()=>Promise<T>,logger:Logger = null):Promise<T>=>{
    if (logger == null) {
        // @ts-ignore
        logger = new Logger((this?this:{name:'unknown'}).name)
    }
    try {
        const res = await func()
        return res
    } catch (e) {
        if (e && e.code && e.code == 'P2002') {
            logger.error(e)
            throw new Error(UniqueKeyErrorMsg)
        } else {
            logger.error(e)
            throw new Error(GeneralErrorMsg)
        }
    }
}