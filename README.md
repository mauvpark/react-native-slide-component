# react-native-slide-component

[![GitHub license](https://img.shields.io/github/license/mauvpark/react-native-slide-component)](https://github.com/mauvpark/react-native-slide-component/blob/main/LICENSE.md)

https://user-images.githubusercontent.com/74028161/175226156-57f453a2-44d3-4a55-b91a-07ee7eb2ed6a.mp4

## Description

This is simple slide component. You could use this component when you want to change view without navigation.

## How to install

```
// for npm
npm install react-native-slide-component

// for yarn
yarn add react-native-slide-component

// for expo
expo install react-native-slide-component
```

This library supports react-native version >= 0.68, but you could use in below version because it uses `Animated` and other simple components.

## SlideComponent

Main component is `SlideComponent`. You could access all properties with declared `SlideComponent`.

### Components

| Name  | Description  |
|---|---|
| `Provider`  | Provider is upper view which includes both left and right views.  |
| `LeftView`  | This component is left side view. You could place your components below like View component.  |
| `RightView`  | This component is right side view. You could place your components below like View component. |

- Types

### Methods

| Name  | Description  |
|---|---|
| moveLeftToRight  | If you want to move right side view, you could call this method.  |
| moveRightToLeft  | This is for moving left side view. You can call this method in a right view's button. |


