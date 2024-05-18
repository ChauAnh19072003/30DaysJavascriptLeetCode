function expect(val: any): {
  toBe: (val2: any) => boolean;
  notToBe: (val2: any) => boolean;
} {
  return {
    toBe: (val2) => {
      if (val === val2) return true;
      throw new Error("Not Equal");
    },
    notToBe: (val2) => {
      if (val !== val2) return true;
      throw new Error("Equal");
    },
  };
}
