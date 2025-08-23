import { Text, TextProps } from "react-native";

type ThemedTextProps = TextProps & {
  type?: "default" | "title" | "link";
};

export function ThemedText({
  type = "default",
  style,
  ...props
}: ThemedTextProps) {
  let textStyle = {};

  if (type === "title") {
    textStyle = { fontSize: 24, fontWeight: "bold", color: "#333" };
  } else if (type === "link") {
    textStyle = { color: "#1e90ff", textDecorationLine: "underline" };
  } else {
    textStyle = { fontSize: 16, color: "#555" };
  }

  return <Text style={[textStyle, style]} {...props} />;
}
