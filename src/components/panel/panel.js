import React from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';

export const Panel = ({ title, children, label, loading, onLinkClick }) => (
  <View>
    <View>
      <Text>
        {title}
        {loading && <ActivityIndicator />}
      </Text>
      {onLinkClick && <Button title="See all" onPress={onLinkClick} />}
    </View>
    {label && <Text>{label}</Text>}
    {children}
  </View>
);
