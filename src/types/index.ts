
export type TMarkerType = 'location' | 'end' | 'start' | 'simple_red' | 'simple_blue' | 'loc_blue' | 'loc_red' | 'dot_red' | 'dot_blue' | 'red1' | 'red2' | 'red3' | 'red4' | 'red5' | 'red6' | 'red7' | 'red8' | 'red9' | 'blue1' | 'blue2' | 'blue3' | 'blue4' | 'blue5' | 'blue6' | 'blue7' | 'blue8' | 'blue9';
export interface IPosition {
    position: Record<'lng'|'lat', number>
    labelContent: string;
    infoTitle?: string;
    infoContent?: string;
    uuid?: string;
}
export interface IClassify {
    name: string;
    markType: TMarkerType;
    labelStyle?: Object;
    positions: IPosition[];
}