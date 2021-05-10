import { Typography } from '@material-ui/core'
import React from 'react'

function Time(props) {
    return (
        <Typography variant="h5" component="div">{props.time}</Typography>
    )
}

export default Time
