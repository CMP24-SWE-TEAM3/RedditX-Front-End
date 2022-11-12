// imports
import React, {useState} from "react";
import Form from "react-bootstrap/Form";

/**
 * Function that helps dropdown functionality
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
                <Form.Control
                    autoFocus
                    placeholder="Filter"
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <ul className="list-unstyled">
                    {React.Children.toArray(children).filter(
                        ((child) => !value.toLowerCase() || child.props.children.toLowerCase().startsWith(value.toLowerCase())),
                    )}
                </ul>
            </div>
        );
    },
);
export default CustomMenu;