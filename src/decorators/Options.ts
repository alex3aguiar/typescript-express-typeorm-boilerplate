import { VerbMethod } from './Get';
export const Options = (path: string): MethodDecorator => {
    return VerbMethod(path, "options");
};
