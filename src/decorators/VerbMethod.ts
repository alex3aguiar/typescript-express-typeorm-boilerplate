import 'reflect-metadata';

import { RouteDefinition } from './RouterDefinition';

export const VerbMethod = (path: string, method: RouteDefinition["requestMethod"]): MethodDecorator => {
    return (target, propertyKey: string): void => {

        if (!Reflect.hasMetadata('routes', target.constructor)) {
            Reflect.defineMetadata('routes', [], target.constructor);
        }
        const routes = Reflect.getMetadata('routes', target.constructor) as Array<RouteDefinition>;
        routes.push({
            requestMethod: method,
            path,
            methodName: propertyKey
        });
        Reflect.defineMetadata('routes', routes, target.constructor);
    };
};



