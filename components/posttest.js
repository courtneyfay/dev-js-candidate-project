import Layout from '../components/MyLayout'
import fetch from 'isomorphic-unfetch'

const PostTest = (props) => (
	<Layout>
		<p>{props.show}</p>
	</Layout>
)

PostTest.getInitialProps = async function () {
	console.log('hitting getInitialProps for PostTest')
	const { id } = 975
	const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
	const show = await res.json()

	console.log(`Fetched show: ${show.name}`)

	return { show }
}

export default PostTest