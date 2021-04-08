import React from 'react';

export default function Player(props) {
    return (
        // Character icon and name component
        <div className="flex items-center m-3">
            <div className="flex-shrink-0 h-10 w-10">
                <img className="h-10 w-10 rounded-full" src={props.data.thumbnail.path + "." + props.data.thumbnail.extension} alt="" />
            </div>
            <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">
                    {props.data.name}
                </div>
            </div>
        </div>
    );
}