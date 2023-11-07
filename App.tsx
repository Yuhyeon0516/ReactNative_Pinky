import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {RecoilRoot} from "recoil";

import MainStack from "./src/screens/MainStack";

function App(): JSX.Element {
    return (
        <RecoilRoot>
            <NavigationContainer>
                <SafeAreaProvider>
                    <MainStack />
                </SafeAreaProvider>
            </NavigationContainer>
        </RecoilRoot>
    );
}

export default App;
