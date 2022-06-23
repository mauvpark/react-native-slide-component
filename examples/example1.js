function Example() {
	return (
		<SafeAreaView style={styles.container}>
			<SlideComponent.Provider>
				<SlideComponent.LeftView
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
						onPress={() =>
							SlideComponent.moveLeftToRight("100%", 500)
						}
					>
						<Text>left</Text>
					</TouchableOpacity>
				</SlideComponent.LeftView>
				<SlideComponent.RightView
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
						onPress={() => SlideComponent.moveRightToLeft(500)}
					>
						<Text>right</Text>
					</TouchableOpacity>
				</SlideComponent.RightView>
			</SlideComponent.Provider>
		</SafeAreaView>
	);
}

export default Example;
