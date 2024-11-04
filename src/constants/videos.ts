export const videos = [
  "https://www.youtube.com/watch?v=4HYKLY7hXr4",
  "https://www.youtube.com/watch?v=Py4zrERAV8s",
  "https://www.youtube.com/watch?v=yh670QHDISw",
  "https://www.youtube.com/watch?v=EUEB1sx_RwM",
  "https://www.youtube.com/watch?v=IIW_DYprilc",
];

export const getVideoId = (url: string) => {
    const urlParams = new URL(url).searchParams;
    return urlParams.get('v');
};
