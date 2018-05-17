/* eslint-disable */
import particles from './vue-particles.vue'

const VueParticles = {
	//张斌修改兼容ie浏览器
    install: function (Vue, options) {
        Vue.component('vue-particles', particles)
    }
}

export default VueParticles
/* eslint-disable */
