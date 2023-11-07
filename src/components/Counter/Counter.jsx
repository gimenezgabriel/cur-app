import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, decrementByAmount, incrementByAmount } from "../../features/counter/CounterSlice";
import styles from './Counter.style'

const Counter = () => {
const [inputToAdd, setInputToAdd] =useState(0)
const counter = useSelector(state => state.counter.value)
const dispatch = useDispatch()

  return (
    <View style={styles.container}>
      <View style={styles.counterContainer}>
        <Pressable style={styles.counterButtons} onPress={() => dispatch(decrement())}>
          <Text style={styles.signs}>-</Text>
        </Pressable>
        <Text style={styles.signs}>{counter}</Text>
        <Pressable onPress={() => dispatch(increment())} style={styles.counterButtons}
        >
          <Text style={styles.signs}>+</Text>
        </Pressable>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          keyboardType="number-pad"
          style={styles.input}
          placeholder="cantidad a sumar"
          value={inputToAdd}
          onChangeText={value => setInputToAdd(Number(value))}
        />
        <Pressable onPress={() => dispatch(incrementByAmount(inputToAdd))}>
          <Text>add</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Counter;


