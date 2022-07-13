import { Drawer, SwipeableDrawer } from "@mui/material"

function Navigator(props)
{
    return (
        <>
            <Drawer
                anchor={'left'}
                open={props.state}
                onClose={props.action}
            >
                <SwipeableDrawer
                    anchor={'left'}
                    open={props.state}
                    onOpen={props.action}
                    onClose={props.action}
                >
                    {props.component}
                </SwipeableDrawer>
            </Drawer>
        </>
    )
}

export default Navigator