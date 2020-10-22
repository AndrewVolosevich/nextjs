export interface MessageType {
  type: "success" | "info" | "warning" | "error";
  duration: number;
  text: string;
}
