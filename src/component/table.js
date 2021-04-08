import React from "react";
import Loading from "./loading";

export default function Table(props) {
    function handleClick(e) {
        props.onSelected(e);
    }
    // Renders result table only when data is not null and not in loading state
    if (props.data && !props.loading) {
        return (
            <div className="flex flex-col m-2" >
                <div className="-my-2 sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            CHARACTERS - SHOW RESULTS : {props.data.count}/{props.data.total}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {props.data.results.map((char) => (
                                        <tr>
                                            <td key={char.id} onClick={() => handleClick(char)} className="px-6 py-4 hover:bg-gray-100 cursor-pointer whitespace-nowrap focus:ring-opacity-50">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10">
                                                        <img className="h-10 w-10 rounded-full" src={char.thumbnail.path + "." + char.thumbnail.extension} alt="" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">
                                                            {char.name}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else if (props.loading) {
        return (
            <>
            <Loading />
            <Loading />
            <Loading />
            </>
        )
    } else {
        return (
            <p></p>
        )
    }

}