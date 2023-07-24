/** @jsxImportSource @emotion/react */
import React, { useRef, useState, useMemo } from "react";
import { styled } from '@mui/material';
import { css, keyframes } from '@emotion/react'

const lookawayUpKF = keyframes`
	from {
		transform: rotate3d(.2, 0, -.01, 20deg);
	}
	to {
		transform: rotate3d(.2, -.05, -.01, 20deg);
	}
`
const lookawayDownKF = keyframes`
	0% {
		transform: rotate3d(-.2, 0, -.01, 20deg);
	}
	100% {
		transform: rotate3d(-.2, -.05, .01, 20deg);
	}
`
const lookAway = (props) => css`
	transition-duration: .3s;
	animation: 1s infinite alternate;
	transform: ${props.isFocus ? "rotate3d(.2, 0, 0, 20deg) !important" : "rotate3d(-.2, 0, 0, 20deg) !important"}
	animation-name: ${props.isFocus ? lookawayUpKF : lookawayDownKF}
	background: ${props.isFocus ? "#fff" : "#000"}
`
const G = styled('g')(
	() => `
		transition: transform .5s;
	`
)

const Ears = styled(G)(
	() => `
		transform-origin: 50% 50% 5px;
`
);
const Bol = styled(G)(
	() => `
	transform-origin: 50% 50% -40px;
`
);
const Eyes = styled(G)(
	() => `
		transform-origin: 50% 50% -40px;
`
);
const Muzzle = styled(G)(
	() => `
		transform-origin: 50% 50% -44px;
`
);

const Svg = styled('svg')(
	() => `
		width: 70%;
		border-radius: 50%;
		background: #fff;
		align-self: center;
		transform-style: preserve-3d;
`
);

const FriendsFace = () => {
	const focusRef = useRef();

	const [isFocus, onFocus] = useState(false);

	return (
		<>
			<input
				type="text"
				ref={focusRef}
				name="password"
        onFocus={() => onFocus(true)}
        onBlur={() => onFocus(false)}
			/>
			<div css={lookAway({isFocus})}>testsea { isFocus? "yy" : "xx" }</div>
			<Svg
				v-show="friends == 'ryan_old'"
				id="ryan"
				viewBox="0 0 120 120"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M20,150 C0,65 120,65 100,150"
					fill="#ffcc00"
					stroke="#946205"
					stroke-width="2.5" />
				<Ears>
					<path
						d="M46,32 L46,30 C46,16 26,16 26,30 L26,32"
						fill="#ffcc00"
						stroke="#946205"
						stroke-width="2.5"
						stroke-linecap="round"
						transform="rotate(-10,38,24)" />
					<path
						d="M74,32 L74,30 C74,16 94,16 94,30 L94,32"
						fill="#ffcc00"
						stroke="#946205"
						stroke-width="2.5"
						stroke-linecap="round"
						transform="rotate(10,82,24)" />
				</Ears>
				<circle
					cx="60"
					cy="60"
					r="40"
					fill="#ffcc00"
					stroke="#946205"
					stroke-width="2.5" />
				<Eyes>
					<line
						x1="37"
						x2="50"
						y1="46"
						y2="46"
						stroke="#2F1F00"
						stroke-width="3.5"
						stroke-linecap="round" />
					<circle
						cx="44"
						cy="55"
						r="3"
						fill="#2F1F00" />
					<line
						x1="70"
						x2="83"
						y1="46"
						y2="46"
						stroke="#2F1F00"
						stroke-width="3.5"
						stroke-linecap="round" />
					<circle
						cx="76"
						cy="55"
						r="3"
						fill="#2F1F00" />
				</Eyes>
				<Bol>
					<rect
						x="30"
						y="62"
						rx="5"
						ry="7"
						width="15"
						height="8"
						fill="#fd5a6b" />
					<rect
						x="77"
						y="62"
						rx="5"
						ry="7"
						width="15"
						height="8"
						fill="#fd5a6b" />
				</Bol>
				<Muzzle>
					<path
						d="M60,66 C58.5,61 49,63 49,69 C49,75 58,77 60,71 M60,66 C61.5,61 71,63 71,69 C71,75 62,77 60,71"
						fill="#fff" />
					<path
						d="M60,66 C58.5,61 49,63 49,69 C49,75 58,77 60,71 M60,66 C61.5,61 71,63 71,69 C71,75 62,77 60,71"
						fill="#fff"
						stroke="#2F1F00"
						stroke-width="2.5"
						stroke-linejoin="round"
						stroke-linecap="round" />
					<polygon
						points="59,63.5,60,63.4,61,63.5,60,65"
						fill="#000"
						stroke="#2F1F00"
						stroke-width="5"
						stroke-linejoin="round" />
				</Muzzle>
				<path
					d="M43,110 C10,140 110,145 77,110 L77,110 L68,115 L60,110 L53,115 L43,110"
					fill="#fff" />
			</Svg>

			<Svg
				v-show="friends == 'ryan'"
				id="ryan"
				viewBox="0 0 120 120"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M20,150 C0,65 120,65 100,150"
					fill="#e0a243"
					stroke="#000"
					stroke-width="2.5" />
				<Ears>
					<path
						d="M46,32 L46,30 C46,16 26,16 26,30 L26,32"
						fill="#e0a243"
						stroke="#000"
						stroke-width="2.5"
						stroke-linecap="round"
						transform="rotate(-10,38,24)" />
					<path
						d="M74,32 L74,30 C74,16 94,16 94,30 L94,32"
						fill="#e0a243"
						stroke="#000"
						stroke-width="2.5"
						stroke-linecap="round"
						transform="rotate(10,82,24)" />
				</Ears>
				<circle
					cx="60"
					cy="60"
					r="40"
					fill="#e0a243"
					stroke="#000"
					stroke-width="2.5" />
				<Eyes>
					<line
						x1="37"
						x2="50"
						y1="46"
						y2="46"
						stroke="#000"
						stroke-width="3"
						stroke-linecap="round" />
					<circle
						cx="44"
						cy="55"
						r="3"
						fill="#000" />
					<line
						x1="70"
						x2="83"
						y1="46"
						y2="46"
						stroke="#000"
						stroke-width="3"
						stroke-linecap="round" />
					<circle
						cx="76"
						cy="55"
						r="3"
						fill="#000" />
				</Eyes>
				<Muzzle>
					<path
						d="M60,66 C58.5,61 49,63 49,69 C49,75 58,77 60,71 M60,66 C61.5,61 71,63 71,69 C71,75 62,77 60,71"
						fill="#fff" />
					<path
						d="M60,66 C58.5,61 49,63 49,69 C49,75 58,77 60,71 M60,66 C61.5,61 71,63 71,69 C71,75 62,77 60,71"
						fill="#fff"
						stroke="#000"
						stroke-width="2.5"
						stroke-linejoin="round"
						stroke-linecap="round" />
					<polygon
						points="59,63.5,60,63.4,61,63.5,60,65"
						fill="#000"
						stroke="#000"
						stroke-width="5"
						stroke-linejoin="round" />
				</Muzzle>
				<path
					d="M43,110 C10,140 110,145 77,110 L77,110 L68,115 L60,110 L53,115 L43,110"
					fill="#fff" />
			</Svg>

			<Svg
				v-show="friends == 'apeach'"
				id="apeach"
				viewBox="0 0 120 120"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M20,150 C0,65 120,65 100,150"
					fill="#fff"
					stroke="#bdbdbd"
					stroke-width="2.5" />
				<path
					id="svg_3"
					fill="#f7c3c2"
					stroke-width="2.5"
					stroke-opacity="null"
					fill-opacity="null"
					d="M51.58727,18.013754004449844 C39.98372,25.234884004449846 13.71865,44.523654004449845 13.87295,65.08085400444985 C14.02725,85.63805400444984 26.80984,98.21012400444984 60.46619,98.04786400444985 C94.12254,97.88560400444985 108.71246,84.50826400444984 106.9273,62.844884004449845 C105.14213,41.18152400444984 88.18309,27.040154004449846 76.28202,19.518154004449844 C64.38093,11.996144004449844 63.19082,10.792624004449845 51.58727,18.013754004449844 z"
					stroke-dasharray="none"
					stroke="#f6a299"/>

				<Eyes>
					<circle
						cx="44"
						cy="60"
						r="3.5"
						fill="#6a393c" />
					<circle
						cx="76"
						cy="60"
						r="3.5"
						fill="#6a393c" />
				</Eyes>
				<Bol>
					<rect
						x="22"
						y="65"
						rx="7"
						ry="7"
						width="20"
						height="13"
						fill="#fd5a6b" />
					<rect
						x="78"
						y="65"
						rx="7"
						ry="7"
						width="20"
						height="13"
						fill="#fd5a6b" />
				</Bol>
				<Muzzle>
					<path
						id="svg_10"
						fill="#9e2e2e"
						stroke-width="0"
						stroke-opacity="null"
						fill-opacity="null"
						d="M59.44733,70.71892C53.94165,70.71892 48.44734,67.71893 48.19734,74.71892C47.94734,81.71891 61.6973,81.71892 67.19729,79.71894C72.69728,77.71896 72.94734,72.71895 70.44733,70.21893C67.94732,67.71892 64.953,70.71892 59.44733,70.71892z"
						stroke-dasharray="none"/>
					<path
						id="svg_11"
						fill="#fff"
						stroke-width="0"
						stroke-opacity="null"
						fill-opacity="null"
						d="M59.999686976509096,71.04955759922028 C55.94453697650909,71.04955759922028 54.666386976509095,70.04955759922028 54.99971697650909,73.71620759922028 C55.333046976509095,77.38285759922027 65.4996569765091,77.04952759922027 65.3329969765091,73.04954759922028 C65.1663369765091,69.04956759922027 64.0548469765091,71.04955759922028 59.999686976509096,71.04955759922028 z"
						stroke-dasharray="none"/>
					<path
						id="svg_10"
						fill="transparent"
						stroke="#75292c"
						stroke-width="2.5"
						stroke-opacity="null"
						fill-opacity="null"
						d="M59.44733,70.71892C53.94165,70.71892 48.44734,67.71893 48.19734,74.71892C47.94734,81.71891 61.6973,81.71892 67.19729,79.71894C72.69728,77.71896 72.94734,72.71895 70.44733,70.21893C67.94732,67.71892 64.953,70.71892 59.44733,70.71892z"
						stroke-dasharray="none"/>
				</Muzzle>
			</Svg>
		</>
	);
}

export default FriendsFace;
