import React from "react";
import { Animated, Dimensions, StyleProp, ViewStyle } from "react-native";

import Left from "../left/Left";
import Right from "../right/Right";

interface ProviderProps {
	componentWidth?: ViewStyle["width"];
	componentHeight?: ViewStyle["height"];
	children: React.ReactNode;
}

interface LeftViewProps {
	width?: ViewStyle["width"];
	extraStyle?: StyleProp<ViewStyle>;
	children: React.ReactNode;
}

interface RightViewProps {
	extraStyle?: StyleProp<ViewStyle>;
	children: React.ReactNode;
}

const toX = new Animated.Value(0);
const windowWidth = Dimensions.get("window").width;

export class SlideComponent {
	constructor() {}

	static moveLeftToRight = (leftWidth: string | number) => {
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
			duration: 500,
			useNativeDriver: false,
		}).start();
	};

	static moveRightToLeft = () => {
		Animated.timing(toX, {
			toValue: 0,
			duration: 500,
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
		extraStyle,
		children,
	}: LeftViewProps) => {
		return (
			<Left width={width} extraStyle={extraStyle}>
				{children}
			</Left>
		);
	};

	static RightView = ({ extraStyle, children }: RightViewProps) => {
		return (
			<Right width="100%" extraStyle={extraStyle}>
				{children}
			</Right>
		);
	};
}

export default SlideComponent;
