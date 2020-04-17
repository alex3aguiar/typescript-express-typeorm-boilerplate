import { VerbMethod } from './Get';
export const Put = (path: string): MethodDecorator => {
    return VerbMethod(path, "put");
};
