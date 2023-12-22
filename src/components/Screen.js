import React from 'react';
import { ScrollView, View } from 'react-native';

export default function Screen({ children, type=null }) {
    
    if (type == 'static') {
        return <View style={{ flex: 1, backgroundColor: '#E4F4CD' }}>
            {children}
        </View>
    }
    else {
        return <ScrollView style={{ flex: 1, backgroundColor: '#E4F4CD' }}>
            {children}
        </ScrollView>
    }
}
