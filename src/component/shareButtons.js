import React, { useState, useEffect } from 'react';
import {
    FacebookIcon,
    FacebookShareButton,
    InstapaperShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    InstapaperIcon,
    TwitterIcon,
    LinkedinIcon
} from 'react-share';

export default function ShareButtons(props) {
    return (
        // Social media share options and icons
        <div className="flex align-middle">
            <FacebookShareButton
                url={props.url}
                quote={props.quote}
                hashtag="#marvelsoccerteam">
                <FacebookIcon logoFillColor="white" />
            </FacebookShareButton>
            <InstapaperShareButton
                url={props.url}
                title="My Marvel Scoccer Team"
                description={props.quote}>
                <InstapaperIcon logoFillColor="white" />
            </InstapaperShareButton>
            <TwitterShareButton
                url={props.url}
                title={props.quote}
                hashtag="#marvelsoccerteam">
                <TwitterIcon logoFillColor="white" />
            </TwitterShareButton>
            <LinkedinShareButton
                url={props.url}
                summary={props.quote}
                title="My Marvel Scoccer Team"
                source="Marvel Soccer Team">
                <LinkedinIcon logoFillColor="white" />
            </LinkedinShareButton>
        </div>
    );
}