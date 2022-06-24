import React, { Component } from "react";
import { StyleProp, View, ViewStyle } from "react-native";

interface LeftProps {
	width: ViewStyle["width"];
	backgroundColor?: ViewStyle["backgroundColor"];
	extraStyle?: StyleProp<ViewStyle>;
	children: React.ReactElement[] | React.ReactElement;
}

export class Left extends Component<LeftProps> {
	constructor(props: LeftProps) {
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

export default Left;
