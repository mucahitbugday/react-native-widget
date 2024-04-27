/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { FlexWidget, TextWidget } from 'react-native-android-widget';

export interface PrayerWidgetProps {
  FajrStatu: Boolean;
  DhuhrStatu: Boolean;
  AsrStatu: Boolean;
  MaghribStatu: Boolean;
  IshaStatu: Boolean;
}
export function PrayerWidget(prayer: PrayerWidgetProps) {
  return (
    <FlexWidget style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, borderRadius: 10, height: 'match_parent', width: 'match_parent', }}>

      <FlexWidget clickAction="FajrStatu" clickActionData={{ value: prayer.FajrStatu }} style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <TextWidget text='Fajr' style={{ fontSize: 18, color: '#fff' }} />
        <TextWidget style={{ fontSize: 20, color: '#fff', borderBottomColor: prayer.FajrStatu ? '#00FF00' : '#ff0000', borderBottomWidth: 3 }} text={"01:55"} />
      </FlexWidget>

      <FlexWidget clickAction="DhuhrStatu" clickActionData={{ value: prayer.DhuhrStatu }} style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <TextWidget text='Dhuhr' style={{ fontSize: 18, color: '#fff' }} />
        <TextWidget style={{ fontSize: 20, color: '#fff', borderBottomColor: prayer.DhuhrStatu ? '#00FF00' : '#ff0000', borderBottomWidth: 3 }} text={"01:55"} />
      </FlexWidget>

      <FlexWidget clickAction="AsrStatu" clickActionData={{ value: prayer.AsrStatu }} style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <TextWidget text='Asr' style={{ fontSize: 18, color: '#fff' }} />
        <TextWidget style={{ fontSize: 20, color: '#fff', borderBottomColor: prayer.AsrStatu ? '#00FF00' : '#ff0000', borderBottomWidth: 3 }} text={"01:55"} />
      </FlexWidget>

      <FlexWidget clickAction="MaghribStatu" clickActionData={{ value: prayer.MaghribStatu }} style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <TextWidget text='Maghrib' style={{ fontSize: 18, color: '#fff' }} />
        <TextWidget style={{ fontSize: 20, color: '#fff', borderBottomColor: prayer.MaghribStatu ? '#00FF00' : '#ff0000', borderBottomWidth: 3 }} text={"01:55"} />
      </FlexWidget>

      <FlexWidget clickAction="IshaStatu" clickActionData={{ value: prayer.IshaStatu }} style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <TextWidget text='Isha' style={{ fontSize: 18, color: '#fff' }} />
        <TextWidget style={{ fontSize: 20, color: '#fff', borderBottomColor: prayer.IshaStatu ? '#00FF00' : '#ff0000', borderBottomWidth: 3 }} text={"01:55"} />
      </FlexWidget>

    </FlexWidget>
  );
}



