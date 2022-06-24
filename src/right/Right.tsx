import React, { Component } from "react";
import { StyleProp, View, ViewStyle } from "react-native";

interface RightProps {
	width: ViewStyle["width"];
	backgroundColor?: ViewStyle["backgroundColor"];
	extraStyle?: StyleProp<ViewStyle>;
	children: React.ReactElement[] | React.ReactElement;
}

export class Right extends Component<RightProps> {
	constructor(props: RightProps) {
		super(props);
	}

	render() {
		return (
			<View
				style={[
					{
						width: this.props.width,
						height: "100%",
						backgroundColor: this.props.backgroundColor,
					},
					this.props.extraStyle,
				]}
			>
				{this.props.children}
			</View>
		);
	}
}

export default Right;
