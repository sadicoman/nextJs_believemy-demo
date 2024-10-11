import { useRouter } from "next/router";

export default function Articles() {
	const router = useRouter();
	const { slug } = router.query;

	return (
		<>
			<h1>Article ! {slug}</h1>
			<br />
		</>
	);
}
