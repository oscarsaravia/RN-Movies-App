import { StackScreenProps } from '@react-navigation/stack';
import { View, Text, Button } from 'react-native';

interface Props extends StackScreenProps<any, any>{};

export const DetailScreen = ({ navigation }: Props) => {
  return (
    <View>
      <Text>DetailScreen</Text>
      <Button 
        title="Regresar"
        onPress={() => navigation.pop()}
      />
    </View>
  )
}
