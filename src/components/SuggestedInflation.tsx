import React, { useContext } from 'react'
import { makeStyles, Paper, Typography } from '@material-ui/core'
import PriceContext from '../PriceContext'

interface ISuggestedInflationProps {
    percentage: number
}

function calculateNewPrice(price: number, percentage: number) {
    return (price * ((100 + percentage) / 100)).toFixed(2)
}

const useStyles = makeStyles({
    root: {
        justifyContent: 'center'
    },
    green: {
        color: 'green'
    }
})

export default function SuggestedInflation(props: ISuggestedInflationProps) {
    const { offeredPrice } = useContext(PriceContext)
    const { percentage } = props
    const classes = useStyles()
    const newPrice = calculateNewPrice(offeredPrice, percentage)

    return (
        <Paper>
            <Typography variant="h6" align="center">
                <span className={classes.green}> +{percentage}%</span> = {newPrice}
            </Typography>
        </Paper>
    )
}