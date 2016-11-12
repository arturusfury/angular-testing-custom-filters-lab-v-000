describe('Favorite Food Filter', function () {
	var $controller, favoriteFood;

	beforeEach(module('app'));

  beforeEach(inject(function ($filter) {
		favoriteFood = $filter('favoriteFood');
	}));

  it('should filter an array of objects based on input', function () {
    var madMaxPeople = [
      {
        name: "Max",
        favoriteFood: 'Octane'
      },
      {
        name: "Furiosa",
        favoriteFood: 'Seeds'
      },
      {
        name: "Nux",
        favoriteFood: 'Octane'
      }
    ];

    var results = favoriteFood(madMaxPeople, 'Seeds');

    expect(results.length).toBe(1);
    expect(results[0].name).toBe('Furiosa');
  });
});
