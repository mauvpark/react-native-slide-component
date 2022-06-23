import { StyleProp, ViewStyle } from "react-native";

export interface ProviderProps {
	componentWidth?: ViewStyle["width"];
	componentHeight?: ViewStyle["height"];
	children: React.ReactNode;
}

export interface LeftViewProps {
	width?: ViewStyle["width"];
	backgroundColor?: ViewStyle["backgroundColor"];
	extraStyle?: StyleProp<ViewStyle>;
	children: React.ReactNode;
}

export interface RightViewProps {
	backgroundColor?: ViewStyle["backgroundColor"];
	extraStyle?: StyleProp<ViewStyle>;
	children: React.ReactNode;
}

/**
 * This is main component to handle both left and right views.
 *
 * @method moveLeftToRight
 * @method moveRightToLeft
 *
 * @component Provider
 * @component LeftView
 * @component RightView
 */
export class SlideComponent {
	/**
	 *
	 * If you want to move to right side view, you could call this method.
	 *
	 * @param leftWidth If this param equals left view's width, left view will slide clearly. This param supports number and '%'.
	 * @param duration Set slide velocity, default 500
	 *
	 * @example
	 * SlideComponent.moveLeftToRight('100%');
	 *
	 * SlideComponent.moveLeftToRight(150);
	 *
	 * <Button title="Move right" onPress={() => SlideComponent.moveLeftToRight('50%')} />
	 */
	static moveLeftToRight: (
		leftWidth: string | number,
		duration?: number
	) => void;

	/**
	 * This is for moving to left side view. You can call this method in a right view's button.
	 *
	 * @param duration Set slide velocity, default 500
	 *
	 * @example
	 * SlideComponent.moveRightToLeft();
	 *
	 * <Button title="Move left" onPress={() => SlideComponent.moveRightToLeft()} />
	 */
	static moveRightToLeft: (duration?: number) => void;

	/**
	 * Provider is upper view which includes both left and right views.
	 *
	 * @param componentWidth Provider's width, default "100%"
	 * @param componentHeight Provider's height, default "100%"
	 * @param children Provider's children components
	 *
	 * @example
	 * <SlideComponent.Provider>
	 *   <SlideComponent.LeftView>
	 *   ...
	 *   </<SlideComponent.LeftView>
	 *   <SlideComponent.RightView>
	 *   ...
	 *   </<SlideComponent.RightView>
	 * </SlideComponent.Provider>
	 */
	static Provider: ({
		componentWidth,
		componentHeight,
		children,
	}: ProviderProps) => JSX.Element;

	/**
	 * This component is left side view. You could place your components below like View component.
	 *
	 * @param width The size of left view
	 * @param backgroundColor Background color of the view
	 * @param extraStyle All styles available
	 * @param children LeftView's children components
	 *
	 * @example
	 * <SlideComponent.LeftView>
	 *   <Text>Hello World!</Text>
	 * </SlideComponent.LeftView>
	 */
	static LeftView: ({
		width,
		backgroundColor,
		extraStyle,
		children,
	}: LeftViewProps) => JSX.Element;

	/**
	 * This component is right side view. You could place your components below like View component.
	 *
	 * @param backgroundColor Background color of the view
	 * @param extraStyle All styles available
	 * @param children RightView's children components
	 *
	 * @example
	 * <SlideComponent.RightView>
	 *   <Text>Hello World!</Text>
	 * </SlideComponent.RightView>
	 */
	static RightView: ({
		backgroundColor,
		extraStyle,
		children,
	}: RightViewProps) => JSX.Element;
}
