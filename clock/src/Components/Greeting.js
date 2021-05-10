import { Typography } from '@material-ui/core'
import React, { memo, useEffect } from 'react'

export default memo(function Greeting(props) {
    useEffect(() => {
        console.log('Greeting Component');
    },[props.greeting])
    return (
        <Typography variant="h3" component="div">{props.greeting}</Typography>
    )
})
