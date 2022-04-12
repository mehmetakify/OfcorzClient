import React from 'react';

export default function TagElement ({elementName}) {
        return (
            <span
                className="disable-highlight"
                style={{
                    borderRadius: 7,
                    display: "inline-block",
                    marginRight: 6,
                    color: "white",
                    fontSize: 13,
                    backgroundColor: "#123343",
                    padding: 8,
                    maxWidth: "98%",
                    overflow: "hidden"
                }}>
                <span className="display-inline-flex">
                    {"# " + elementName}
                        </span>
            </span>
        );
    }
