describe('Bubble Sort', function(){
    var arr1 = [2,3,5,4,1];
    var arr2 = [2,20000,520,60];
  beforeEach(function(){
      count = 0;
  })
  beforeAll(function () {
    spyOn(window,'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
});


  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('sorts an array', function(){
      expect( bubbleSort(arr1)).toEqual([1,2,3,4,5]);
  });
  it('sorts a complicated array', function(){
      expect( bubbleSort(arr2)).toEqual([2,60,520,20000]);
  });

  it('counts how many times swap gets called', function () {
    bubbleSort(arr1);
    expect(window.swap.calls.count()).toEqual(5);
  });

  it('counts how many times swap gets called', function () {
    bubbleSort(arr2);
    expect(window.swap.calls.count()).toEqual(3);
  });
});

