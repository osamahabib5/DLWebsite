import React from 'react'
import { OverlayTrigger, Button, Image, Tooltip } from "react-bootstrap";
import info from "./Info.png";
function FiltersDescription(props) {
    return (
        <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="button-tooltip-2">{props.text}</Tooltip>}
        >
            {({ ref, ...triggerHandler }) => (
                <Button
                    variant="light"
                    {...triggerHandler}
                    className="d-inline-flex align-items-center btn-pricing-info"
                >
                    <Image
                        ref={ref}
                        roundedCircle
                        src={info}
                    />
                </Button>
            )}
        </OverlayTrigger>
    )
}

export default FiltersDescription
