// Module-level reference to the active Lenis instance so non-React helpers
// (e.g. scrollTo) can drive smooth scrolling without prop drilling.
let lenisInstance = null;

export function setLenis(instance) {
  lenisInstance = instance;
}

export function getLenis() {
  return lenisInstance;
}
