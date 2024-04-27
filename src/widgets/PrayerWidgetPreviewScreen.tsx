import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { WidgetPreview, requestWidgetUpdate } from 'react-native-android-widget';
import { PrayerWidget, PrayerWidgetProps } from './PrayerWidget';


export function PrayerWidgetPreviewScreen() {
    const [prayer, serPrayer] = React.useState<PrayerWidgetProps>({ FajrStatu: true, DhuhrStatu: true, AsrStatu: false, MaghribStatu: false, IshaStatu: false });

    React.useEffect(() => {
        requestWidgetUpdate({
            widgetName: 'Prayer',
            renderWidget: () => <PrayerWidget FajrStatu={prayer.FajrStatu} DhuhrStatu={prayer.DhuhrStatu} AsrStatu={prayer.AsrStatu} MaghribStatu={prayer.MaghribStatu} IshaStatu={prayer.IshaStatu} />
        });
    }, []);

    return (
        <View style={styles.container}>
            <WidgetPreview
                renderWidget={() => <PrayerWidget FajrStatu={prayer.FajrStatu} DhuhrStatu={prayer.DhuhrStatu} AsrStatu={prayer.AsrStatu} MaghribStatu={prayer.MaghribStatu} IshaStatu={prayer.IshaStatu} />}
                width={430}
                height={200}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
