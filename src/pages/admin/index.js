import * as React from "react";

import Layout from "../../components/Layout";

export default class AdminIndexPage extends React.Component {
	render() {
		return (
			<Layout>
				<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
			</Layout>
		);
	}
}
