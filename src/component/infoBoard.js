import React from "react";

export default function CharacterInfo(props) {
    return (
        // Contruct character information page
        <div>
            <div className="flex items-center m-2">
                <div className="flex-shrink-0 h-16 w-16">
                    <img className="h-16 w-16 rounded-full" src={props.data.thumbnail.path + "." + props.data.thumbnail.extension} alt="" />
                </div>
                <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                        {props.data.name}
                    </div>
                </div>
            </div>
            <div className="text-left">
                {props.data.description}
                <div className="mt-4">
                    Available Comics: {props.data.comics.available}
                </div>
                <div className="mt-4">
                    Available Series: {props.data.series.available}
                </div>
                <div className="mt-4">
                    Available Stories: {props.data.stories.available}
                </div>
                <div className="mt-4">
                    Available Events: {props.data.events.available}
                </div>
            </div>
        </div>
    );
}