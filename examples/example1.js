import * as React from "react";
import { SlideComponent } from "react-native-slide-component";

const SlideView = new SlideComponent();

function Example() {
	return (
		<SafeAreaView style={styles.container}>
			<SlideView.Provider>
				<SlideView.LeftView
					width="100%"
					backgroundColor="yellow"
					extraStyle={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<TouchableOpacity
						style={{
							backgroundColor: "white",
							width: 150,
							height: 50,
						}}
						onPress={() => SlideView.moveLeftToRight("100%", 500)}
					>
						<Text>left</Text>
					</TouchableOpacity>
				</SlideView.LeftView>
				<SlideView.RightView
					backgroundColor="blue"
					extraStyle={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<TouchableOpacity
						style={{
							backgroundColor: "white",
							width: 150,
							height: 50,
						}}
						onPress={() => SlideView.moveRightToLeft(500)}
					>
						<Text>right</Text>
					</TouchableOpacity>
				</SlideView.RightView>
			</SlideView.Provider>
		</SafeAreaView>
	);
}

export default Example;
