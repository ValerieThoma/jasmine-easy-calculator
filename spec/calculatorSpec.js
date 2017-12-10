describe('Calculator Suite Unit Test', ()=>{
  it('should add two numbers together',()=>{
    expect(add(4,4)).toBe(8);
  });
  it('should subtract one number from another',()=>{
    expect(subtract(11,9)).toBe(2);
  });
  it('should multiply two numbers together', ()=>{
    expect(multiply(3,3)).toBe(9);
  });
  it('should divide one number into another', ()=>{
    expect(divide(22,2)).toBe(11);
  });
});
