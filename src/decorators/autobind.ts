// Autobind decorator
export function Autobind(_: any, _2: any, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value; // store method

  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };

  return adjDescriptor;
}
