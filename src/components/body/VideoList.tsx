import { videos } from "../../data/Videos.ts"
import { VideoCard } from "./VideoCard.tsx"
export function VideoList() : React.ReactElement {
    return (
        <div className="video-list">
            <h2>Projects</h2>
            <p>Here are some of my projects where I demonstrate my skills doing translations and captioning, with great attention to detail and accuracy:</p>
            <ul>
                {videos.map((video) => (
                    <VideoCard key={video.id} title={video.title} description={video.description} videoUrl={video.videoUrl} />
                ))
                }
            </ul>
        </div>
    )
}