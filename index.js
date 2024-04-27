/**
 * @format
 */
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
AppRegistry.registerComponent(appName, () => App);

// Add Start
import { registerWidgetTaskHandler, } from 'react-native-android-widget';
import { widgetTaskHandler } from './src/widgets/widgetTaskHandler';
registerWidgetTaskHandler(widgetTaskHandler);
// Add End