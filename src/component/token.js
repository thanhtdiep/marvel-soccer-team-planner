import React from 'react';

export default function Token(props) {
    return (
        // Character icons components
        <div id="child" className="flex items-center m-3">
            <div className="flex-shrink-0 h-10 w-10">
                <img className="h-10 w-10 rounded-full" src={props.data.thumbnail.path + "." + props.data.thumbnail.extension} alt="" />
            </div>
        </div>
    );
}