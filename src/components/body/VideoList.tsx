import { videos } from "../../data/Videos.ts"
import { VideoCard } from "./VideoCard.tsx"
export function VideoList() : React.ReactElement {
    return (
        <div className="video-list">
            <ul>
                {videos.map((video) => (
                    <VideoCard key={video.id} title={video.title} description={video.description} videoUrl={video.videoUrl} />
                ))
                }
            </ul>
        </div>
    )
}