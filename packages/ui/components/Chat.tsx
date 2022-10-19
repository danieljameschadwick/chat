import React, { useEffect, useRef, useState } from "react";
import { getTheme } from "@chat/theme/utils/theme";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import io from "socket.io-client";
import { ChatMessage } from "./ChatMessage";

const SOCKET_URL = "localhost:4000";
const TEMP_USER = "dan";

const connect = () => {
  return io(SOCKET_URL);
};

export const Chat = () => {
  const themeStyles = getTheme();
  const [message, setMessage] = useState<string>("default message");
  const [messages, setMessages] = useState<any[]>([]);
  const socketRef = useRef(null);

  useEffect(() => {
    const socket = connect();
    socketRef.current = socket;

    socket.onAny((type, { user, message }) => {
      console.log(`${type} - ${user}: ${message}`);

      setMessages((prevMessages) => [
        ...prevMessages,
        {
          user,
          message,
        },
      ]);
    });

    return () => {
      socket.disconnect();
    };
  });

  const sendMessage = () => {
    if (socketRef.current == null) throw new Error("Socket not initialized");
    if (message === "") return;

    const socket = socketRef.current;

    socket.send({
      // @TODO: add a shared enum for type
      type: "message",
      user: TEMP_USER,
      message,
    });
  };

  return (
    <View style={[styles.container]}>
      <View style={[styles.chatContainer]}>
        {messages.map(({ user, message }, index) => {
          return <ChatMessage key={index} user={user} message={message} />;
        })}
      </View>

      <View style={[styles.messageContainer]}>
        <TextInput
          style={[styles.messageInput, themeStyles.text]}
          onChangeText={setMessage}
          defaultValue={message}
        />

        <TouchableOpacity onPress={() => sendMessage()}>
          <View style={[styles.messageSendButton]}>
            <Text>Send</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "600px",
    width: "100%",
    backgroundColor: "#1F1F1F",
  },
  chatContainer: {
    padding: 15,
    flexGrow: 1,
  },
  messageContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    padding: 10,
    backgroundColor: "#2F2F2F",
  },
  messageInput: {
    flexGrow: 1,
    padding: 10,
  },
  messageSendButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "rgb(255, 113, 0)",
  },
});
