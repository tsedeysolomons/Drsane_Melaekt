import { View, ViewProps } from "react-native";

type ThemedViewProps = ViewProps;

export function ThemedView({ style, ...props }: ThemedViewProps) {
  return (
    <View style={[{ backgroundColor: "#fff", flex: 1 }, style]} {...props} />
  );
}
