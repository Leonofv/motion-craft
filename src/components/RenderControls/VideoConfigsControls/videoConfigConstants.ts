import {
    CodecOption,
    ImageFormatOption,
    PixelFormatOption,
    ProResProfileOption,
} from '#/helpers/types';

export const INPUT_PROPS = {
    style: { width: '100%' },
    placeholder: 'Введите',
};

export const INPUT_NUMBER_PROPS = {
    style: { width: '100%' },
    placeholder: 'Введите',
    controls: false,
};

export const SELECT_PROPS = {
    style: { width: '100%' },
    placeholder: 'Выберите',
};

export const FPS_OPTIONS = [
    { label: '24', value: 24 },
    { label: '30', value: 30 },
    { label: '60', value: 60 },
];

export const VIDEO_IMAGE_FORMAT_OPTIONS: ImageFormatOption[] = [
    { label: 'JPEG', value: 'jpeg' },
    { label: 'PNG', value: 'png' },
];

export const PIXEL_FORMAT_OPTIONS: PixelFormatOption[] = [
    { label: 'yuv420p', value: 'yuv420p' },
    { label: 'yuv422p', value: 'yuv422p' },
    { label: 'yuv444p', value: 'yuv444p' },
];

export const CODEC_OPTIONS: CodecOption[] = [
    { label: 'H.264 (MP4)', value: 'h264' },
    { label: 'H.265 / HEVC', value: 'h265' },
    { label: 'ProRes', value: 'prores' },
];

export const PRORES_PROFILE_OPTIONS: ProResProfileOption[] = [
    { label: 'ProRes 422', value: 'standard' },
    { label: 'ProRes 422 HQ', value: 'hq' },
    { label: 'ProRes 4444', value: '4444' },
];
