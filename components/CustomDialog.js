import React, { useEffect, useState } from 'react';
import { Dialog } from 'react-native-elements';
import { theme } from '../constants';
import { Text } from 'react-native-elements';

export default function CustomDialog(props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(props.visibleFlag);
  })
  return (
    <Dialog
      isVisible={visible}
      overlayStyle={{ borderRadius: 16, borderWidth: 1, backgroundColor: theme.COLORS.ACTIVE, borderColor: theme.COLORS.BASE }}>
        <Dialog.Title title={props.title}/>
            <Text>{props.content}</Text>
        <Dialog.Actions>
            {
              props.cancelAction != null ? <Dialog.Button title="Cancel" onPress={props.cancelAction}/> : ''
            }
            {
              props.okAction != null ? <Dialog.Button title="Ok" onPress={props.okAction}/> : <Dialog.Button title="Ok" onPress={() => setVisible(false)}/>
            }
            
        </Dialog.Actions>
    </Dialog>
  )
}
