import { NearestFilter, TextureLoader } from 'three'

import {
	dirtImg,
	grassImg,
	glassImg,
	woodImg,
	logImg,
} from './images'

const dirtTexture = new TextureLoader().load(dirtImg)
const grassTexture = new TextureLoader().load(grassImg)
const logTexture = new TextureLoader().load(logImg)
const glassTexture = new TextureLoader().load(glassImg)
const woodTexture = new TextureLoader().load(woodImg)
const groundTexture = new TextureLoader().load(grassImg)

dirtTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;
groundTexture.magFilter = NearestFilter;

export {
    dirtTexture,
    grassTexture,
    logTexture,
    glassTexture,
    woodTexture,
    groundTexture,
}