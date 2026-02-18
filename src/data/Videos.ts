interface Video {
    id: number,
    title: string,
    description: string,
    videoUrl: string
}

export const videos : Array<Video> = [
    {
        id: 1,
        title: 'Video 1',
        description: 'Video description',
        videoUrl: 'https://res.cloudinary.com/dw9lfc4am/video/upload/v1771335329/Evadiendo_fuww7o.mp4'
    },
    {
        id: 2,
        title: 'Video 2',
        description: 'Video description',
        videoUrl: 'https://res.cloudinary.com/dw9lfc4am/video/upload/v1771367774/Elias_-_2026-02-14_wqyxmj.mp4'
    },
    {
        id: 3,
        title: 'Video 3',
        description: 'Video description',
        videoUrl: 'https://res.cloudinary.com/dw9lfc4am/video/upload/v1771335325/VEGANOS_QUE_NO_ACTIVAN_cqfwqw.mp4'
    },
    {
        id: 4,
        title: 'Video 4',
        description: 'Video description',
        videoUrl: 'https://res.cloudinary.com/dw9lfc4am/video/upload/v1771335324/VID_20260214_082017_490_osdjgf.mp4'
    },
    {
        id: 5,
        title: 'Video 5',
        description: 'Video description',
        videoUrl: 'https://res.cloudinary.com/dw9lfc4am/video/upload/v1771335320/Gary_Yourofsky_t2kgs8.mp4'
    }
]
