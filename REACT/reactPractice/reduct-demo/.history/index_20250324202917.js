const BUY_CAKE = 'BUY_CAKE'

{
    type: BUY_CAKE,
    payload: {
        cakeType: 'chocolate',
        cakeSize: 'large',
        cakePrice: 25.00,
        cakeSweetness: 'extra-sweet',
        cakeToppings: ['caramel', 'nuts', 'chocolate chips'],
        cakeCrust: 'thin',
        cakeToppingPrice: {
            caramel: 0.50,
            nuts: 0.25,
            chocolateChips: 0.75
        }
    }
}
