import React, {useState, useEffect} from 'react';
import ShareButtons from './shareButtons';

export default function Footer(props) {
    // Get players' name from object array
    var gkName = props.gk.map((p) => p.name);
    var stName = props.st.map((p) => p.name);
    var mdName = props.md.map((p) => p.name);
    var dfName = props.df.map((p) => p.name);

    // Costruct share content
    var quote = "Just made my Marvel Soccer Team! Come and build yours!\n My team have "
    + gkName.join() + " [GK], " + stName.join() + " [ST]. " + mdName.join() + " [MD], "
    + dfName.join() + " [DF].";
    
    return (
        <footer className="footer relative bg-white pt-1 border-b-2">
            <div className="container mx-auto px-6">
                <div className="sm:flex sm:mt-8">
                    <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-center">
                        <div className="flex flex-col">
                            <ShareButtons quote={quote} url="marvelsoccerteam.com"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-6">
                <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
                    <div className="sm:w-2/3 text-center py-6">
                        <p className="text-sm text-black font-bold mb-2">
                            © 2021 by Thanh Diep
                </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}