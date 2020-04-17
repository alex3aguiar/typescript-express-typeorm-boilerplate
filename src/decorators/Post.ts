import { VerbMethod } from './Get';
export const Post = (path: string): MethodDecorator => {
    return VerbMethod(path, "post");
};
