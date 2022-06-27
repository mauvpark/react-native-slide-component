import { Animated, Dimensions } from "react-native";

import {
	LeftViewProps,
	moveLeftToRightParams,
	moveRightToLeftParams,
	ProviderProps,
	RightViewProps,
} from "../..";
import Left from "../left/Left";
import Right from "../right/Right";

class SlideComponent {
	toX: Animated.Value;
	windowWidth: number;

	constructor() {
		this.toX = new Animated.Value(0);
		this.windowWidth = Dimensions.get("window").width;
	}

	public moveLeftToRight = (
		leftWidth: moveLeftToRightParams["leftWidth"] = "100%",
		duration: moveLeftToRightParams["duration"] = 500
	) => {
		let width = leftWidth;
		const regex = /\d+/;
		if (
			typeof leftWidth === "string" &&
			leftWidth?.toString().includes("%")
		) {
			const searchedArray = regex.exec(leftWidth);
			const sorted = parseInt((searchedArray as string[])[0]);
			width = (this.windowWidth * sorted) / 100;
		} else if (typeof leftWidth === "string") {
			width = parseInt(leftWidth);
		}
		Animated.timing(this.toX, {
			toValue: -width,
			duration: duration,
			useNativeDriver: false,
		}).start();
	};

	public moveRightToLeft = (
		duration: moveRightToLeftParams["duration"] = 500
	) => {
		Animated.timing(this.toX, {
			toValue: 0,
			duration: duration,
			useNativeDriver: false,
		}).start();
	};

	public Provider = ({
		componentWidth = "100%",
		componentHeight = "100%",
		children,
	}: ProviderProps) => {
		return (
			<Animated.View
				style={{
					display: "flex",
					flexDirection: "row",
					width: componentWidth,
					height: componentHeight,
					transform: [
						{
							translateX: this.toX,
						},
					],
				}}
			>
				{children}
			</Animated.View>
		);
	};

	public LeftView = ({
		width = "100%",
		backgroundColor,
		extraStyle,
		children,
	}: LeftViewProps) => {
		return (
			<Left
				width={width}
				backgroundColor={backgroundColor}
				extraStyle={extraStyle}
			>
				{children}
			</Left>
		);
	};

	public RightView = ({
		backgroundColor,
		extraStyle,
		children,
	}: RightViewProps) => {
		return (
			<Right
				width="100%"
				backgroundColor={backgroundColor}
				extraStyle={extraStyle}
			>
				{children}
			</Right>
		);
	};
}

export default SlideComponent;
