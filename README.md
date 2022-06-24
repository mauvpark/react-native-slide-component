# react-native-slide-component

[![GitHub license](https://img.shields.io/github/license/mauvpark/react-native-slide-component)](https://github.com/mauvpark/react-native-slide-component/blob/main/LICENSE.md)

https://user-images.githubusercontent.com/74028161/175226156-57f453a2-44d3-4a55-b91a-07ee7eb2ed6a.mp4

## Description
This is a simple slide component. You could use this component when you want to change the view without navigation.

## How to install

```
// for npm
npm install react-native-slide-component

// for yarn
yarn add react-native-slide-component

// for expo
expo install react-native-slide-component
```

## What's New in v2?

The component instance should be created newly before use. It will prevent affecting another slide component. In v1, another component could be affected.

```js
// v1
import { SlideComponent } from "react-native-slide-component";

const example () => {
  return (
    <SlideComponent.Provider>
      ...
    </SlideComponent.Provider>
  );
}

// v2
import { SlideComponent } from "react-native-slide-component";

const SlideView = new SlideComponent();

const example2 () => {
  return (
    <SlideView.Provider>
      ...
    </SlideView.Provider>
  );
}
```

## Example

```js
import * as React from "react";
import { SafeAreaView } from "react-native";
import { SlideComponent } from "react-native-slide-component";

const SlideView = new SlideComponent();

const example = () => {

    function moveLeftToRight () {
        ... manipulate your states here ...
        SlideView.moveLeftToRight("100%", 300);
    }

    function moveRightToLeft () {
        SlideView.moveRightToLeft(300);
    }

    return (
        <SafeAreaView>
          <SlideView.Provider>
            <SlideView.LeftView width="100%">
              ... your code for left view is here ...
            </SlideView.LeftView>
            <SlideView.RightView>
              ... your code for right view is here ...
            </SlideView.RightView>
          </SlideView.Provider>
        </SafeAreaView>
    );
}

export default example;
```

## SlideComponent
The main component is `SlideComponent`. You could access all properties with the declared `SlideComponent`'s instance.

### Components

| Name  | Description  |
|---|---|
| `Provider`  | Provider is upper view which includes both left and right views.  |
| `LeftView`  | This component is left side view. You could place your components below like View component.  |
| `RightView`  | This component is right side view. You could place your components below like View component. |

#### Params

1. `Provider`

| Param  | Description  |
|---|---|
| componentWidth  | Provider's width, default "100%" (optional) |
| componentHeight  | Provider's height, default "100%" (optional) |
| children  | Provider's children components  |

2. `LeftView`

| Param  | Description  |
|---|---|
| width  | The size of left view (optional) |
| backgroundColor  | Background color of the view (optional) |
| extraStyle  | All styles available (optional) |
| children  | LeftView's children components  |

3. `RightView`

| Param  | Description  |
|---|---|
| backgroundColor  | Background color of the view (optional) |
| extraStyle  | All styles available (optional) |
| children  | RightView's children components  |

### Methods

| Name  | Description  |
|---|---|
| `moveLeftToRight`  | If you want to move right side view, you could call this method.  |
| `moveRightToLeft`  | This is for moving left side view. You can call this method in a right view's button. |

#### Params

1. `moveLeftToRight`

| Param  | Description  |
|---|---|
| leftWidth  | If this param equals left view's width, left view will slide clearly. This param supports number and '%'  |
| duration  | Set slide velocity, default 500 (optional)  |

2. `moveRightToLeft`

| Param  | Description  |
|---|---|
| duration  | Set slide velocity, default 500 (optional)  |
