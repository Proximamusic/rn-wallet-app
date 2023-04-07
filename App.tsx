
import Welcome from './screens/Welcome';
import  AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import RootStack from './navigators/RootStack';


export default function App() {
  let [fontsLoaded] = useFonts({
    "lato-bold": require("./assets/fonts/Lato-Bold.ttf"),
    "lato-regular": require("./assets/fonts/Lato-Regular.ttf"),
  })

  if(!fontsLoaded){
    return <AppLoading />
  }
  return (
   <RootStack />
  );
}

