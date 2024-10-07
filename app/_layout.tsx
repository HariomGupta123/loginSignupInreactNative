import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack 
    
    screenOptions={
      {
        headerStyle:{
          backgroundColor:"#0931e3"
        },
        headerTintColor:"#fff",
        headerTitleStyle:{
          fontWeight:"bold"
        }
      }
    }>
      <Stack.Screen name="index"  />
    </Stack>
  );
}
