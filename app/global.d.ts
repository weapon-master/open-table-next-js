declare type UnpackPromise<T extends Promise<unknown>> = T extends Promise<infer U> ? U : never;
declare type UnpackArray<T extends Array<unknown>> = T extends Array<infer U> ? U : never;