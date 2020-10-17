import React from 'react'
import styled from 'styled-components'
import ListItem from './ListItem'

const ListContentWrapper = styled.div`
max-width: 450px;
height: 30rem;
margin: .5rem auto;
`
function ListContents() {
    return (
        <ListContentWrapper>
            <ListItem item='With css variables'/>
            <ListItem item='Styled-components'/>
            <ListItem item='No context or State'/>
            <ListItem item='No local storage'/>
            <ListItem item='Highly adptable'/>
        </ListContentWrapper>
    )
}

export default ListContents
