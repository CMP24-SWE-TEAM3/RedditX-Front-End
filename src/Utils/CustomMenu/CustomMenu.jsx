// imports
import React, {useState} from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";

/**
 * Function that helps dropdown functionality
 *
 * @type {React.ForwardRefExoticComponent<React.PropsWithoutRef<{readonly "aria-labelledby"?: *, readonly children?: *, readonly style?: *, readonly className?: *}> & React.RefAttributes<unknown>>}
 *
 *  @return {React.Component}
 */

const CustomMenu = React.forwardRef(
    ({children, style, className, 'aria-labelledby': labeledBy}, ref) => {
        const [value, setValue] = useState('');

        return (
            <div
                ref={ref}
                style={style}
                className={className}
                aria-labelledby={labeledBy}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Header</Offcanvas.Title>
                </Offcanvas.Header>
                <Form.Control
                    autoFocus
                    placeholder="Filter"
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <ul className="list-unstyled">
                    {React.Children.toArray(children).filter(
                        (child) => !value || child.props.children.toLowerCase().startsWith(value),
                    )}
                </ul>
            </div>
        );
    },
);
export default CustomMenu;