import { Animated, Dimensions } from "react-native";

import { LeftViewProps, ProviderProps, RightViewProps } from "../..";
import Left from "../left/Left";
import Right from "../right/Right";

const toX = new Animated.Value(0);
const windowWidth = Dimensions.get("window").width;

export class SlideComponent {
	constructor() {}

	static moveLeftToRight = (leftWidth: string | number, duration = 500) => {
		let width = leftWidth;
		const regex = /\d+/;
		if (
			typeof leftWidth === "string" &&
			leftWidth?.toString().includes("%")
		) {
			const searchedArray = regex.exec(leftWidth);
			const sorted = parseInt((searchedArray as string[])[0]);
			width = (windowWidth * sorted) / 100;
		} else if (typeof leftWidth === "string") {
			width = parseInt(leftWidth);
		}
		Animated.timing(toX, {
			toValue: -width,
			duration: duration,
			useNativeDriver: false,
		}).start();
	};

	static moveRightToLeft = (duration = 500) => {
		Animated.timing(toX, {
			toValue: 0,
			duration: duration,
			useNativeDriver: false,
		}).start();
	};

	static Provider = ({
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
							translateX: toX,
						},
					],
				}}
			>
				{children}
			</Animated.View>
		);
	};

	static LeftView = ({
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

	static RightView = ({
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
