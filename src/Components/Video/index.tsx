import React from 'react';
import classes from './Video.module.css';

interface IProps {
	src?: any;
	youtubeUrl?: string;
	autoPlay?: boolean;
	loop?: boolean;
	muted?: boolean;
	link?: string;
}

const Video = ({ src, youtubeUrl, autoPlay, loop, muted, link }: IProps) => {
	if (src) {
		return (
			<div className={classes.container}>
				<video className={classes.video} autoPlay={autoPlay} loop={loop} muted={muted}>
					<source src={src} type="video/mp4" />
					Your browser does not support HTML5 video.
				</video>
				{(link) &&
					<a href={link} className={classes.link}>Check it out</a>
				}
			</div>
		);
	} else if (youtubeUrl) {
		return (
			<div
				style={{
					position: "relative",
					paddingBottom: "56.25%" /* 16:9 */,
					paddingTop: 25,
					height: 0
				}}>
				<iframe
					title="video"
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%"
					}}
					src={youtubeUrl}
					frameBorder="0"
				/>
			</div>
		);
	} else {
		return null;
	}
}

export default Video;
