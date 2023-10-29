import { useParams } from "react-router-dom";

function Project() {
	let params = useParams()
	return ( 
		<div>
			<h2>Project view</h2>
			<p>{params.projectID}</p>
		</div>
	);
}

export default Project;