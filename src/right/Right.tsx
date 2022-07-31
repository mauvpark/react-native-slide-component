import React, { Component } from "react";
import { Animated, StyleProp, TransformsStyle, ViewStyle } from "react-native";

interface RightProps {
	width: ViewStyle["width"];
	backgroundColor?: ViewStyle["backgroundColor"];
	extraStyle?: StyleProp<ViewStyle>;
	children: React.ReactElement[] | React.ReactElement;
	transform: TransformsStyle["transform"];
}

export class Right extends Component<RightProps> {
	constructor(props: RightProps) {
		super(props);
	}

	render() {
		return (
			<Animated.View
				style={[
					{
						width: this.props.width,
						height: "100%",
						backgroundColor: this.props.backgroundColor,
						transform: this.props.transform,
					},
					this.props.extraStyle,
				]}
			>
				{this.props.children}
			</Animated.View>
		);
	}
}

export default Right;
