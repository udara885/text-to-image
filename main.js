import { HfInference } from "@huggingface/inference"

const hf = new HfInference(env.API_KEY)

const prompt = document.getElementById("prompt")
const button = document.getElementById("button")
const image = document.getElementById("image")

button.addEventListener("click", generateImage)

async function generateImage() {

	image.src = "./images/loader.svg"
	image.alt = "Loading..."

	const response = await hf.textToImage({
		model: "black-forest-labs/FLUX.1-dev",
		inputs: prompt.value
	})

	image.src = response ? URL.createObjectURL(response) : "./images/loader.svg"
	image.alt = prompt.value

	return image
}
