import React, { useState } from 'react';
import type { WidgetTaskHandlerProps } from 'react-native-android-widget';

import { PrayerWidget, PrayerWidgetProps } from './PrayerWidget';

const prayer = { FajrStatu: true, DhuhrStatu: true, AsrStatu: true, MaghribStatu: true, IshaStatu: true }

const nameToWidget = {
  Prayer: PrayerWidget,
};
export async function widgetTaskHandler(props: WidgetTaskHandlerProps) {

  const widgetInfo = props.widgetInfo;
  const Widget = nameToWidget[widgetInfo.widgetName as keyof typeof nameToWidget] as any;

  switch (props.widgetAction) {
    case 'WIDGET_RESIZED':
      console.log("WIDGET_ADDED çalıştı")
      props.renderWidget(<PrayerWidget FajrStatu={prayer.FajrStatu} DhuhrStatu={prayer.DhuhrStatu} AsrStatu={prayer.AsrStatu} MaghribStatu={prayer.MaghribStatu} IshaStatu={prayer.IshaStatu} />)
      break;
    case 'WIDGET_ADDED':
      console.log("WIDGET_ADDED çalıştı")
      props.renderWidget(<PrayerWidget FajrStatu={prayer.FajrStatu} DhuhrStatu={prayer.DhuhrStatu} AsrStatu={prayer.AsrStatu} MaghribStatu={prayer.MaghribStatu} IshaStatu={prayer.IshaStatu} />)
      break;
    case 'WIDGET_UPDATE':
      console.log("WIDGET_UPDATE çalıştı")
      props.renderWidget(<PrayerWidget FajrStatu={prayer.FajrStatu} DhuhrStatu={prayer.DhuhrStatu} AsrStatu={prayer.AsrStatu} MaghribStatu={prayer.MaghribStatu} IshaStatu={prayer.IshaStatu} />)
      break;
    case 'WIDGET_DELETED':
      console.log("WIDGET_DELETED çalıştı")
      break;
    case 'WIDGET_CLICK':
      props.clickAction == "FajrStatu" ? prayer.FajrStatu = !prayer.FajrStatu : undefined
      props.clickAction == "DhuhrStatu" ? prayer.DhuhrStatu = !prayer.DhuhrStatu : undefined
      props.clickAction == "AsrStatu" ? prayer.AsrStatu = !prayer.AsrStatu : undefined
      props.clickAction == "MaghribStatu" ? prayer.MaghribStatu = !prayer.MaghribStatu : undefined
      props.clickAction == "IshaStatu" ? prayer.IshaStatu = !prayer.IshaStatu : undefined
      props.renderWidget(<PrayerWidget FajrStatu={prayer.FajrStatu} DhuhrStatu={prayer.DhuhrStatu} AsrStatu={prayer.AsrStatu} MaghribStatu={prayer.MaghribStatu} IshaStatu={prayer.IshaStatu} />)
      break;


    default:
      break;
  }
}
