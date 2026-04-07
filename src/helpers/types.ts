import { Codec } from 'node_modules/remotion/dist/cjs/codec';
import { ProResProfile } from 'node_modules/remotion/dist/cjs/prores-profile';
import { PixelFormat, VideoImageFormat } from 'remotion';

interface Option<T> {
    label: string;
    value: T;
}

export type ImageFormatOption = Option<VideoImageFormat>;
export type PixelFormatOption = Option<PixelFormat>;
export type CodecOption = Option<Codec>;
export type ProResProfileOption = Option<ProResProfile>;

export interface VideoConfig {
    outName: string;
    fps: number;
    durationInFrames: number;
    videoImageFormat: VideoImageFormat;
    pixelFormat: PixelFormat;
    codec: Codec;
    proResProfile: ProResProfile | null;
}

export interface DSLConfig {
    requestText: string | null;
    responseText: string | null;
}
