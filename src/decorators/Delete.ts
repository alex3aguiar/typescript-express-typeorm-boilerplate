import { VerbMethod } from './Get';
export const Delete = (path: string): MethodDecorator => {
    return VerbMethod(path, "delete");
};
