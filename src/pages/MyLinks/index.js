import React from 'react'

import StatusBarPage from '../../components/StatusBar'

import Menu from '../../components/Menu/index'
import ListItem from '../../components/ListItem/index'

import { Container, Title, ListLinks } from './styles'

export default function MyLinks() {
    return(
        <Container>

            <StatusBarPage 
                barStyle='light-content'
                backgroundColor='#132742'
            />

            <Menu />

            <Title>Meus Links</Title>

            <ListLinks 
                data={[ 1, 2, 5, 8, 15, 4, 12, 18, 3, 7, 10, 22, 155, 854]}
                keyExtractor={ (item) => String(item.id) }
                renderItem={ ({item}) => <ListItem data={item} />}
                contentContainerStyle={{paddingBottom: 20}}
                showsVerticalScrollIndicator={false}
            />
            
        </Container>
    )
}