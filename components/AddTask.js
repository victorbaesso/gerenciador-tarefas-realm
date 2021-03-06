import React, { useState } from "react";
import { Overlay, Input } from "react-native-elements";
import { Button } from "react-native";

import styles from "../stylesheet";

// The AddTask is a button for adding tasks. When the button is pressed, an
// overlay shows up to request user input for the new task name. When the
// "Create" button on the overlay is pressed, the overlay closes and the new
// task is created in the realm.
export function AddTask({ createTask }) {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [newTaskName, setNewTaskName] = useState("");

  return (
    <>
      <Overlay
        isVisible={overlayVisible}
        overlayStyle={{ width: "90%" }}
        onBackdropPress={() => setOverlayVisible(false)}
      >
        <>
          <Input
            placeholder="Descrição"
            onChangeText={(text) => setNewTaskName(text)}
            autoFocus={true}
          />
          <Button
            title="Criar"
            onPress={() => {
              setOverlayVisible(false);
              createTask(newTaskName);
            }}
          />
        </>
      </Overlay>
      <Button
        type="clear"
        titleStyle={styles.plusButton}
        title="Nova tarefa"
        color="#218838" 
        onPress={() => {
          setOverlayVisible(true);
        }}
      />
    </>
  );
}
