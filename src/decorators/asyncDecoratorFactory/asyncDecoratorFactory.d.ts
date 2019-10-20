export declare function asyncDecoratorFactory(
  startCallback?: Function,
  endCallback?: Function
): (
  _target: any,
  _propertyKey: string,
  descriptor: TypedPropertyDescriptor<(...params: any[]) => Promise<any>>
) => void
