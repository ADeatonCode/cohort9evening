const CountrySpecs = [ ['Albania', 'ALB', 7], ['Bolivia', 'BOL', 7], ['Canada', 'CAN', 6], ['Denmark', 'DEN', 7], ['Ethiopia', 'ETH', 8], ['Finland', 'FIN', 7], ['Germany', 'GER', 7], ['Hungary', 'HUN', 7], ['Ireland', 'IRE', 7], ['Iceland', 'ICE', 7], ['Japan', 'JAP', 5], ['Kenya', 'KEN', 5] ]; 
const countriesWithLand = CountrySpecs.filter(country => country[0].includes('land')); 

if (countriesWithLand.length > 0) { console.log(countriesWithLand); } else { console.log('All these countries are without land'); }