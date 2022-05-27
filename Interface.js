export default class Interface {

  constructor(interfaceName, requiredMethods) {
    if (arguments.length != 2) {
      throw new Error("Interface constructor should have been called with exactly two arguments.");
    }
    this.name = interfaceName;
    this.methods = [];
    for ( let method of requiredMethods ) {
      if (typeof method !== 'string') {
        throw new Error("Interface constructor expects method names to be passed in as a string.");
      }
      this.methods.push(method);
    }
  } // End of Constructor

  // Instance method for checking THIS interface
  implementedBy(object) {
    if (arguments.length < 1) {
      throw new Error(`Interface ${this.name}.conforms() should have at least one argument.`);
    }
    for ( let method of this.methods ) {
      if (!object[method] || typeof object[method] !== 'function') {
        throw new Error(`Interface ${this.name}.conforms(): Method '${method}' of interface '${this.name}' not found.`);
      }
    }
    return object; // Return input object to support chaining
  } // End of conforms()

  // Static class method for checking multiple interfaces 
  static ensureImplements(object) {
    if (arguments.length < 2) {
      throw new Error("Interface.ensureImplements should have at least two arguments.");
    }

    for (let i = 1; i < arguments.length; i++) { 
      const suppliedInterface = arguments[i];
      if (suppliedInterface.constructor !== Interface) {
        throw new Error("Interface.ensureImplements expects the latter arguments to be instances of Interface.");
      }

      for ( let method of suppliedInterface.methods ) {
        if (!object[method] || typeof object[method] !== 'function') {
          throw new Error(`Interface.ensureImplements: Method '${method}' of interface '${suppliedInterface.name}' not found.`);
        }
      }
    }
    return object; // Return input object to support chaining
  } // End of ensureImplements()

} // End of Interface   

