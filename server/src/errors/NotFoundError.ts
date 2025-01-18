import { CustomError } from "./CustomError";

export class NotFoundError extends CustomError {   
    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, NotFoundError.prototype)
    }
    
    statusCode: number = 404;
    writeMessage(): { message: string } {
        return { message: this.message }
    }
}