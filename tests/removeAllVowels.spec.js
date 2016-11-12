describe('removeAllVowels Filter', function () {
	var $controller, removeAllVowels;

	beforeEach(module('app'));

	beforeEach(inject(function ($filter) {
		removeAllVowels = $filter('removeAllVowels');
	}));

  it('should remove all vowels from a string', function () {
    expect(removeAllVowels('test')).toEqual('tst');
  });
});
