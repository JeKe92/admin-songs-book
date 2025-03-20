export interface ISong {
    title: string;
    artist: string;
    key: string;
    compass: string;
    tempo: number;
    mainVoice?: string;
    id?: string;
}