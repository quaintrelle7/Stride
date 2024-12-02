import { google } from "googleapis"

const fitness = google.fitness("v1")

async function getGoogleFitData(auth) {
	const result = await fitness.users.dataset.aggregate({
		userId: "me",
		auth,
		requestBody: {
			aggregateBy: [
				{
					dataTypeName: "com.google.step_count.delta", // Change this to "com.google.distance.delta" for distance
				},
			],
			bucketByTime: { durationMillis: 86400000 }, // Daily buckets
			startTimeMillis: Date.now() - 7 * 86400000, // Last 7 days
			endTimeMillis: Date.now(),
		},
	})
	console.log("Google Fit Data:", result.data.bucket)
	return result.data.bucket
}
