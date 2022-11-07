import style from 'styled-components/native'
import { StatusBar, Platform } from 'react-native'

export const ButtonMenu = style.TouchableOpacity`
    top: ${Platform.OS === 'ios' ? StatusBar.currentHeight + 60 +'px' : 13+'px'};
    position: absolute;
    margin: 0 20px;
    justify-content: space-around;
`