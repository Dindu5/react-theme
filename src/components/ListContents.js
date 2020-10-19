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
            <ListItem item='useState and useEffect'/>
            <ListItem item='No context'/>
            <ListItem item='local storage enabled'/>
            <ListItem item='Highly adptable'/>
        </ListContentWrapper>
    )
}

export default ListContents