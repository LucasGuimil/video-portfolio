import { VideoList } from "../components/body/VideoList.tsx";

export function Projects(): React.ReactElement {
    return (
        <div className="projects">
            <h2>Projects</h2>
            <p>Here are some of my projects where I demonstrate my skills doing translations and captioning, with great attention to detail and accuracy:</p>
            <VideoList />
        </div>
    )
}