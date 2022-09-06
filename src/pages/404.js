import * as React from "react";
import Layout from "../components/Layout";

const NotFoundPage = () => (
	<Layout>
		<div className="wrapper text-center max-w-md m-auto min-h-[60vh] flex flex-col items-center justify-center">
			<h1 className="text-5xl mb-4">NOT FOUND</h1>
			<p class="text-lg">Page not found.</p>
		</div>
	</Layout>
);

export default NotFoundPage;
