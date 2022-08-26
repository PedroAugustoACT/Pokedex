import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../pages/homepage'
import { PokeTypes } from '../pages/pokeTypes'

const { Screen, Navigator } = createStackNavigator();


export function StackRoutes(){
    return(
        <Navigator>
            <Screen 
                name='Home'
                component={Home}
            />
            <Screen 
                name='Poketypes'
                component={PokeTypes}
            />
        </Navigator>
    )
    
}