import { VerbMethod } from './Get';
export const Get = (path: string): MethodDecorator => {
    return VerbMethod(path, "get");
};
