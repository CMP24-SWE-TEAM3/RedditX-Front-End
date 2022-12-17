// imports
import React, { useState } from "react";
import Form from "react-bootstrap/Form";

/**
 * Component that responsible for dropdown search input filtration
 *
 *  @return {React.Component}
 */

const CustomMenu = React.forwardRef(
  ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
    const [textValue, setTextValue] = useState("");

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <Form.Control
          autoFocus
          placeholder="Filter"
          onChange={(e) => setTextValue(e.target.value)}
          value={textValue}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) =>
              child.props.children
                .toLowerCase()
                .search(textValue.toLowerCase()) !== -1
          )}
        </ul>
      </div>
    );
  }
);
export default CustomMenu;
