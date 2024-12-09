const vacationSpot = {
    city: 'Seoul',
    country: 'South Korea',
    description: 'Seoul is a famous Seoul-tehran metropolitan area. It is a coastal city with a rich history of culture, art, and architecture.',
    weather: 'Mild to hot',
    priceRange: 'Moderate',
    familyFriendly: true,
    attractions: ['Seoul Tower', 'Seoul Central Park', 'Gangnam Style'],
    transportation: ['Bus', 'Subway', 'Taxi', 'Bicycle'],
    activities: ['Shopping', 'Dining', 'Sightseeing', 'Relaxation'],
    amenities: ['Restaurants', 'Beaches', 'Parks', 'Museums'],
    food: ['Korean', 'Chinese', 'Japanese', 'Indian', 'Thai'],
    mySpot: function() {
        return `${this.city} ${this.country}`;
    }
}

console.log(vacationSpot);

console.log(vacationSpot.mySpot());