import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import api from '../services/api';

const WidgetContainer = () => {
  const [widgets, setWidgets] = useState([]);

  useEffect(() => {
    api.get('/challenge').then(({data}) => {
      setWidgets(data);
    });
  }, []);

  return (
    <View>
      {widgets.map((widget) => (
        <Text key={widget.id}>{widget.name}</Text>
      ))}
    </View>
  );
};

export default WidgetContainer;
