export function VideoCard({ title, description, videoUrl }: { title: string; description: string; videoUrl: string }) {
  return (
    <div className="video-card">    
        <h2>{title}</h2>
        <p>{description}</p>
        <video controls width="100%">
            <source src={videoUrl} type="video/mp4" />  
            Your browser does not support the video tag.
        </video>
    </div>
  )
}