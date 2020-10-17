import React from 'react'
import styled from 'styled-components'

const ListItemWapper = styled.div `
    padding: 1rem 1rem;
    margin : .5rem 0;
    border-radius : .3rem;
    font-family: 'Lobster', cursive;
    transition : all 0.6s;
    background-color: var(--primary-base);
    color :var(--primary-font);
    backface-visibility: 0;

    &:hover {
        transform : scale(1.04);
        cursor: pointer;
    }
`
function ListItem(props) {
    return (
        <ListItemWapper>
            {props.item}
        </ListItemWapper>
    )
}

export default ListItem
