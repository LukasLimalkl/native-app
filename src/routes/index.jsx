import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/Login';
import Main from '../pages/Main';
import Welcome from '../pages/Welcome';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
    <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login}  options={{headerShown: false}}/>
        <Stack.Screen name="Main" component={Main}  options={{headerShown: false}}/>
    </Stack.Navigator>
    );
}