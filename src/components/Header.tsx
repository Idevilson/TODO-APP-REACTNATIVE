import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import logoImg from '../assets/images/logo/logo.png';

interface HeaderProps {
  tasksCounter: number;
}

export function Header({ tasksCounter }: HeaderProps) {
  const tasksCounterText = '0 tarefas';

  return (
    <View style={styles.container}>
      <Image source={logoImg} />
      
      <View style={styles.tasks}>
        <Text style={styles.tasksCounter}>Você tem </Text>
        {
        <Text style={styles.tasksCounterBold}>
          
          {tasksCounter === 0 ? tasksCounter + ' tarefas': (tasksCounter === 1? tasksCounter + ' tarefa': tasksCounter + ' tarefas')} 
          
        </Text> 
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: getStatusBarHeight(true) + 16,
    paddingHorizontal: 24,
    paddingBottom: 60,
    backgroundColor: '#8257E5',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  tasks: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  tasksCounter: {
    fontSize: 15,
    color: '#FFF',
    fontFamily: 'Inter-Regular',
  },
  tasksCounterBold: {
    fontSize: 15,
    color: '#FFF',
    fontFamily: 'Inter-Bold',
  }
});